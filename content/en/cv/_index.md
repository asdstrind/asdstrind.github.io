---
title: "CV"
---

[Download PDF CV](/files/cv-zihan-gong-revised.pdf)

## Education

### Xi’an Jiaotong University — Xi’an, China

**Period:** 09/2023–Present\
C9 League · Projects 985 & 211\
**Major:** Intelligent Manufacturing Engineering (Qian Xuesen Honor Class, Automation Track)\
**GPA:** 88.65/100

## Research Experience

### Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation

**Role:** First Author · **Advisor:** Xiang Li\
**Period:** 02/2026–Present · **Status:** Under review

**Research focus:** Compressing large-scale battery aging cycles into learnable data prototypes while preserving regression relationships, cross-sample distribution, and degradation sequence structure.

**Methods:**

- Formulated data reduction around SOH label semantics, overall distribution, and temporal structure.
- Treated prototypes as learnable variables; used SOH anchors and Huber regression loss, Maximum Mean Discrepancy (MMD), similarity constraints, and 2D total variation regularization.
- Transformed voltage and current prototypes with a fixed temporal channel t into Gramian Angular Field (GAF) representations. Gradients through a fixed ResNet-2D network update only V and I; t remains fixed as a temporal index and conditioning variable.
- Used CNN–Transformer–KAN for SOH prediction.
- Evaluated on HNEL and Toyota-MIT against Random, Stratified, and Full-data baselines.

**Results:** In HNEL experiments, three synthetic prototypes achieved MAE 0.0192 and preserved degradation trends more stably than the same number of real samples at very high compression ratios.

### Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning

**Advisor:** Xiang Li\
**Period:** 09/2024–12/2025\
**Publication:** *Journal of Energy Storage* 150 (2026): 120566

**Research focus:** Learning transferable degradation representations under cross-dataset distribution discrepancies and limited target-domain labels while considering real-time BMS constraints.

**Methods:**

- Curated 11 publicly available battery aging datasets, retained cycles with SOH > 80%, and downsampled voltage, current, and time sequences to length 256 without uniform normalization.
- Designed a lightweight CNN-Transformer-KAN hybrid architecture for local temporal features, long-range dependencies, and nonlinear regression.
- Jointly optimized SOH regression error and an MMD constraint for feature-distribution alignment.
- Conducted source-target validation on three datasets and evaluated target-only, single-source, CNN, and CNN-Transformer baselines, as well as parameter count, FLOPs, and inference time.

**Results:** Cross-domain experiments achieved MAE < 1.1% across target datasets, with 8.37M parameters, 23.11 MMac FLOPs, and 8.9 ms inference time.

## Publications

1. [Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation](../publications/task-guided-prototype-distillation/) — Zihan Gong (first author); *IEEE Transactions on Emerging Topics in Computational Intelligence*; Under review.
2. [A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries](../publications/large-multimodal-foundation-model/) — Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang; *Journal of Energy Storage* 177 (2026): 123418; Published; [DOI](https://doi.org/10.1016/j.est.2026.123418).
3. [Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning](../publications/generalized-foundation-model/) — Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang; *Journal of Energy Storage* 150 (2026): 120566; Published; [DOI](https://doi.org/10.1016/j.est.2026.120566).

## Projects

- [Jetson-Based Edge Battery SOH Deployment](../projects/edge-soh-deployment/) — 08/2026–Present; completed discharge-controller schematic and two-layer PCB design; measurement acquisition and Jetson SOH inference tests.
- [Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework](../projects/cumcm-smoke-jamming-optimization/) — CUMCM Problem B, 09/2025; First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM), Shaanxi Division, 2025.
- [Green Agriculture: Future or Not?](../projects/mcm-icm-green-agriculture/) — MCM/ICM Problem E, 01/2025; Meritorious Winner.
- [Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base](../projects/geely-wheel-hub-recognition/) — internship project, 07/2026.

## Competitions/Awards

### 2025 China Undergraduate Mathematical Contest in Modeling (CUMCM), Problem B

**Project:** *Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework*\
**Period:** 09/2025 · **Award:** First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM), Shaanxi Division, 2025

Contributed to kinematic and line-of-sight occlusion modeling, PSO-GA optimization, C++ implementation, convergence/result visualization, and manuscript writing.

### 2025 Mathematical Contest In Modeling/Interdisciplinary Contest In Modeling (MCM/ICM), Problem E

**Project:** *Green Agriculture: Future or Not?*\
**Period:** 01/2025 · **Award:** Meritorious Winner

Contributed to a multi-species reaction-diffusion model, sensitivity analysis, variable consistency checks, MATLAB R2023a simulations, visualization, and LaTeX typesetting.

## Skills

- **Machine learning and research:** Data-efficient and generalizable deep learning for battery health management and engineering time-series analysis; Domain Adaptation; Dataset/Prototype Distillation; multimodal foundation models; transfer learning; scientific machine learning.
- **Programming and tools:** Python, PyTorch, MATLAB, C++, NumPy, scikit-image, pandas, LaTeX.
- **Systems and applications:** Battery State-of-Health Estimation, edge AI deployment, embedded systems, signal processing, and battery management systems.
