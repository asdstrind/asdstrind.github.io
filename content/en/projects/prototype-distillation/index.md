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
  - "Fixed ResNet-2D evaluation network"
build:
  list: never
---

## Description

Developed a learnable data-prototype pipeline for compressing battery aging cycles while preserving regression relationships, cross-sample distributions, and degradation-sequence structure.

## Technical contribution

- Formulated data reduction around SOH label semantics, overall distribution, and temporal structure.
- Treated prototypes as learnable variables, using SOH anchors and Huber regression loss for label semantics.
- Added MMD-based feature-distribution alignment, similarity constraints, and 2D total variation regularization.
- Transformed voltage, current, and time sequences into GAF images and evaluated prototype updates with a fixed ResNet-2D network.
- Compared Random, Stratified, and Full-data baselines on HNEL and Toyota-MIT datasets.

## Status

Under review. The manuscript, supplementary material, private code, and download links are intentionally not provided.
