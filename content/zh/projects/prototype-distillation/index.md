---
title: "Task-Guided Prototype Distillation"
translationKey: "project-prototype-distillation"
period: "02/2026–Present"
advisor: "Xiang Li"
status: "Under review"
description: "面向 lithium-ion battery SOH regression 的结构保持原型蒸馏。"
methods:
  - "SOH-anchor and Huber regression objectives"
  - "Maximum Mean Discrepancy (MMD)"
  - "Similarity constraints"
  - "2D total variation regularization"
  - "Gramian Angular Field (GAF) transformation"
  - "Fixed ResNet-2D network for prototype optimization"
build:
  list: never
---

## 描述

建立 learnable data-prototype pipeline，在压缩 battery aging cycles 的同时保留 regression relationships、cross-sample distributions 和 degradation-sequence structure。

## 技术贡献

- 围绕 SOH label semantics、overall distribution 和 temporal structure 建立 data reduction 目标。
- 将 prototypes 视为 learnable variables，使用 SOH anchors 与 Huber regression loss 保留 label semantics。
- 加入 MMD-based feature-distribution alignment、similarity constraints 和 2D total variation regularization。
- 将 voltage 和 current prototypes 与固定的 time channel t 一同转换为 GAF 表示后输入固定的 ResNet-2D 网络，通过该网络反向传播联合目标的梯度并仅更新 prototype 中的 V、I；t 作为固定的时间索引和 conditioning variable，用于保持时间顺序和物理一致性。SOH 估计由独立的 CNN–Transformer–KAN 模型完成。
- 在 HNEL 与 Toyota-MIT datasets 上比较 Random、Stratified 和 Full-data baselines。

## 状态

审稿中。该 manuscript、supplementary material、private code 和 download links 均不提供。
