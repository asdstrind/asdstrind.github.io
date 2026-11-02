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
publication_image: "/images/publications/generalized-foundation-model-preview.png"
abstract: >-
  面向少样本锂离子电池健康状态（SOH）估计，利用多源数据构建可泛化的基础模型。通过最大均值差异（MMD）缩小特征分布差异，结合 ResNet–Transformer 与 Kolmogorov–Arnold 网络，从电压、电流和时间序列中学习可迁移的退化特征。
build:
  list: never
---

## 研究贡献

针对电池类型与运行工况变化带来的分布偏移，以及目标域标注数据不足的问题，整合多源电池数据、MMD 特征对齐与轻量化 CNN–Transformer–KAN 模型，同时评估跨域精度和电池管理系统的部署需求。

跨域实验中，MAE 低于 1.1%；模型参数量为 8.37M，计算量为 23.11 MMac FLOPs，推理耗时为 8.9 ms。

**DOI：** [10.1016/j.est.2026.120566](https://doi.org/10.1016/j.est.2026.120566)
