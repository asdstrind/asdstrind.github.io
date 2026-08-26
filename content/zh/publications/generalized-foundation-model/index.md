---
title: "Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning"
translationKey: "publication-generalized-foundation-model"
authors:
  - "Zihan Gong"
  - "Xiang Li"
  - "Wei Zhang"
  - "Shaojie Yang"
publication: "Journal of Energy Storage 150 (2026): 120566"
year: "2026"
status: "Published"
abstract: >-
  本文面向 few-shot lithium-ion battery State-of-Health estimation，使用多个 source domains 的数据构建 generalized foundation model。方法通过 Maximum Mean Discrepancy 缩小 feature-distribution gaps，并结合 ResNet–Transformer hybrid 与 Kolmogorov–Arnold Network 提升 nonlinear representation，从 voltage、current 和 time data 中学习可迁移的 degradation knowledge。
build:
  list: never
---

## 研究贡献

该工作针对 battery types 与 operating conditions 造成的 distribution shifts，以及 target-domain labeled data 稀缺问题，结合 multi-source data curation、MMD-based feature alignment 和轻量化 CNN–Transformer–KAN model，并同时评估 cross-domain accuracy 与 BMS deployment constraints。

报告结果包括 cross-domain MAE < 1.1%、8.37M parameters、23.11 MMac FLOPs 和 8.9 ms inference time。

**DOI：** [10.1016/j.est.2026.120566](https://doi.org/10.1016/j.est.2026.120566)
