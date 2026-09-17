# Maize Leaf Disease Classification — Canny edge features

Jupyter notebook that classifies maize (corn) leaf images into four classes — Common Rust, Gray
Leaf Spot, Leaf Blight, Healthy — by running Canny edge detection over each image and feeding the
flattened edge map to ten scikit-learn classifiers. Best result: **Decision Tree, 90.75 %**, then
SVM at 89.75 %.

This is the working code behind the Canny row of Table 1 in the
[published paper](../published%20paper/Published%20Paper.md) (*A Comparative Study of Edge
Detection Techniques to Identify Maize Leaf Diseases using Machine Learning*, Quest Journal of
Software Engineering and Simulation 9(12), Dec 2023). The paper's folder in this collection notes
that no code was published alongside it; this notebook is that code for one of the five operators.
Work done September 2022 on Colab (Tesla T4); pushed to
[github.com/faraaz817/Machine_Learning](https://github.com/faraaz817/Machine_Learning) February
2023. B.Tech IT, KMIT Hyderabad.

## Files

| File | What it is |
| --- | --- |
| `canny_edge_ipynb.ipynb` | 69 cells: exploration of thresholds and preprocessing on single images, then the 2 000-image pipeline and classifier comparison, then single-image prediction |

The dataset (Bangladeshi Crop Disease dataset, `Corn___*` folders) is read from Google Drive and
is not in the repo.

## The pipeline

```
for each of 4 class folders, first 500 images:
    plt.imread  →  cv2.resize (200 × 200)
      →  VarianceThreshold(0.16) over rows      # drop near-constant pixel columns
      →  back to RGB via PIL, resize 200 × 200
      →  cv2.Canny(img, 200, 256)               # edge map, uint8
      →  .flatten()                             # 40 000-dim feature vector

X: (2000, 40000)   y: (2000,)  ∈ {1 rust, 2 healthy, 3 blight, 4 gray}
train_test_split(test_size=0.2, shuffle=True)  →  1600 / 400
```

The edge detector is used as a *feature extractor*, not to find the leaf outline: lesions
(pustules, rectangular spots, blight streaks) have strong local gradients, so the edge map keeps
the disease signal and throws away most of the smooth green background. The paper repeats this
with Sobel, Roberts, Prewitt and Laplacian; this notebook is the Canny arm.

## Results

Ten classifiers on the same 1600/400 split (cell 51 of the notebook):

| Classifier | Accuracy |
| --- | --- |
| **Decision Tree** | **0.9075** |
| SVM (RBF, default C) | 0.8975 |
| SVM in `Pipeline(StandardScaler, SVC)` | 0.885 |
| Gaussian Naive Bayes | 0.85 |
| MLP (`max_iter=300`) | 0.8425 |
| Gaussian Process (RBF kernel) | 0.84 |
| Complement Naive Bayes | 0.7475 |
| Nearest Centroid | 0.6425 |
| Self-training SVC (30 % labels hidden) | 0.6325 |
| KNN (k=1) | 0.6075 |
| AdaBoost (100 estimators) | 0.5925 |

The eight that appear in the paper match its Canny row exactly (SVM 89.75, DT 90.75, NB 85.00,
GPC 84.00, NC 64.25, CNB 74.75, MLP 84.25, AdaBoost 59.25). KNN and the self-training classifier
were tried here and dropped from the paper.

The last section of the notebook loads a single held-out photo (including out-of-distribution
tests: a leaf photographed against a black background, rotated horizontal/vertical shots), runs it
through the same pipeline and prints each model's prediction — a quick sanity check that the
models had not just learned the dataset's uniform backgrounds.

## Reading the notebook

It is an exploration record, not a clean script. Cells 8–29 are single-image experiments on
threshold pairs (100/256, 200/256, 250/250), aperture sizes, histogram equalisation and PIL colour
enhancement; several of them error out (a `scipy.misc.toimage` import, `cv2.imread` on an array)
and were left in place. The actual experiment is cells 30–51; prediction is 52–67.

To re-run: change the four `dir*` paths in cell 32 to a local copy of the dataset, drop the
`google.colab` imports, and run from cell 7.

```bash
pip install numpy opencv-python matplotlib scikit-learn pillow scipy
```

## Known issues

- **`VarianceThreshold` is fitted per image.** `sel.fit_transform(newarr)` is called inside the
  loop, so each image is thresholded against its own variance and may end up with a different
  number of surviving columns before the resize normalises it back to 200 × 200. It should be
  fitted once on the training set.
- **Mixed image loaders.** `plt.imread` returns RGB and `cv2.imread` returns BGR; the notebook
  uses both. It does not matter for Canny on a grayscale-converted input but it is a trap for
  anyone extending it.
- **Cell 65 references `regressor`**, which is never defined — the Decision Tree object was
  overwritten by later classifiers assigned to `clf`. Rename the tree to its own variable.
- **Self-training mutates `Y_train` in place** (cell 49 sets 30 % of labels to −1). If the
  notebook is run top to bottom, KNN in cell 50 trains on those corrupted labels, which would
  explain its unusually low 0.6075. Execution counts were stripped by Colab so the actual order
  can't be confirmed; either way, copy the array first.
- **No cross-validation and no seed on the split**, so the reported accuracies are single-run
  figures.
- The variance-threshold step and the 200/256 thresholds were chosen by eye on two sample images.

## Caveat

Coursework / research exercise on a public dataset. The 500-per-class cap and the single split
mean the numbers are indicative, not benchmark-grade.
