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
  - "Fixed ResNet-2D evaluation network"
build:
  list: never
---

## 描述

建立 learnable data-prototype pipeline，在压缩 battery aging cycles 的同时保留 regression relationships、cross-sample distributions 和 degradation-sequence structure。

## 技术贡献

- 围绕 SOH label semantics、overall distribution 和 temporal structure 建立 data reduction 目标。
- 将 prototypes 视为 learnable variables，使用 SOH anchors 与 Huber regression loss 保留 label semantics。
- 加入 MMD-based feature-distribution alignment、similarity constraints 和 2D total variation regularization。
- 将 voltage、current 和 time sequences 转换为 GAF images，使用 fixed ResNet-2D network 评估 prototype updates。
- 在 HNEL 与 Toyota-MIT datasets 上比较 Random、Stratified 和 Full-data baselines。

## 状态

审稿中。该 manuscript、supplementary material、private code 和 download links 均不提供。
