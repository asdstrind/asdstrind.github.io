---
title: "Jetson-Based Edge Battery SOH Deployment"
translationKey: "project-edge-soh-deployment"
period: "08/2026–Present"
advisor: "Xiang Li"
description: "Hardware design, battery measurement acquisition, and SOH inference on Jetson."
methods:
  - "Jetson edge inference"
  - "ADS1115/I2C data acquisition"
  - "3×256 battery-cycle input"
  - "Raw and processed data storage"
build:
  list: never
---

## Overview

Developing a Jetson-based experimental system that combines controlled battery discharge, measurement acquisition, and SOH inference.

## Project progress

- **Hardware:** Completed the KiCad schematic and two-layer PCB layout for a programmable 3C constant-current discharge controller for sodium-ion batteries.
- **Acquisition:** Implemented ADS1115 communication and continuous sampling over I2C.
- **Data processing:** Preserve raw measurements and prepare synchronized 3×256 cycle inputs from voltage, current, and time sequences, with preprocessing, storage, and replay support.
- **Experiment management:** Store sample identifiers, provenance, and replay order, with integrity checks and interruption recovery for reproducible experiments.

Jetson deployment tests use the [published SOH model](../../publications/generalized-foundation-model/). Full-system tests and comparisons with experimental or reference SOH are in progress.

## Programmable 3C Discharge Controller for Sodium-Ion Batteries

The controller targets sodium-ion battery discharge tests at 3C. The circuit includes analog current feedback, MOSFET load control, current and voltage sensing, and protection. The two-layer PCB layout addresses power routing and thermal management.

<div class="hardware-gallery" id="hardware-design">
<figure class="hardware-figure hardware-figure--pcb">
  <figcaption><h3>Two-layer PCB layout</h3><span><a href="/images/projects/sodium-ion-3c-discharge-controller-pcb.png" target="_blank" rel="noopener">View full-resolution image ↗</a> · <a href="/files/sodium-ion-3c-discharge-controller-pcb.pdf">Original PDF ↗</a></span></figcaption>
  <a class="hardware-image" href="/images/projects/sodium-ion-3c-discharge-controller-pcb.png" target="_blank" rel="noopener" aria-label="Two-layer PCB layout · View full-resolution image"><img src="/images/projects/sodium-ion-3c-discharge-controller-pcb.webp" alt="Two-layer PCB layout" width="2120" height="2350" loading="lazy" decoding="async"></a>
</figure>

<figure class="hardware-figure hardware-figure--schematic">
  <figcaption><h3>Control and measurement schematic</h3><span><a href="/images/projects/sodium-ion-3c-discharge-controller-schematic.png" target="_blank" rel="noopener">View full-resolution image ↗</a> · <a href="/files/sodium-ion-3c-discharge-controller-schematic.pdf">Original PDF ↗</a></span></figcaption>
  <a class="hardware-image" href="/images/projects/sodium-ion-3c-discharge-controller-schematic.png" target="_blank" rel="noopener" aria-label="Control and measurement schematic · View full-resolution image"><img src="/images/projects/sodium-ion-3c-discharge-controller-schematic.webp" alt="Control and measurement schematic" width="2827" height="5978" loading="lazy" decoding="async"></a>
</figure>
</div>
