---
title: "Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base"
translationKey: "project-geely-wheel-hub-recognition"
period: "07/2026"
organization: "IT R&D Department of Geely Automobile Xi’an Manufacturing Base, Xi’an, China"
description: "IT R&D 实习期间参与的 single-template retrieval-based wheel hub recognition 方案实现与验证。"
methods:
  - "WheelPrint"
  - "RSM-HOG feature fusion"
  - "Rejection mechanism"
  - "Python"
  - "NumPy"
  - "scikit-image"
  - "pandas"
outcomes:
  - "开发集 Top-1 accuracy：97.62%"
  - "启用 rejection 后接受样本 accuracy：100%"
  - "接受样本 coverage：79.76%"
  - "CPU 单图 median latency：226 ms"
build:
  list: never
---

## 描述

参与 single-template retrieval-based wheel hub recognition 方案的实现与验证，并检查 Python preprocessing、descriptor extraction、recognition 和 evaluation 模块。

## 方法

- 使用 WheelPrint 与 RSM-HOG feature-fusion pipeline 及其 rejection mechanism。
- 编写覆盖 design、testing、diagnosis 和 improvement 的技术文档。
- 参与实验数据验证，并总结强光反射导致的 misclassification cases。

## 结果

特征融合方案在开发集上的 Top-1 accuracy 为 97.62%。启用 rejection 后，接受样本 accuracy 为 100%，coverage 为 79.76%，CPU 单图 median latency 为 226 ms。
