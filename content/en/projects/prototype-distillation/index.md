---
title: "Task-Guided Prototype Distillation"
translationKey: "project-prototype-distillation"
period: "02/2026–Present"
advisor: "Xiang Li"
status: "Under review"
description: "Structure-preserving prototype distillation for lithium-ion battery SOH regression."
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

## Description

Developed a learnable data-prototype pipeline for compressing battery aging cycles while preserving regression relationships, cross-sample distributions, and degradation-sequence structure.

## Technical contribution

- Formulated data reduction around SOH label semantics, overall distribution, and temporal structure.
- Treated prototypes as learnable variables, using SOH anchors and Huber regression loss for label semantics.
- Added MMD-based feature-distribution alignment, similarity constraints, and 2D total variation regularization.
- Transformed voltage and current prototypes together with a fixed temporal channel t into GAF representations, back-propagated the joint objective through a fixed ResNet-2D network to optimize only the prototype V and I variables, and kept t fixed as a temporal conditioning/indexing variable to preserve ordering and physical consistency. SOH estimation was performed separately with the CNN–Transformer–KAN predictor.
- Compared Random, Stratified, and Full-data baselines on HNEL and Toyota-MIT datasets.

## Status

Under review. The manuscript, supplementary material, private code, and download links are intentionally not provided.
