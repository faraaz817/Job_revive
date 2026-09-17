# A Comparative Study of Edge Detection Techniques to Identify Maize Leaf Diseases using Machine Learning

Published paper, December 2023. Five edge detection operators are each paired with eight machine
learning classifiers to find the combination that best classifies maize (corn) leaf disease from
images. Best result: **Sobel + Multi-layer Perceptron, 94.75%**.

## Publication

| | |
| --- | --- |
| Journal | Quest Journal of Software Engineering and Simulation |
| Publisher | Quest Journals Inc. |
| Volume / Issue | 9 (12), 2023, pp. 43–51 |
| ISSN | 2321-3795 (online), 2321-3809 (print) |
| Impact factor | 6.18 — peer reviewed, refereed |
| Archive | http://www.questjournals.org/jses/archive.html |
| Dates | Received 12 Dec 2023, revised 24 Dec, accepted 26 Dec 2023 |

Open access, © the authors 2023.

## Authors

All four from Keshav Memorial Institute of Technology (KMIT), Hyderabad, India:

1. Khushi M Asudaria *(corresponding author)*
2. Mohammed Faraaz Abdul Khadeer
3. Syed Shujauddin Rafai
4. Kondakindi Sphoorthy Reddy

## Files

| File | Contents |
| --- | --- |
| [Research Paper & Certificate.pdf](Research%20Paper%20%26%20Certificate.pdf) | All four publication certificates followed by the full 9-page paper |
| [Research Paper.pdf](Research%20Paper.pdf) | The paper alone |
| [Certificate(Research paper).pdf](Certificate\(Research%20paper\).pdf) | The certificates alone |

## The problem

Maize is one of the four most-grown crops worldwide and is cultivated year-round in India, where
production reached 30,250 thousand tons in 2020. A CIPHET study for 2012–13 puts annual losses at
4.65% of total corn production. Three diseases account for most of it:

- **Leaf blight** — *Bipolaris maydis*, a fungus that thrives in warm, damp conditions
- **Common rust** — *Puccinia sorghi*; starts as leaf specks, becomes blister-like pustules that
  darken from brown to black
- **Gray leaf spot** — *Cercospora*; rectangular brown lesions, spores live in topsoil and spread
  in humid, hot, wet weather

Manual inspection is slow and labour-intensive, which is what motivates automating it.

## Method

```
Bangladeshi Crop Dataset (15,000 images)
    └─ preprocess:  resize 200×300 → thresholds 100/256 → low-variance feature selection
                    → aperture size 7 → Gaussian blur → grayscale
        └─ edge detection:  Roberts | Sobel | Prewitt | Canny | Laplacian
            └─ classify:  SVM, Decision Tree, Naive Bayes, Gaussian Process,
                          Nearest Centroid, Complement NB, MLP, AdaBoost
                └─ compare accuracy (scikit-learn metrics module)
```

Four classes: three diseases plus healthy leaves.

The edge detection step is used unconventionally here — not to trace the outline of the leaf, but
to bring out the lesion features *on* it, reducing the data the classifier has to process while
keeping what distinguishes one disease from another.

### Why these classifiers

Each was picked for a specific property of the edge-detection problem: SVM for learning the
boundary between edge and non-edge pixels; Decision Tree for non-linear decision boundaries and
interpretability; Naive Bayes for speed and minimal tuning; Gaussian Process for calibrated
probabilities and uncertainty; Nearest Centroid for well-separated classes; **Complement Naive
Bayes specifically because non-edge pixels vastly outnumber edge pixels**, which skews a plain
multinomial NB; MLP for intricate non-linear edge patterns; AdaBoost to lift weak classifiers and
resist overfitting on imbalanced data.

## Results

Accuracy (%), Table 1 of the paper. Best per row in **bold**:

| Edge detection | SVM | DT | NB | GPC | NC | CNB | MLP | AdaBoost |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Canny | 89.75 | **90.75** | 85.00 | 84.00 | 64.25 | 74.75 | 84.25 | 59.25 |
| Sobel | 94.00 | 90.25 | 73.25 | 79.25 | 65.00 | 62.00 | **94.75** | 49.00 |
| Roberts | 89.67 | **91.17** | 78.00 | 90.00 | 67.84 | 68.84 | 90.17 | 55.67 |
| Prewitt | **92.25** | 91.50 | 80.00 | 83.50 | 70.00 | 72.00 | 25.25 | 66.25 |
| Laplacian | **92.75** | 89.00 | 80.25 | 81.00 | 79.75 | 77.78 | 85.75 | 73.50 |

**Sobel + MLP at 94.75% is the overall winner.** MLP is the strongest classifier on four of the
five operators but collapses to 25.25% on Prewitt — below chance for four classes — which the
paper reports without explaining.

A negative result worth keeping: the authors tried sharpening and raising contrast to expose more
detail, and accuracy dropped. The extra detail amplified noise faster than signal, so they settled
on a milder preprocessing setting instead.

## Prior work it builds on

- Ramesh et al. [8] — RGB → grayscale → HSV histograms with Random Forest, ~70%
- Deshpande et al. [6] — Haar wavelet GLCM features with SVM and KNN, up to 88%
- Syarief et al. [7] — seven CNN architectures (AlexNet, VGG16/19, ResNet50/110, GoogleNet,
  Inception-V3) against SVM, KNN and Decision Tree; AlexNet + SVM led

This paper's contribution is inserting edge detection as the feature-extraction step and
benchmarking the operator/classifier grid, which the prior work does not do.

## Future scope

Extend the method to other crops with similar leaf diseases, and wrap it in an application that
alerts the farmer to remove affected leaves before the disease spreads.

## Reading notes

Minor inconsistencies in the published text, noted so you aren't confused reading it against the
table:

- Section IV states "Prewitt Edge Detection with the Complement Naive Bayes classifier has a
  92.25% accuracy rate." Table 1 gives Prewitt/CNB as 72.00; 92.25 is the Prewitt/SVM figure.
- The intro cites `[16]` for India's maize production, but that is `[15]` (Knoema) in the
  reference list — `[16]` is the GeeksforGeeks MATLAB page.
- The Prewitt section cites `[17]`, which does not exist; the list ends at `[16]`.
- Figure 1 subfigures are captioned (a)–(d) but referenced in the body as Fig. 3b–3e.

No code or dataset is included in this folder — the Bangladeshi Crop Dataset is external, and the
implementation is described in the paper rather than published alongside it.
