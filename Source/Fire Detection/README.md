# Fire Detection and Alerting System

Real-time fire detection from a live camera feed using a Haar cascade classifier. When fire is
detected in a frame, the system draws a bounding box around it, plays an audible alarm so people
nearby can evacuate, and sends a WhatsApp alert to the property owner/security chief and the
nearest fire station.

B.Tech (Information Technology) final-year project — Keshav Memorial Institute of Technology,
Hyderabad, 2023–24. The full report is in [Fire Detection.pdf](Fire%20Detection.pdf).

## Why

Most deployed fire detection systems are sensor-only: they detect smoke within a limited radius,
sound a local alarm, and nothing more. They can be fooled, and they don't notify anyone off-site.
This project uses the cameras a building already has, so the marginal cost is close to zero, and it
both alarms locally and alerts remotely.

Haar cascade was chosen over newer object detectors because its detection latency is lower — for a
spreading fire, reaction time matters more than a few points of accuracy.

## How it works

```
camera (cv2.VideoCapture)
    └─ frame ──> fire_cascade.detectMultiScale()
                     └─ on detection:
                          ├─ cv2.rectangle() around the fire region
                          ├─ thread 1: play_alarm_sound_function()   -> playsound(audio.mp3)
                          └─ thread 2: alert_message_function()      -> RAPIWHA WhatsApp API
                                                                        (sent once per run)
```

Both alert actions run on their own threads so the capture loop keeps reading frames without
blocking. The message thread is guarded by a `runOnce` flag so a single incident does not spam the
recipients; the alarm sound repeats while fire is still in frame.

## Requirements

**Software**

- Python 3
- OpenCV (`cv2`), `requests`, `playsound`, `numpy`
- Windows 7 or later (developed and trained on Windows 11)
- A RAPIWHA account and API key for WhatsApp alerts

**Hardware (minimum)**

| Item | Minimum |
| --- | --- |
| Processor | Intel Pentium i3 |
| Speed | 2.9 GHz |
| RAM | 4 GB |
| Disk | 8 GB |
| Camera | any webcam / IP camera reachable by OpenCV |

```bash
pip install opencv-python requests playsound numpy
```

## Running it

1. Place the trained cascade `fire_detection.xml` and the alarm file `audio.mp3` alongside the
   script, and point the paths in the code at them.
2. Fill in `apikey` and `number` in the RAPIWHA querystrings, and edit the message text to name the
   actual location.
3. Run the script. A window titled **Fire Detector** opens showing the live feed with detections
   boxed in blue.
4. Press **q** to quit.

### Sample code

```python
import cv2
import threading
import playsound
import requests

fire_cascade = cv2.CascadeClassifier(r"fire_detection.xml")
vid = cv2.VideoCapture(0)
runOnce = False

def play_alarm_sound_function():
    playsound.playsound(r"audio.mp3", True)
    print("Fire alarm end")

def alert_message_function():
    url = "https://panel.rapiwha.com/send_message.php"
    querystring = {"apikey": "", "number": "", "text": "FIRE DETECTED AT PLACE"}
    response = requests.request("GET", url, params=querystring)
    querystring1 = {"apikey": "", "number": "", "text": "SEND FIRE ENGINES AT place"}
    response1 = requests.request("GET", url, params=querystring1)
    print(response.text)
    print(response1.text)

while True:
    ret, frame = vid.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    fire = fire_cascade.detectMultiScale(frame, 2.0, 8)

    for (x, y, w, h) in fire:
        cv2.rectangle(frame, (x - 20, y - 20), (x + w + 20, y + h + 20), (255, 0, 0), 2)
        print("Fire alarm initiated")
        threading.Thread(target=play_alarm_sound_function).start()

        if runOnce is False:
            print("Alert Initiated")
            threading.Thread(target=alert_message_function).start()
            runOnce = True
        else:
            print("Alert message already sent")

    cv2.imshow("Fire Detector", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

## Training the classifier

The cascade was trained on the command line with OpenCV's legacy Haar training tools on Windows.
Summary of the pipeline (Chapter 5 of the report has the full walkthrough):

1. **Collect images** — positives contain fire, negatives do not. More of both gives a more
   accurate classifier.
2. **List the negatives** — `dir /b *.jpg > bg.txt` in `training\negative`.
3. **Mark the positives** — run `objectmaker.exe` in `training\positive`, drag a box around each
   fire region (start from the top-left or bottom-right corner, or the coordinates are not
   written), SPACE to accept, ENTER for the next image. Produces `info.txt`, one line per image:
   object count followed by `x y w h` per object. Back `info.txt` up before every restart — the
   tool overwrites it silently.
4. **Pack a vector file**
   ```
   createsamples.exe -info positive/info.txt -vec vector/facevector.vec -num 200 -w 24 -h 24
   ```
5. **Train**
   ```
   haartraining.exe -data cascades -vec vector/vector.vec -bg negative/bg.txt ^
       -npos 200 -nneg 200 -nstages 15 -mem 1024 -mode ALL -w 24 -h 24 -nonsym
   ```
   `-w`/`-h` must match step 4. Training can stop before `-nstages` if the misclassification ratio
   is met — usually a good sign, but it also happens when there are too few positives (< ~500).
6. **Convert to XML** — copy stage folders `0..N-1` into `cascade2xml/data/` and run
   `haarconv.exe data fire_detection.xml 24 24`.

## Testing

| # | Case | Expected |
| --- | --- | --- |
| 1 | Python installation | `python --version` prints the version; deployment fails if the environment is missing |
| 2 | Program integration | Modules import and the script runs end to end |
| 3 | Load trained dataset | Cascade XML loads and is usable; error if it cannot be read |

## Non-functional targets

- Average response time under 5 s; system operational within 1 minute of startup.
- Recovery within 30 s of failure; the application is restart-safe.
- Maintenance is a matter of retraining for better accuracy — the detection algorithm is
  swappable, so a faster future algorithm can replace Haar cascade without redesigning the system.

## Team

| Name | Roll number |
| --- | --- |
| Mohammed Faraaz Abdul Khadeer | 20BD1A1299 |
| Shaik Huzair | 20BD1A12A9 |
| Mohammed Abdul Muqeet | 20BD1A1298 |
| Azim Damani | 20BD1A1273 |

Guide: Ms. Savitha Ramesh, Assistant Professor, Department of IT.

## Limitations and future scope

- Detection quality is bounded by the training set; a Haar cascade will produce false positives on
  fire-coloured objects and bright light.
- API key and recipient numbers are inline in the source — move them to environment variables or a
  config file before any real deployment.
- The model can be swapped for a newer object detector if its reaction time beats Haar cascade, and
  combined with other models for broader hazard detection.
