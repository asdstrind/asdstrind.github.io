---
title: "基于 Jetson 的电池 SOH 边缘部署系统"
translationKey: "project-edge-soh-deployment"
period: "08/2026–Present"
advisor: "Xiang Li"
description: "面向真实电池测量、预处理、实验数据存储和 Jetson 侧 SOH 推理的独立边缘计算流程。"
methods:
  - "Jetson 边缘推理"
  - "ADS1115/I2C 数据采集"
  - "Voltage、current 和 time measurements"
  - "3×256 cycle representation"
  - "Raw 与 processed data storage"
  - "Replayable experiment pipeline"
  - "Reference-SOH validation"
  - "Data-integrity and provenance checks"
build:
  list: never
---

## 描述

这是一个独立的边缘计算与部署工程项目，与已发表的 generalized foundation-model paper 分开。项目面向真实电池和实验室实验数据，目标是将其连接到边缘 SOH 推理流程。项目不以该论文的公开数据集实验设置作为数据来源。端到端系统正在逐步构建和验证，完整的真实电池闭环部署仍在进行中。

## 系统流程

概念流程如下：

Battery / laboratory experiment<br>
→ 通过 I2C 的 ADS1115 acquisition<br>
→ 保存 raw voltage、current 和 time measurements<br>
→ preprocessing 和 downsampling<br>
→ synchronized 3×256 model input<br>
→ Jetson-side inference<br>
→ SOH output<br>
→ 与 experimental/reference SOH 对比

3×256 表示由 voltage、current 和 time 三个通道组成。该流程旨在保留原始测量和处理后的模型输入，以支持可复现性和后续 replay。端到端行为仍在开发中，因此上述流程描述的是系统的目标部分和已验证部分，不表示完整部署已经完成。

## 工程工作

- 验证了 ADS1115 detection 以及通过 I2C 进行 sustained-read communication 的能力。
- 建立 raw measurements 和 processed model-input artifacts 的存储。
- 围绕 sample identity、stable replay ordering 和 provenance 建立可复现实验/replay 组织。
- 纳入 data-integrity validation，并考虑 replayable experiments 的 interruption/recovery behavior。
- 为 Jetson-side inference 和 reference-SOH comparison 准备数据路径。

## 当前状态

硬件通信与采集验证，以及核心 storage/replay infrastructure 已取得实质进展。现有 generalized SOH model 当前作为验证 edge deployment pipeline 的初始推理模型。完整的真实电池闭环 SOH 部署与实验验证仍在进行中。
