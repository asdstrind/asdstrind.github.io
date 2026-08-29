---
title: "Jetson-Based Edge Battery SOH Deployment"
translationKey: "project-edge-soh-deployment"
period: "08/2026–Present"
advisor: "Xiang Li"
description: "An edge-deployment project for acquiring battery measurements, preparing SOH model inputs, and running inference on Jetson."
methods:
  - "Jetson edge inference"
  - "ADS1115/I2C data acquisition"
  - "3×256 battery-cycle input"
  - "Raw and processed data storage"
build:
  list: never
---

## Description

This project develops an edge SOH estimation pipeline for real battery experiments using a Jetson platform. It is independent of the public-dataset experiments reported in my generalized SOH paper.

## Current work

- Validated ADS1115 communication and continuous data acquisition over I2C.
- Built storage for raw measurements and processed 3×256 model inputs, together with replay support for experimental data.
- The generalized SOH model is currently used as the initial inference model for testing the Jetson deployment pipeline.

Real-battery end-to-end SOH validation is still in progress.