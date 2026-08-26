---
title: "Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation"
translationKey: "publication-task-guided-prototype-distillation"
authors:
  - "Zihan Gong"
  - "[TO BE PROVIDED]"
publication: "IEEE Transactions on Emerging Topics in Computational Intelligence"
year: "[TO BE PROVIDED]"
status: "Under review"
build:
  list: never
---

## 研究摘要

该 manuscript 研究如何将大规模 lithium-ion battery aging data 压缩为少量 learnable prototypes，同时保留 regression relationships、cross-sample distributions 和 degradation-sequence structure。

方法使用 SOH anchors 与 Huber regression loss 赋予 prototypes 健康状态语义，使用 Maximum Mean Discrepancy (MMD) 对齐 feature distributions，并加入 similarity constraints 与 2D total variation regularization。Voltage、current 和 time sequences 被转换为 Gramian Angular Field (GAF) images，再使用 fixed ResNet-2D network 进行评估。submitted manuscript 的 HNEL setup 报告使用三个 synthetic prototypes 时 MAE 为 0.0192。

**状态：** 审稿中。该 manuscript 的 PDF、supplementary material、private code 和 download links 均不提供。
