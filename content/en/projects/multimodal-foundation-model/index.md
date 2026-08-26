---
title: "Multimodal Foundation Model Data and Evaluation"
translationKey: "project-multimodal-foundation-model"
period: "03/2026–04/2026"
advisor: "Xiang Li"
description: "Multi-source battery data preprocessing and standardization support for downstream multimodal model training and evaluation."
methods:
  - "Python"
  - ".csv and .mat ingestion"
  - "Outlier removal"
  - "256-point sequence downsampling"
  - ".pkl serialization"
  - "LoRA-based parameter-efficient fine-tuning support"
build:
  list: never
---

## Description

Contributed the multi-source battery data preprocessing and standardization pipeline used to support downstream multimodal model training and evaluation.

## Technical contribution

- Read raw battery data from `.csv` and `.mat` sources and removed outliers.
- Downsampled voltage, current, and time sequences to 256 points and organized records by battery ID and cycle number.
- Serialized cleaned data into `.pkl` dictionaries and wrote item-level checks for counts, dimensions, and read accuracy.
- Delivered the dataset used to support LoRA-based parameter-efficient fine-tuning and unified SOH/RUL estimation across 11 heterogeneous datasets.

## Reported result

The associated paper reports SOH MAE 0.0195 and RUL MAE 0.0961 on unseen batteries, together with early degradation detection through anomaly analysis.
