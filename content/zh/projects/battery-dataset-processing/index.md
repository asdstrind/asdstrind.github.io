---
title: "Battery Dataset Processing and Infrastructure"
translationKey: "project-battery-dataset-processing"
period: "03/2026–04/2026"
advisor: "Xiang Li"
description: "用于清理、下采样、序列化和验证多源 lithium-ion battery 数据的可复现 Python 流程。"
methods:
  - "Python"
  - ".csv 和 .mat 数据读取"
  - "异常值清理"
  - "下采样至 256 个时间点"
  - ".pkl 序列化"
  - "验证脚本"
outcomes:
  - "统一 11 个异构数据集的数据格式"
  - "支持 LoRA-based parameter-efficient fine-tuning 和 SOH/RUL 联合估计"
  - "报告中的未见电池 SOH MAE 为 0.0195，RUL MAE 为 0.0961"
build:
  list: never
---

## 描述

构建统一且可复现的数据接口，处理多源 lithium-ion battery 数据在 cycle length、field format、sampling frequency 和 file organization 方面的差异。

## 方法

- 使用 Python 读取 `.csv` 和 `.mat` 数据并清理异常值。
- 将原始序列统一下采样至 256 个时间点。
- 将清理后的数据序列化为 `.pkl`，并按 battery ID 和 cycle number 组织。
- 编写脚本逐项验证 sample counts、dimensions 和 read accuracy。

## 结果

交付标准化训练数据集，支持 LoRA-based parameter-efficient fine-tuning 以及跨 11 个异构数据集的 SOH/RUL 联合估计。CV 报告未见电池上的 SOH MAE 为 0.0195，RUL MAE 为 0.0961。
