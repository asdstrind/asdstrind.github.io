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

该工作将 data prototypes 视为 learnable variables，而非选取的真实样本。使用 SOH anchors 与 Huber regression loss 保留标签语义，使用 MMD 对齐特征分布，并通过 similarity constraints 与 2D total variation regularization 处理 signal drift 和局部伪影。电压和电流原型与固定的时间通道 t 一同转换为 GAF 表示后输入固定的 ResNet-2D 网络，通过该路径反向传播联合目标并仅更新 prototype 中的 V、I；t 作为固定的时间索引和 conditioning variable 保持时间顺序与物理一致性，SOH 估计由独立的 CNN–Transformer–KAN 模型完成。该网站不公开 manuscript 或 private research assets。

## 基于 Jetson 的电池 SOH 边缘部署系统

**主题：** 独立的电池 SOH 边缘计算与部署流程
**导师：** Xiang Li  
**时间：** 08/2026–Present

该项目是独立的工程项目，与已发表的 generalized foundation-model paper 分开。项目面向真实电池和实验室实验数据，目标是将其连接到边缘 SOH 流程，而不是复用该论文的公开数据集实验设置。

流程覆盖 ADS1115/I2C 信号采集、原始测量数据保留、预处理，以及构造同步的 3×256 cycle 输入（通道为 voltage、current 和 time），再进行 Jetson 侧推理，并将 SOH 输出与实验/参考 SOH 比较。可复现实验与 replay 存储包括 processed artifacts、sample identity、stable replay ordering、provenance、中断/恢复处理和 integrity validation。ADS1115 detection 和 sustained-read validation 已完成，端到端流程仍在持续开发。

现有 generalized SOH model 当前作为验证 edge deployment pipeline 的初始推理模型。硬件通信、采集验证以及核心 storage/replay infrastructure 已取得实质进展，但完整的真实电池闭环部署与实验验证仍在进行中。
