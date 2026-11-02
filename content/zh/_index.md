---
title: "Zihan Gong"
description: "Zihan Gong 的学术主页，研究数据高效与可泛化的电池健康管理机器学习方法。"
sections:
  - block: markdown
    id: profile
    content:
      title: "个人简介"
      text: |
        **Zihan Gong**

        **西安交通大学 · 本科生**

        智能制造工程 · 钱学森班（自动化方向）

        我是西安交通大学钱学森班智能制造工程本科生，主要研究用于电池健康管理的数据高效学习与跨域泛化方法。研究涵盖锂离子电池健康状态（SOH）估计、跨域表示学习、数据集与原型蒸馏，以及联合预测 SOH 和剩余使用寿命（RUL）的多模态基础模型。我使用 Python/PyTorch 构建数据流程，通过最大均值差异（MMD）对齐特征分布，并结合轻量化 CNN–Transformer–KAN 和可学习原型开展建模，同时评估模型参数量、计算量与推理延迟。

  - block: markdown
    id: research-interests
    content:
      title: "研究方向"
      text: |
        - 电池健康状态（SOH）估计
        - 跨域泛化与域适应
        - 数据高效学习与少样本迁移
        - 数据集与原型蒸馏
        - 面向 SOH/RUL 的多模态基础模型
        - 面向电池管理系统的边缘智能

  - block: markdown
    id: current-research
    content:
      title: "当前研究"
      text: |
        <div class="research-grid">
        <article class="research-grid__item">
        <h3>可泛化的电池智能</h3>
        <p>面向异构电池数据集学习可迁移的退化表示，结合目标域少样本监督与显式分布对齐。</p>
        </article>
        <article class="research-grid__item">
        <h3>数据高效学习与原型蒸馏</h3>
        <p>为回归任务设计可学习的合成原型，在高比例数据压缩下保留 SOH 语义、跨样本分布与退化序列结构。</p>
        </article>
        <article class="research-grid__item">
        <h3>能源系统基础模型</h3>
        <p>构建多模态基础模型所需的数据与建模基础设施，支持多个电池域上的 SOH/RUL 联合估计与早期退化检测。</p>
        </article>
        <article class="research-grid__item">
        <h3>基于 Jetson 的电池 SOH 边缘部署系统</h3>
        <p>已完成钠离子电池恒流放电控制器的原理图与双层 PCB 设计，建立 ADS1115 采集与实验数据流程，正在开展 Jetson 端 SOH 推理测试。</p>
        </article>
        </div>
  - block: markdown
    id: selected-publications
    content:
      title: "代表性论文"
      text: |
        <div class="academic-list academic-publication-list">
        <div class="academic-list__group">
        <h3>已发表</h3>
        <article class="academic-list__item">
        <h4>A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries</h4>
        <p class="academic-list__meta">Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang · <em>Journal of Energy Storage</em> 177 (2026): 123418 · 已发表</p>
        <p>面向异构电池数据，结合参数高效微调与异常检测，联合估计 SOH 和 RUL。<a href="https://doi.org/10.1016/j.est.2026.123418">DOI</a></p>
        </article>
        <article class="academic-list__item">
        <h4>Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning</h4>
        <p class="academic-list__meta">Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang · <em>Journal of Energy Storage</em> 150 (2026): 120566 · 已发表</p>
        <p>使用基于 MMD 的分布对齐与轻量化 ResNet–Transformer–KAN 架构开展多源、少样本 SOH 估计。<a href="https://doi.org/10.1016/j.est.2026.120566">DOI</a></p>
        </article>
        </div>
        <div class="academic-list__group">
        <h3>审稿中</h3>
        <article class="academic-list__item">
        <h4>Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation</h4>
        <p class="academic-list__meta">Zihan Gong（第一作者） · <em>IEEE Transactions on Emerging Topics in Computational Intelligence</em> · 审稿中</p>
        <p>将电池数据原型作为可学习变量，在高比例压缩下保留 SOH 标签语义、特征分布和退化序列结构。<a href="https://drive.google.com/file/d/1MOKocRbRqNEGhoGAEFaoRRUITHftQYKY/view" target="_blank" rel="noopener noreferrer">论文手稿（Google Drive）</a></p>
        </article>
        </div>
        <p class="academic-list__more"><a href="publications/">全部论文</a></p>
        </div>
  - block: markdown
    id: selected-projects
    content:
      title: "代表性项目"
      text: |
        <div class="academic-list academic-project-list">
        <article class="academic-list__item">
        <h3>基于 Jetson 的电池 SOH 边缘部署系统</h3>
        <p class="academic-list__meta">08/2026–至今 · 导师：Xiang Li</p>
        <p>已完成恒流放电控制器的原理图与双层 PCB 设计，建立 ADS1115 采集与实验数据流程，正在开展 Jetson 端 SOH 推理测试。<a href="projects/edge-soh-deployment/">项目详情</a></p>
        </article>
        </div>
  - block: markdown
    id: contact
    content:
      title: "联系方式"
      text: |
        Email：[ZHGong_XJTU@163.com](mailto:ZHGong_XJTU@163.com)\
        地址：中国，陕西，西安
        GitHub：[github.com/asdstrind](https://github.com/asdstrind)\
        Hugging Face：[huggingface.co/coinlearner](https://huggingface.co/coinlearner)
---
