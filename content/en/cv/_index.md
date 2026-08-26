---
title: "CV"
---

[Download the official PDF CV](/files/cv-zihan-gong-revised.pdf)

This structured page complements the downloadable PDF CV and does not replace it.

[Research overview](../research/)

## Education

### Xi’an Jiaotong University — Xi’an, China

**Period:** 09/2023–Present  
**Institutional description in CV:** C9 & Project 985&211  
**Major:** Intelligent Manufacturing Engineering (Qian Xuesen Honor Class, Automation Track)  
**GPA:** 88.65/100

## Research Experience

### Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation

**Role:** First Author · **Advisor:** Xiang Li  
**Period:** 02/2026–Present · **Status:** Under review

**Research focus:** Compressing large-scale battery aging cycles into learnable data prototypes while preserving regression relationships, cross-sample distribution, and degradation sequence structure.

**Methods:**

- Formulated data reduction around SOH label semantics, overall distribution, and temporal structure.
- Treated prototypes as learnable variables; used SOH anchors and Huber regression loss, Maximum Mean Discrepancy (MMD), similarity constraints, and 2D total variation regularization.
- Transformed voltage, current, and time sequences into Gramian Angular Field (GAF) images, extracted features with a fixed ResNet-2D evaluation network, and updated prototypes through joint-loss back-propagation.
- Evaluated on HNEL and Toyota-MIT against Random, Stratified, and Full-data baselines.

**Reported result:** In the HNEL setup of the submitted manuscript, three synthetic prototypes achieved MAE 0.0192 and maintained degradation trends more stably than the same number of real samples under extreme compression conditions.

### Python-based Data Cleaning, Downsampling, and Unified Storage Format for Multi-source Lithium-ion Battery Data

**Advisor:** Xiang Li  
**Period:** 03/2026–04/2026  
**Associated publication record:** *Journal of Energy Storage* 177 (2026): 123418

**Research focus:** Establishing a unified and reproducible data interface for heterogeneous lithium-ion battery data to support cross-domain training of multimodal large models.

**Methods:**

- Read `.csv` and `.mat` sources with Python and removed outliers.
- Downsampled raw sequences to 256 time points and optionally applied normalization as needed.
- Serialized cleaned data into `.pkl`, organized it by battery ID and cycle number, and stored each data domain as a separate dictionary.
- Wrote item-level checks for sample counts, dimensions, and read accuracy.

**Reported result:** Contributed the multi-source battery data preprocessing and standardization pipeline used to support downstream multimodal model training and evaluation. The reported results on unseen batteries were SOH MAE 0.0195 and RUL MAE 0.0961.

### Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning

**Advisor:** Xiang Li  
**Period:** 09/2024–12/2025  
**Associated publication record:** *Journal of Energy Storage* 150 (2026): 120566

**Research focus:** Learning transferable degradation representations under cross-dataset distribution discrepancies and limited target-domain labels while considering real-time BMS constraints.

**Methods:**

- Curated 11 publicly available battery aging datasets, retained cycles with SOH > 80%, and downsampled voltage, current, and time sequences to length 256 without uniform normalization.
- Designed a lightweight CNN-Transformer-KAN hybrid architecture for local temporal features, long-range dependencies, and nonlinear regression.
- Jointly optimized SOH regression error and an MMD constraint for feature-distribution alignment.
- Conducted source-target validation on three datasets and evaluated target-only, single-source, CNN, and CNN-Transformer baselines, as well as parameter count, FLOPs, and inference time.

**Reported result:** Reduced the cross-domain error to MAE < 1.1% across target datasets, with 8.37M parameters, 23.11 MMac FLOPs, and 8.9 ms inference time in the reported setup.

## Publications

1. [Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation](../publications/task-guided-prototype-distillation/) — Zihan Gong; *IEEE Transactions on Emerging Topics in Computational Intelligence*; Under review; year [TO BE PROVIDED].
2. [A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries](../publications/large-multimodal-foundation-model/) — Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang; *Journal of Energy Storage* 177 (2026): 123418; Published; [DOI](https://doi.org/10.1016/j.est.2026.123418).
3. [Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning](../publications/generalized-foundation-model/) — Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang; *Journal of Energy Storage* 150 (2026): 120566; Published; [DOI](https://doi.org/10.1016/j.est.2026.120566).

## Projects

- [Battery Dataset Processing and Infrastructure](../projects/battery-dataset-processing/) — 03/2026–04/2026; Python-based multi-source battery data processing and unified storage.
- [Multimodal Foundation Model Data and Evaluation](../projects/multimodal-foundation-model/) — 03/2026–04/2026; data infrastructure for unified SOH/RUL estimation.
- [Task-Guided Prototype Distillation](../projects/prototype-distillation/) — 02/2026–Present; under review.
- [Edge-Constrained Generalized SOH Estimation](../projects/edge-soh-deployment/) — 09/2024–12/2025; cross-domain SOH estimation for BMS constraints.
- [Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework](../projects/cumcm-smoke-jamming-optimization/) — CUMCM Problem B, 09/2025; First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM), Shaanxi Division, 2025.
- [Green Agriculture: Future or Not?](../projects/mcm-icm-green-agriculture/) — MCM/ICM Problem E, 01/2025; Meritorious Winner (certificate supplied).
- [Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base](../projects/geely-wheel-hub-recognition/) — internship project, 07/2026.

## Competitions/Awards

### 2025 China Undergraduate Mathematical Contest in Modeling (CUMCM), Problem B

**Project:** *Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework*  
**Period:** 09/2025 · **Award:** First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM), Shaanxi Division, 2025

Contributed to kinematic and line-of-sight occlusion modeling, PSO-GA optimization, C++ implementation, convergence/result visualization, and manuscript writing. The award was verified against the official 2025 Shaanxi provincial award list.

### 2025 Mathematical Contest In Modeling/Interdisciplinary Contest In Modeling (MCM/ICM), Problem E

**Project:** *Green Agriculture: Future or Not?*  
**Period:** 01/2025 · **Award:** Meritorious Winner (certificate supplied)

Contributed to a multi-species reaction-diffusion model, sensitivity analysis, variable consistency checks, MATLAB R2023a simulations, visualization, and LaTeX typesetting.

## Skills

- **Machine learning and research:** Data-efficient and generalizable deep learning for battery health management and engineering time-series analysis; Domain Adaptation; Dataset/Prototype Distillation; multimodal foundation models; transfer learning; scientific machine learning.
- **Programming and tools:** Python, PyTorch, MATLAB, C++, NumPy, scikit-image, pandas, LaTeX.
- **Systems and applications:** Battery State-of-Health Estimation, edge AI deployment, embedded systems, signal processing, and battery management systems.
