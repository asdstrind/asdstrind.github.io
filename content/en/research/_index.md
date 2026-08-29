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

## Jetson-Based Edge Battery SOH Deployment

**Topic:** Independent edge-computing and deployment pipeline for battery SOH
**Advisor:** Xiang Li  
**Period:** 08/2026–Present

This is an independent engineering project, separate from the published generalized foundation-model paper. It is intended to connect real battery and laboratory experimental measurements with an edge SOH pipeline rather than reuse that paper's public-dataset experimental setup.

The pipeline covers ADS1115/I2C signal acquisition, raw-measurement preservation, preprocessing and construction of synchronized 3×256 cycle inputs whose channels are voltage, current, and time, Jetson-side inference, and comparison of SOH output with experimental/reference SOH. Reproducible experiment and replay storage includes processed artifacts, sample identity, stable replay ordering, provenance, interruption/recovery handling, and integrity validation. ADS1115 detection and sustained-read validation have been completed, while the end-to-end pipeline continues to be developed.

The existing generalized SOH model is currently used as an initial inference model for validating the edge deployment pipeline. Hardware communication, acquisition validation, and core storage/replay infrastructure have progressed substantially, while complete real-battery closed-loop deployment and experimental validation remain ongoing.
