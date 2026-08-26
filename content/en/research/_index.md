---
title: "Research"
---

The research record emphasizes methodological contribution, reproducible experimentation, and the connection between battery intelligence and deployment constraints.

## Generalizable Battery Intelligence

**Topic:** Cross-domain lithium-ion battery SOH estimation  
**Advisor:** Xiang Li  
**Period:** 09/2024–12/2025

This work studies how degradation representations can transfer across battery chemistries, cycling protocols, and operating conditions when target-domain labels are limited. The technical contribution combines 11 public aging datasets, 256-point sequence preprocessing, a lightweight CNN–Transformer–KAN architecture, and MMD-based feature-distribution alignment. Evaluation covers source–target splits, target-only and single-source baselines, ablations, and BMS-relevant parameter, FLOPs, and latency measurements.

## Data Infrastructure for Multimodal SOH/RUL Models

**Topic:** Unified data processing for multimodal foundation-model training  
**Advisor:** Xiang Li  
**Period:** 03/2026–04/2026

This project established a reproducible interface for heterogeneous battery data stored in `.csv` and `.mat` formats. The contribution included outlier handling, 256-point downsampling, battery-ID and cycle-level organization, `.pkl` serialization, and item-level validation. The resulting dataset supported LoRA-based parameter-efficient fine-tuning and unified SOH/RUL estimation across 11 datasets.

## Data-Efficient Learning and Prototype Distillation

**Topic:** Structure-preserving prototype distillation for battery SOH regression  
**Advisor:** Xiang Li  
**Period:** 02/2026–Present · **Status:** Under review

This work treats data prototypes as learnable variables rather than selected real samples. SOH anchors and Huber regression loss preserve label semantics; MMD aligns feature distributions; similarity constraints and 2D total variation regularization address signal drift and local artifacts. Voltage and current prototypes, paired with a fixed temporal channel t, are transformed into GAF representations and passed through a fixed ResNet-2D network; the joint objective is back-propagated through this path to optimize only the prototype V and I variables. The fixed t channel remains a temporal conditioning/indexing variable, while SOH estimation is handled separately by the CNN–Transformer–KAN predictor. No manuscript or private research assets are exposed on this site.

## Edge Intelligence for Battery Management Systems

**Topic:** Resource-aware SOH estimation for BMS deployment  
**Advisor:** Xiang Li  
**Period:** 09/2024–12/2025

Deployment feasibility is treated as part of model evaluation rather than an afterthought. The reported generalized SOH model combines cross-domain accuracy with 8.37M parameters, 23.11 MMac FLOPs, and 8.9 ms inference time in the reported setup. This line of work motivates future research on compact, robust, and interpretable battery intelligence at the edge.
