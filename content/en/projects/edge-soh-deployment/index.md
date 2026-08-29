---
title: "Jetson-Based Edge Battery SOH Deployment"
translationKey: "project-edge-soh-deployment"
period: "08/2026–Present"
advisor: "Xiang Li"
description: "An independent edge-computing pipeline for real battery measurement, preprocessing, experiment storage, and Jetson-side SOH inference."
methods:
  - "Jetson edge inference"
  - "ADS1115/I2C data acquisition"
  - "Voltage, current, and time measurements"
  - "3×256 cycle representation"
  - "Raw and processed data storage"
  - "Replayable experiment pipeline"
  - "Reference-SOH validation"
  - "Data-integrity and provenance checks"
build:
  list: never
---

## Description

This is an independent edge-computing and deployment project, separate from the published generalized foundation-model paper. It is intended to connect real battery and laboratory experimental measurements with an edge SOH inference pipeline. The project does not use the paper's public-dataset experimental setup as its data source. The end-to-end system is being built and validated incrementally; complete real-battery closed-loop deployment is ongoing.

## System pipeline

Conceptually, the pipeline is:

Battery / laboratory experiment<br>
→ ADS1115 acquisition over I2C<br>
→ preservation of raw voltage, current, and time measurements<br>
→ preprocessing and downsampling<br>
→ synchronized 3×256 model input<br>
→ Jetson-side inference<br>
→ SOH output<br>
→ comparison with experimental/reference SOH

The 3×256 representation uses voltage, current, and time as its three channels. The pipeline is designed to preserve raw measurements and processed inputs for reproducibility and later replay. Final end-to-end behavior is still under development, so the sequence describes the target and validated portions of the system rather than a claim of completed deployment.

## Engineering work

- Validated ADS1115 detection and sustained-read communication over I2C.
- Developed storage for raw measurements and processed model-input artifacts.
- Added reproducible experiment/replay organization around sample identity, stable replay ordering, and provenance.
- Incorporated data-integrity validation and considered interruption/recovery behavior for replayable experiments.
- Prepared the data path for Jetson-side inference and reference-SOH comparison.

## Current status

Hardware communication and acquisition validation, along with core storage/replay infrastructure, have progressed substantially. The existing generalized SOH model is currently used as the initial inference model for validating the edge deployment pipeline. Complete real-battery closed-loop SOH deployment and experimental validation remain ongoing.
