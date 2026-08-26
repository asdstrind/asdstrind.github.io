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

## Research summary

This manuscript studies how to compress large-scale lithium-ion battery aging data into a small number of learnable prototypes while preserving regression relationships, cross-sample distributions, and degradation-sequence structure.

The reported approach assigns SOH semantics with anchors and Huber regression loss, aligns feature distributions with Maximum Mean Discrepancy (MMD), and uses similarity constraints plus 2D total variation regularization. Voltage and current prototypes, together with a fixed temporal channel t, are transformed into Gramian Angular Field (GAF) representations and passed through a fixed ResNet-2D network. Gradients from the joint objective are back-propagated through this network to optimize only the prototype V and I values. The fixed t channel serves as a temporal conditioning/indexing variable that preserves temporal ordering and physical consistency. SOH estimation is performed separately using the CNN–Transformer–KAN predictor. The submitted-manuscript HNEL setup reports MAE 0.0192 with three synthetic prototypes.

**Status:** Under review. The manuscript PDF, supplementary material, private code, and download links are intentionally not provided.
