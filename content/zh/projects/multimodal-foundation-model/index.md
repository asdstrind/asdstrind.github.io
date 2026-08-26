---
title: "Multimodal Foundation Model Data and Evaluation"
translationKey: "project-multimodal-foundation-model"
period: "03/2026–04/2026"
advisor: "Xiang Li"
description: "负责多源电池数据预处理、标准化与统一存储流程，为后续多模态模型训练与评估提供数据基础设施支持。"
methods:
  - "Python"
  - ".csv 和 .mat 数据读取"
  - "异常值清理"
  - "下采样至 256 个时间点"
  - ".pkl 序列化"
  - "支持 LoRA-based parameter-efficient fine-tuning"
build:
  list: never
---

## 描述

负责多源电池数据预处理、标准化与统一存储流程，为后续多模态模型训练与评估提供数据基础设施支持。

## 技术贡献

- 从 `.csv` 和 `.mat` sources 读取 raw battery data 并清理异常值。
- 将 voltage、current 和 time sequences 下采样至 256 points，并按 battery ID 与 cycle number 组织记录。
- 将清理后的 data 序列化为 `.pkl` dictionaries，逐项检查 counts、dimensions 和 read accuracy。
- 交付支持 LoRA-based parameter-efficient fine-tuning 和 11 个异构数据集 SOH/RUL unified estimation 的 standardized data interface。

## 报告结果

关联论文报告 unseen batteries 上的 SOH MAE 为 0.0195、RUL MAE 为 0.0961，并通过 anomaly analysis 识别 early degradation。
