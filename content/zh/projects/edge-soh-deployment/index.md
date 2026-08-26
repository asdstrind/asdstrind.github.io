---
title: "Edge-Constrained Generalized SOH Estimation"
translationKey: "project-edge-soh-deployment"
period: "09/2024–12/2025"
advisor: "Xiang Li"
description: "在 battery-management-system deployment constraints 下进行 cross-domain battery SOH estimation。"
methods:
  - "11 个公开 battery aging datasets"
  - "Few-shot target-domain supervision"
  - "CNN–Transformer–KAN hybrid architecture"
  - "MMD feature-distribution alignment"
  - "Cross-domain and ablation evaluation"
  - "Parameter、FLOPs 和 latency analysis"
build:
  list: never
---

## 描述

研究 lithium-ion battery SOH prediction 的可迁移退化表示，处理 battery types、cycling protocols 和 operating conditions 的 domain differences，以及有限的 target labels。

## 技术贡献

- 整理 11 个公开 battery aging datasets，将 voltage、current 和 time sequences 统一至 length 256，同时保留 raw amplitudes。
- 设计 lightweight CNN–Transformer–KAN hybrid，分别处理 local temporal features、long-range dependencies 和 nonlinear regression。
- 联合优化 SOH regression error 与 MMD-based feature alignment。
- 完成 source–target comparisons、ablations、t-SNE analysis 和 deployment-oriented measurement。

## 报告结果

关联论文报告 cross-domain MAE < 1.1%、8.37M parameters、23.11 MMac FLOPs 和 8.9 ms inference time。
