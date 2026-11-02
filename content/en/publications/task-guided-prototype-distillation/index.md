---
title: "Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation"
translationKey: "publication-task-guided-prototype-distillation"
authors:
  - "Zihan Gong"
publication: "IEEE Transactions on Emerging Topics in Computational Intelligence"
status: "Under review"
first_author: true
publication_image: "/images/publications/task-guided-prototype-distillation-framework.png"
publication_image_alt: "Task-guided prototype distillation: data preparation, prototype optimization, and performance evaluation"
publication_image_zoom: true
build:
  list: never
---

## Research summary

This work compresses large-scale lithium-ion battery aging data into a small set of learnable prototypes while preserving regression relationships, cross-sample distributions, and degradation-sequence structure.

SOH anchors and Huber regression loss preserve health-state semantics. Maximum Mean Discrepancy (MMD) aligns feature distributions, while similarity constraints and 2D total variation regularization preserve data structure.

Voltage and current prototypes, together with a fixed temporal channel t, are transformed into Gramian Angular Field (GAF) representations and passed through a fixed ResNet-2D network. Gradients from the joint loss update only the prototype V and I values; t remains fixed as a temporal index and conditioning variable. SOH prediction uses the CNN–Transformer–KAN model.

In HNEL experiments, three synthetic prototypes achieved MAE 0.0192.

[Author Manuscript (Google Drive)](https://drive.google.com/file/d/1MOKocRbRqNEGhoGAEFaoRRUITHftQYKY/view)
