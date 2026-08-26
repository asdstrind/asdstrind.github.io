---
title: "Edge-Constrained Generalized SOH Estimation"
translationKey: "project-edge-soh-deployment"
period: "09/2024–12/2025"
advisor: "Xiang Li"
description: "Cross-domain battery SOH estimation evaluated under battery-management-system deployment constraints."
methods:
  - "11 public battery aging datasets"
  - "Few-shot target-domain supervision"
  - "CNN–Transformer–KAN hybrid architecture"
  - "MMD feature-distribution alignment"
  - "Cross-domain and ablation evaluation"
  - "Parameter, FLOPs, and latency analysis"
build:
  list: never
---

## Description

Studied transferable degradation representations for lithium-ion battery SOH prediction when battery types, cycling protocols, and operating conditions differ across domains and target labels are limited.

## Technical contribution

- Curated 11 public battery aging datasets and standardized voltage, current, and time sequences to length 256 while preserving raw amplitudes.
- Designed a lightweight CNN–Transformer–KAN hybrid for local temporal features, long-range dependencies, and nonlinear regression.
- Jointly optimized SOH regression error and MMD-based feature alignment across source and target domains.
- Completed source–target comparisons, ablations, t-SNE analysis, and deployment-oriented measurement.

## Reported result

The associated paper reports cross-domain MAE below 1.1%, 8.37M parameters, 23.11 MMac FLOPs, and 8.9 ms inference time in the reported setup.
