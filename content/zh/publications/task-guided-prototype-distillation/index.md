---
title: "Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation"
translationKey: "publication-task-guided-prototype-distillation"
authors:
  - "Zihan Gong"
publication: "IEEE Transactions on Emerging Topics in Computational Intelligence"
status: "Under review"
first_author: true
publication_image: "/images/publications/task-guided-prototype-distillation-framework.png"
publication_image_alt: "任务引导原型蒸馏流程：数据准备、原型优化与性能评估"
publication_image_zoom: true
build:
  list: never
---

## 研究摘要

将大规模锂离子电池老化数据压缩为少量可学习原型，同时保留回归关系、跨样本分布与退化序列结构。

方法通过 SOH 锚点与 Huber 回归损失保留健康状态语义，使用最大均值差异（MMD）对齐特征分布，并结合相似性约束与二维全变差正则化保持数据结构。

电压、电流原型与固定时间通道 t 经格拉姆角场（GAF）变换后输入固定的 ResNet-2D 网络。联合损失的梯度通过该网络反向传播，仅更新原型中的 V、I；t 保持固定，用作时间索引与条件变量。SOH 预测由 CNN–Transformer–KAN 模型完成。

在 HNEL 实验中，三个合成原型的 MAE 为 0.0192。

[作者手稿（Google Drive）](https://drive.google.com/file/d/1MOKocRbRqNEGhoGAEFaoRRUITHftQYKY/view)
