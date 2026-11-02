---
title: "简历"
---

[下载 PDF 简历](/files/cv-zihan-gong-revised.pdf)

## 教育经历

### 西安交通大学 — 西安，中国

**时间：** 09/2023–至今\
C9 联盟 · 985 工程 · 211 工程\
**专业：** 智能制造工程（钱学森班，自动化方向）\
**GPA：** 88.65/100

## 研究经历

### Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation

**角色：** 第一作者 · **导师：** Xiang Li\
**时间：** 02/2026–至今 · **状态：** 审稿中

**研究重点：** 将大规模电池老化序列压缩为可学习原型，保留回归关系、跨样本分布与退化结构。

**方法：**

- 围绕 SOH 标签语义、数据分布与时间结构设计蒸馏目标。
- 使用 SOH 锚点、Huber 回归损失、最大均值差异（MMD）、相似性约束和二维全变差正则化优化原型。
- 将电压、电流原型与固定时间通道 t 转换为 GAF 表示，通过固定的 ResNet-2D 网络反向传播联合损失，仅优化 V、I；t 保持固定，用作时间索引与条件变量。
- 使用 CNN–Transformer–KAN 进行 SOH 预测。
- 在 HNEL 和 Toyota-MIT 数据集上，与随机抽样、分层抽样和全量数据基线比较。

**实验结果：** 在 HNEL 实验中，三个合成原型的 MAE 为 0.0192；在极高压缩率下，保留退化趋势的效果比相同数量的真实样本更稳定。

### Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning

**导师：** Xiang Li\
**时间：** 09/2024–12/2025\
**论文：** *Journal of Energy Storage* 150 (2026): 120566

**研究重点：** 在目标域标注有限、数据集分布存在差异时，学习可迁移的退化特征，并考虑电池管理系统的实时计算需求。

**方法：**

- 整理 11 个公开电池老化数据集，保留 SOH > 80% 的循环，将电压、电流与时间序列下采样至 256 点，保留各数据域的原始尺度。
- 设计轻量化 CNN–Transformer–KAN 架构，分别提取局部时序特征、建模长程依赖并完成非线性回归。
- 联合优化 SOH 回归误差与 MMD 约束，对齐特征分布。
- 在三个数据集上开展源域—目标域验证，与仅目标域、单源域、CNN 和 CNN–Transformer 基线比较，并评估参数量、计算量与推理耗时。

**实验结果：** 跨域实验中，目标数据集上的 MAE 低于 1.1%；模型参数量为 8.37M，计算量为 23.11 MMac FLOPs，推理耗时为 8.9 ms。

## 论文

1. [Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation](../publications/task-guided-prototype-distillation/) — Zihan Gong（第一作者）；*IEEE Transactions on Emerging Topics in Computational Intelligence*；审稿中。
2. [A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries](../publications/large-multimodal-foundation-model/) — Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang；*Journal of Energy Storage* 177 (2026): 123418；已发表；[DOI](https://doi.org/10.1016/j.est.2026.123418)。
3. [Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning](../publications/generalized-foundation-model/) — Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang；*Journal of Energy Storage* 150 (2026): 120566；已发表；[DOI](https://doi.org/10.1016/j.est.2026.120566)。

## 项目

- [基于 Jetson 的电池 SOH 边缘部署系统](../projects/edge-soh-deployment/) — 08/2026–至今；已完成恒流放电控制器原理图与双层 PCB 设计，开展数据采集与 Jetson SOH 推理测试。
- [Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework](../projects/cumcm-smoke-jamming-optimization/) — CUMCM B 题，09/2025；2025 年全国大学生数学建模竞赛陕西赛区本科组一等奖。
- [Green Agriculture: Future or Not?](../projects/mcm-icm-green-agriculture/) — MCM/ICM E 题，01/2025；Meritorious Winner。
- [Single-Template Retrieval-Based Wheel Hub Recognition at Geely Automobile Xi’an Manufacturing Base](../projects/geely-wheel-hub-recognition/) — 实习项目，07/2026。

## 竞赛/奖项

### 2025 年全国大学生数学建模竞赛（CUMCM）B 题

**项目：** *Optimization of Smoke Jamming Projectile Launch Strategy Based on a Coupled Multi-Algorithm Framework*\
**时间：** 09/2025 · **奖项：** 2025 年全国大学生数学建模竞赛陕西赛区本科组一等奖

参与运动学与视线遮挡建模、PSO-GA 优化和 C++ 实现，绘制收敛曲线与结果图表，并参与论文撰写。

### 2025 年美国大学生数学建模竞赛（MCM/ICM）E 题

**项目：** *Green Agriculture: Future or Not?*\
**时间：** 01/2025 · **奖项：** Meritorious Winner

参与多物种反应扩散建模、敏感性分析与变量一致性检查，使用 MATLAB R2023a 完成仿真与可视化，并参与 LaTeX 排版。

## 技能

- **机器学习与研究：** 电池健康管理与工程时序分析、数据高效学习、跨域泛化与域适应、数据集与原型蒸馏、多模态基础模型、迁移学习、科学机器学习。
- **编程与工具：** Python、PyTorch、MATLAB、C++、NumPy、scikit-image、pandas、LaTeX。
- **系统与应用：** 电池 SOH 估计、边缘 AI 部署、嵌入式系统、信号处理与电池管理系统。
