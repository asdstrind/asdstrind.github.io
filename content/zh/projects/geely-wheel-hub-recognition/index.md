---
title: "Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base"
translationKey: "project-geely-wheel-hub-recognition"
period: "07/2026"
organization: "吉利汽车西安制造基地 IT 研发部门"
description: "在吉利汽车 IT 研发实习中，参与基于单模板检索的轮毂识别与评估。"
methods:
  - "WheelPrint"
  - "RSM-HOG 特征融合"
  - "拒识机制"
  - "Python"
  - "NumPy"
  - "scikit-image"
  - "pandas"
outcomes:
  - "开发集 Top-1 准确率：97.62%"
  - "启用拒识后接受样本准确率：100%"
  - "接受样本覆盖率：79.76%"
  - "CPU 单图推理延迟中位数：226 ms"
build:
  list: never
---

## 项目简介

在吉利汽车西安制造基地实习期间，参与基于单模板检索的轮毂识别方案，检查 Python 数据预处理、特征提取、识别与评估模块。

## 方法

- 融合 WheelPrint 与 RSM-HOG 特征，并通过拒识机制处理低置信度样本。
- 编写涵盖方案设计、测试、问题诊断与改进的技术文档。
- 参与实验数据验证，分析强光反射引起的误分类。

## 实验结果

开发集上的 Top-1 准确率为 97.62%。启用拒识后，接受样本的准确率为 100%，覆盖率为 79.76%；CPU 单图推理延迟中位数为 226 ms。
