# Heart Disease Prediction

Exploratory analysis and binary classification on the UCI Cleveland heart disease dataset (303
patients, 13 clinical features). The notebook walks from plots through logistic regression to a
decision tree, and exports the trained tree as `decision_tree_model.pkl`.

## Files

| File | What it is |
| --- | --- |
| [Heart_disease.ipynb](Heart_disease.ipynb) | The full analysis — EDA, model iterations, feature importances |
| [heart-disease.csv](heart-disease.csv) | Dataset, 303 rows × 14 columns, no missing values |
| [decision_tree_model.pkl](decision_tree_model.pkl) | Trained `DecisionTreeClassifier`, joblib-dumped |

## The data

303 patients, 165 with heart disease (`target=1`) and 138 without — close to balanced. Every
column is numeric with no nulls.

| Column | Meaning | Range |
| --- | --- | --- |
| `age` | age in years | 29–77 |
| `sex` | 1 = male, 0 = female | 0–1 |
| `cp` | chest pain type | 0–3 |
| `trestbps` | resting blood pressure (mm Hg) | 94–200 |
| `chol` | serum cholesterol (mg/dl) | 126–564 |
| `fbs` | fasting blood sugar > 120 mg/dl | 0–1 |
| `restecg` | resting ECG result | 0–2 |
| `thalach` | max heart rate achieved | 71–202 |
| `exang` | exercise-induced angina | 0–1 |
| `oldpeak` | ST depression from exercise | 0.0–6.2 |
| `slope` | slope of peak exercise ST segment | 0–2 |
| `ca` | major vessels coloured by fluoroscopy | 0–4 |
| `thal` | thalassemia result | 0–3 |
| `target` | **label** — 1 = heart disease present | 0–1 |

## Setup

```bash
pip install pandas numpy matplotlib seaborn scikit-learn statsmodels imbalanced-learn joblib
jupyter notebook Heart_disease.ipynb
```

The notebook was written in Google Colab and reads from
`/content/drive/MyDrive/Tech_seminar/heart-disease.csv`. Running it locally means changing the
`filepath` in cell 2 (and the `joblib.dump` path near the end) to the local file:

```python
filepath = "heart-disease.csv"
```

Cell 35 also imports `google.colab.files`, which will fail outside Colab — drop that import.

## What the notebook does

**Exploration (cells 3–17).** Age against cholesterol as a scatter, then with a grid, a regression
line, a degree-4 polynomial fit and a LOWESS smoother; an age histogram; disease presence by age
as a count plot; resting blood pressure against age and against the target as a box plot. The
point of the repeated plots is to compare how different fits read the same weak relationship —
age and cholesterol turn out to have no clean trend.

**Modelling (cells 18–34).** Several passes, each changing one thing:

| Approach | Accuracy | Note |
| --- | --- | --- |
| Logistic regression, raw features, random 80/20 split | 0.85 | the honest baseline |
| Logistic regression, `StandardScaler` applied | 0.85 | scaling fixed the convergence warning, not the score |
| Logistic regression, rows 250–300 held out as the test set | 0.65 | that slice is all class 0, so class 1 metrics are undefined |
| Logistic regression + `RandomOverSampler` | 0.79 | balanced classes, slightly lower accuracy |
| Decision tree + `RandomOverSampler` | 0.82 | the version that was saved |

**Feature importances (cells 36–37).** From a decision tree fit on the whole dataset:

```
cp        0.266      age       0.061
ca        0.146      trestbps  0.060
thal      0.113      thalach   0.043
chol      0.109      slope     0.037
oldpeak   0.100      sex       0.027
                     exang     0.020
                     restecg   0.019
                     fbs       0.000
```

Chest pain type dominates; fasting blood sugar contributes nothing to this tree.

## Using the saved model

```python
import joblib
import pandas as pd

model = joblib.load("decision_tree_model.pkl")
cols = ["age","sex","cp","trestbps","chol","fbs","restecg",
        "thalach","exang","oldpeak","slope","ca","thal"]

patient = pd.DataFrame([[57, 0, 1, 130, 236, 0, 0, 174, 0, 0.0, 1, 1, 2]], columns=cols)
print(model.predict(patient))   # [0] = no heart disease predicted
```

Pass a DataFrame rather than a bare list — the notebook's `model.predict([[...]])` calls work but
raise `UserWarning: X does not have valid feature names`. Feature order must match the table
above. The pickle was produced on scikit-learn 1.x under Python 3.10; loading it on a very
different version may warn or fail, in which case re-run the training cell.

## Known issues

These are real bugs in the notebook, left in place because the notebook is a record of the
exploration:

- **Cells 29 and 31 leak the label.** `df.iloc[:, :200]` and `df.drop('target', axis=1).iloc[:,
  :300]` were meant to subset *columns*, but the dataset only has 14 — cell 29 therefore keeps
  `target` in `X`, which is why it reports a perfect 1.00 score. The comments ("select the first
  200 columns") suggest the author was thinking of rows. Ignore both results.
- **The rows 250–300 test split (cells 25, 27) is degenerate.** The dataset is sorted by label, so
  that range contains only class 0. The 0.65 accuracy and the zeroed class-1 metrics are artifacts
  of the split, not model quality.
- **Oversampling happens before the train/test split** (cells 28–33). Copies of the same patient
  can land on both sides, which inflates the reported score. Resample inside the training fold
  only.
- **Cell 33 slices `.iloc[:, :304]`** — harmless, but another row/column mix-up.

The 0.85 logistic regression in cell 22 is the only number here measured on a clean split.

## Caveat

This is a coursework/seminar exercise on a small public dataset. It is not a diagnostic tool and
should not inform any clinical decision.
