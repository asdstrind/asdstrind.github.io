---
title: "Zihan Gong"
sections:
  - block: markdown
    id: profile
    content:
      title: "个人简介"
      text: |
        **Zihan Gong**

        **西安交通大学本科生研究者**

        智能制造工程 · 钱学森班（自动化方向）

        Zihan Gong 是西安交通大学钱学森班智能制造工程本科生研究者，研究关注异构运行条件下支持电池健康管理的数据高效与可泛化机器学习。他的工作涉及锂离子电池 State-of-Health (SOH) 估计、跨域表示学习、数据集与原型蒸馏，以及用于 SOH 和 Remaining Useful Life (RUL) 联合预测的多模态基础模型。技术工作包括 Python/PyTorch 数据流程、基于 Maximum Mean Discrepancy (MMD) 的分布对齐、轻量化 CNN–Transformer–KAN 建模、可学习原型，以及围绕参数量、FLOPs 和推理延迟的部署评估。当前工作聚焦于面向能源系统与电池管理的可靠、可迁移且资源高效的智能方法。

  - block: markdown
    id: research-interests
    content:
      title: "研究方向"
      text: |
        - 电池 State-of-Health (SOH) 估计
        - 跨域泛化与域适应
        - 数据高效学习与 Few-Shot Transfer
        - 数据集与原型蒸馏
        - 面向 SOH/RUL 的多模态基础模型
        - 面向 Battery Management Systems 的边缘智能

  - block: markdown
    id: current-research
    content:
      title: "当前研究"
      text: |
        **可泛化的电池智能**

        面向异构电池数据集学习可迁移的退化表示，结合目标域少样本监督与显式分布对齐。

        **数据高效学习与原型蒸馏**

        为回归任务设计可学习的合成原型，在高比例数据压缩下保留 SOH 语义、跨样本分布与退化序列结构。

        **能源系统基础模型**

        构建多模态基础模型所需的数据与建模基础设施，支持多个电池域上的 SOH/RUL 联合估计与早期退化检测。

        **电池管理系统边缘智能**

        使用参数量、FLOPs 和推理延迟等 BMS 相关指标评估轻量化架构，将跨域精度与部署可行性一并考虑。

  - block: markdown
    id: selected-publications
    content:
      title: "代表性论文"
      text: |
        ### 已发表

        **A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries**

        Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang · *Journal of Energy Storage* 177 (2026): 123418 · 已发表

        论文内容：面向异构电池数据的多模态基础模型，用于统一 SOH/RUL 估计，并结合 parameter-efficient fine-tuning 与 anomaly detection。[DOI](https://doi.org/10.1016/j.est.2026.123418)

        **Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning**

        Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang · *Journal of Energy Storage* 150 (2026): 120566 · 已发表

        论文内容：使用基于 MMD 的分布对齐与轻量化 ResNet–Transformer–KAN 架构开展多源、少样本 SOH 估计。[DOI](https://doi.org/10.1016/j.est.2026.120566)

        ### 审稿中

        **Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation**

        Zihan Gong；其余作者：[TO BE PROVIDED] · *IEEE Transactions on Emerging Topics in Computational Intelligence* · 审稿中

        研究摘要：将电池数据原型作为可学习变量，在高比例压缩下保留 SOH 标签语义、特征分布和退化序列结构。该论文在审稿期间不提供 manuscript PDF、supplementary material、private code 或 download link。

        [查看全部论文记录](publications/)

  - block: markdown
    id: selected-projects
    content:
      title: "代表性项目"
      text: |
        ### Battery Dataset Processing and Infrastructure

        03/2026–04/2026 · 导师：Xiang Li

        构建可复现的 Python 数据流程，完成异构电池数据的 `.csv`/`.mat` 读取、异常值清理、256-point downsampling、`.pkl` 序列化，并验证 11 个数据集。[查看项目记录](projects/battery-dataset-processing/)

        ### Multimodal Foundation Model Data and Evaluation

        03/2026–04/2026 · 导师：Xiang Li

        负责多源电池数据预处理、标准化与统一存储流程，为后续多模态模型训练与评估提供数据基础设施支持。[查看项目记录](projects/multimodal-foundation-model/)

        ### Task-Guided Prototype Distillation

        02/2026–Present · 导师：Xiang Li · 审稿中

        建立面向电池老化序列回归的结构保持原型生成流程。[查看项目记录](projects/prototype-distillation/)

        ### Edge-Constrained Generalized SOH Estimation

        09/2024–12/2025 · 导师：Xiang Li

        研究少样本目标域标签下的跨域 SOH 预测，并进行 BMS 感知的效率评估。[查看项目记录](projects/edge-soh-deployment/)

        ### Mathematical Modeling Competition

        09/2025 · CUMCM Problem B · 奖项：2025年全国大学生数学建模竞赛陕西赛区本科组一等奖

        参与运动学建模、视线遮挡判据、PSO/GA 优化和 C++ 实现。[查看项目记录](projects/cumcm-smoke-jamming-optimization/)

        ### Industrial Computer Vision Internship

        07/2026 · Geely Automobile Xi’an Manufacturing Base

        参与带 rejection mechanism 的 single-template wheel hub recognition 方案实现与评估。[查看项目记录](projects/geely-wheel-hub-recognition/)

  - block: markdown
    id: contact
    content:
      title: "联系方式"
      text: |
        Email：[ZHGong_XJTU@163.com](mailto:ZHGong_XJTU@163.com)  
        地址：No. 28 West Xianning Road, Beilin District, Xi’an, Shaanxi, China 710049  
        GitHub：[github.com/asdstrind](https://github.com/asdstrind?tab=repositories)  
        Hugging Face：[huggingface.co/coinlearner](https://huggingface.co/coinlearner)
---
