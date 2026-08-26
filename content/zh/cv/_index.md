---
title: "简历"
---

[下载官方 PDF 简历](/files/cv-zihan-gong-revised.pdf)

本结构化页面用于补充可下载的 PDF 简历，不替代 PDF 简历。

[研究概览](../research/)

## 教育经历

### Xi’an Jiaotong University — Xi’an, China

**时间：** 09/2023–Present  
**CV 中的院校描述：** C9 & Project 985&211  
**专业：** Intelligent Manufacturing Engineering（Qian Xuesen Honor Class, Automation Track）  
**GPA：** 88.65/100

## 研究经历

### Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation

**角色：** 第一作者 · **导师：** Xiang Li  
**时间：** 02/2026–Present · **状态：** 审稿中

**研究重点：** 将大规模电池老化 cycle 压缩为可学习的数据 prototypes，同时保留 regression relationships、cross-sample distribution 和 degradation sequence structure。

**方法：**

- 围绕 SOH label semantics、overall distribution 和 temporal structure 建立 data reduction 的三个目标。
- 将 prototypes 视为 learnable variables，使用 SOH anchors、Huber regression loss、Maximum Mean Discrepancy (MMD)、similarity constraints 和 2D total variation regularization。
- 将 voltage 和 current prototypes 与固定的 time channel t 一同转换为 GAF 表示后输入固定的 ResNet-2D 网络，通过联合目标反向传播并仅更新 prototype 中的 V、I；t 作为固定的时间索引和 conditioning variable 保持时间顺序与物理一致性，SOH 估计由独立的 CNN–Transformer–KAN 模型完成。
- 在 HNEL 和 Toyota-MIT 数据集上与 Random、Stratified 和 Full-data baselines 进行比较。

**报告结果：** 在 submitted manuscript 的 HNEL setup 中，使用三个 synthetic prototypes 时 MAE 为 0.0192；在 extreme compression 条件下，degradation trends 比相同数量的 real samples 更稳定。

### Python-based Data Cleaning, Downsampling, and Unified Storage Format for Multi-source Lithium-ion Battery Data

**导师：** Xiang Li  
**时间：** 03/2026–04/2026  
**关联论文记录：** *Journal of Energy Storage* 177 (2026): 123418

**研究重点：** 建立统一且可复现的数据接口，处理异构 lithium-ion battery 数据，以支持 multimodal large models 的跨域训练。

**方法：**

- 使用 Python 读取 `.csv` 和 `.mat` 数据并清理异常值。
- 将原始序列下采样至 256 个时间点，并按需进行 normalization。
- 将清理后的数据序列化为 `.pkl`，按 battery ID 和 cycle number 组织，并将各 data domain 存储为独立 dictionary。
- 编写逐项检查 sample counts、dimensions 和 read accuracy 的脚本。

**报告结果：** 负责多源电池数据预处理、标准化与统一存储流程，为后续多模态模型训练与评估提供数据基础设施支持。报告中的未见电池结果为 SOH MAE 0.0195 和 RUL MAE 0.0961。

### Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning

**导师：** Xiang Li  
**时间：** 09/2024–12/2025  
**关联论文记录：** *Journal of Energy Storage* 150 (2026): 120566

**研究重点：** 在跨数据集分布差异和目标域标注有限的条件下学习可迁移的 degradation representations，同时考虑 BMS 的 real-time constraints。

**方法：**

- 整理 11 个公开 battery aging datasets，保留 SOH > 80% 的 cycles，并将 voltage、current 和 time sequences 下采样至 length 256，不进行 uniform normalization。
- 设计 lightweight CNN-Transformer-KAN hybrid architecture，分别处理 local temporal features、long-range dependencies 和 nonlinear regression。
- 联合优化 SOH regression error 和 MMD constraint，实现 feature-distribution alignment。
- 在三个数据集上进行 source-target validation，与 target-only、single-source、CNN 和 CNN-Transformer baselines 比较，并评估 parameter count、FLOPs 和 inference time。

**报告结果：** 在报告 setup 中，不同 target datasets 的 cross-domain error 降至 MAE < 1.1%，模型为 8.37M parameters、23.11 MMac FLOPs，inference time 为 8.9 ms。

## 论文

1. [Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation](../publications/task-guided-prototype-distillation/) — Zihan Gong；*IEEE Transactions on Emerging Topics in Computational Intelligence*；审稿中；年份 [TO BE PROVIDED]。
2. [A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries](../publications/large-multimodal-foundation-model/) — Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang；*Journal of Energy Storage* 177 (2026): 123418；已发表；[DOI](https://doi.org/10.1016/j.est.2026.123418)。
3. [Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning](../publications/generalized-foundation-model/) — Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang；*Journal of Energy Storage* 150 (2026): 120566；已发表；[DOI](https://doi.org/10.1016/j.est.2026.120566)。

## 项目

- [Battery Dataset Processing and Infrastructure](../projects/battery-dataset-processing/) — 03/2026–04/2026；多源 battery data processing 和统一存储。
- [Multimodal Foundation Model Data and Evaluation](../projects/multimodal-foundation-model/) — 03/2026–04/2026；负责多源电池数据预处理、标准化与统一存储流程，为后续多模态模型训练与评估提供数据基础设施支持。
- [Task-Guided Prototype Distillation](../projects/prototype-distillation/) — 02/2026–Present；审稿中。
- [Edge-Constrained Generalized SOH Estimation](../projects/edge-soh-deployment/) — 09/2024–12/2025；面向 BMS constraints 的 cross-domain SOH estimation。
- [Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework](../projects/cumcm-smoke-jamming-optimization/) — CUMCM Problem B，09/2025；2025年全国大学生数学建模竞赛陕西赛区本科组一等奖。
- [Green Agriculture: Future or Not?](../projects/mcm-icm-green-agriculture/) — MCM/ICM Problem E，01/2025；Meritorious Winner（证书已提供）。
- [Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base](../projects/geely-wheel-hub-recognition/) — 实习项目，07/2026。

## 竞赛/奖项

### 2025 China Undergraduate Mathematical Contest in Modeling (CUMCM), Problem B

**项目：** *Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework*  
**时间：** 09/2025 · **奖项：** 2025年全国大学生数学建模竞赛陕西赛区本科组一等奖

参与运动学和视线遮挡建模、PSO-GA 优化、C++ 实现、收敛与结果可视化以及论文撰写。该奖项已根据官方 2025 年陕西省获奖名单核实。

### 2025 Mathematical Contest In Modeling/Interdisciplinary Contest In Modeling (MCM/ICM), Problem E

**项目：** *Green Agriculture: Future or Not?*  
**时间：** 01/2025 · **奖项：** Meritorious Winner（证书已提供）

参与 multi-species reaction-diffusion model、sensitivity analysis、variable consistency checks、MATLAB R2023a simulations、visualization 和 LaTeX 排版。

## 技能

- **机器学习与研究：** 面向 battery health management 和 engineering time-series analysis 的 data-efficient and generalizable deep learning；Domain Adaptation；Dataset/Prototype Distillation；multimodal foundation models；transfer learning；scientific machine learning。
- **编程与工具：** Python、PyTorch、MATLAB、C++、NumPy、scikit-image、pandas、LaTeX。
- **系统与应用：** Battery State-of-Health Estimation、edge AI deployment、embedded systems、signal processing 和 battery management systems。
