---
title: "Battery Dataset Processing and Infrastructure"
translationKey: "project-battery-dataset-processing"
period: "03/2026–04/2026"
advisor: "Xiang Li"
description: "A reproducible Python pipeline for cleaning, downsampling, serializing, and validating multi-source lithium-ion battery data."
methods:
  - "Python"
  - ".csv and .mat ingestion"
  - "Outlier removal"
  - "Downsampling to 256 time points"
  - ".pkl serialization"
  - "Validation scripts"
outcomes:
  - "Unified format for 11 heterogeneous datasets"
  - "Support for LoRA-based parameter-efficient fine-tuning and unified SOH/RUL estimation"
  - "Reported unseen-battery SOH MAE 0.0195 and RUL MAE 0.0961"
build:
  list: never
---

## Description

Built a unified and reproducible data interface for heterogeneous lithium-ion battery data, addressing differences in cycle length, field format, sampling frequency, and file organization.

## Methods

- Used Python to read `.csv` and `.mat` sources and remove outliers.
- Downsampled raw sequences to 256 time points.
- Serialized cleaned data into `.pkl` and organized it by battery ID and cycle number.
- Wrote validation scripts for sample counts, dimensions, and read accuracy.

## Outcome

Delivered a standardized training dataset that supported LoRA-based parameter-efficient fine-tuning and unified SOH/RUL estimation across 11 heterogeneous datasets. The CV reports SOH MAE 0.0195 and RUL MAE 0.0961 on unseen batteries.
