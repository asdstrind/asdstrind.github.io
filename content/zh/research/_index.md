---
title: "研究"
---

研究记录重点呈现方法学贡献、可复现实验，以及电池智能与部署约束之间的联系。

## Generalizable Battery Intelligence

**主题：** 跨域 lithium-ion battery SOH 估计  
**导师：** Xiang Li  
**时间：** 09/2024–12/2025

该方向研究在电池化学体系、循环协议和运行条件存在差异、且目标域标签有限时，如何迁移退化表示。技术工作结合 11 个公开老化数据集、256-point sequence preprocessing、轻量化 CNN–Transformer–KAN 架构和基于 MMD 的特征分布对齐，并覆盖 source–target splits、target-only 与 single-source baselines、消融实验，以及 BMS 相关的参数量、FLOPs 和延迟测量。

## Data Infrastructure for Multimodal SOH/RUL Models

**主题：** 用于 multimodal foundation-model training 的统一数据处理  
**导师：** Xiang Li  
**时间：** 03/2026–04/2026

该项目建立了面向 `.csv` 和 `.mat` 格式异构电池数据的可复现接口，完成异常值处理、256-point downsampling、按电池 ID 与 cycle 组织、`.pkl` 序列化和逐项验证。所得数据集支持 LoRA-based parameter-efficient fine-tuning 以及跨 11 个数据集的 SOH/RUL 联合估计。

## Data-Efficient Learning and Prototype Distillation

**主题：** 面向 battery SOH regression 的结构保持原型蒸馏  
**导师：** Xiang Li  
**时间：** 02/2026–Present · **状态：** 审稿中

该工作将 data prototypes 视为 learnable variables，而非选取的真实样本。使用 SOH anchors 与 Huber regression loss 保留标签语义，使用 MMD 对齐特征分布，并通过 similarity constraints 与 2D total variation regularization 处理 signal drift 和局部伪影。使用 GAF representations 与 fixed ResNet-2D evaluation network，在 HNEL 和 Toyota-MIT data 上研究压缩效果。该网站不公开 manuscript 或 private research assets。

## Edge Intelligence for Battery Management Systems

**主题：** 面向 BMS deployment 的资源感知 SOH 估计  
**导师：** Xiang Li  
**时间：** 09/2024–12/2025

该方向将部署可行性作为模型评估的一部分。报告中的 generalized SOH model 除跨域精度外，还达到 8.37M parameters、23.11 MMac FLOPs 和 8.9 ms inference time。后续工作将继续关注紧凑、稳健且可解释的边缘电池智能。
