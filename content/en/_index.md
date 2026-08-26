---
title: "Zihan Gong"
sections:
  - block: markdown
    id: profile
    content:
      title: "Profile"
      text: |
        **Zihan Gong**

        **Undergraduate Researcher at Xi’an Jiaotong University**

        Intelligent Manufacturing Engineering · Qian Xuesen Honor Class, Automation Track

        Zihan Gong is an undergraduate researcher in Intelligent Manufacturing Engineering in the Qian Xuesen Honor Class at Xi’an Jiaotong University. His research examines how data-efficient and generalizable machine learning can support battery health management under heterogeneous operating conditions. He works on lithium-ion battery State-of-Health (SOH) estimation, cross-domain representation learning, dataset and prototype distillation, and multimodal foundation models for joint SOH and Remaining Useful Life (RUL) prediction. His technical work combines Python/PyTorch data pipelines, distribution alignment with Maximum Mean Discrepancy (MMD), lightweight CNN–Transformer–KAN modeling, learnable prototypes, and deployment-aware evaluation of parameters, FLOPs, and inference latency. His current work focuses on reliable, transferable, and resource-efficient intelligence for energy systems and battery management.

  - block: markdown
    id: research-interests
    content:
      title: "Research Interests"
      text: |
        - Battery State-of-Health (SOH) Estimation
        - Cross-Domain Generalization and Domain Adaptation
        - Data-Efficient Learning and Few-Shot Transfer
        - Dataset and Prototype Distillation
        - Multimodal Foundation Models for SOH/RUL
        - Edge Intelligence for Battery Management Systems

  - block: markdown
    id: current-research
    content:
      title: "Current Research"
      text: |
        **Generalizable Battery Intelligence**

        Learning transferable degradation representations across heterogeneous battery datasets, with few-shot target-domain supervision and explicit distribution alignment.

        **Data-Efficient Learning and Prototype Distillation**

        Designing learnable synthetic prototypes for regression tasks so that SOH semantics, cross-sample distributions, and degradation-sequence structure remain useful under aggressive data compression.

        **Foundation Models for Energy Systems**

        Building data and modeling infrastructure for multimodal foundation models that unify SOH and RUL estimation across multiple battery domains and support early degradation detection.

        **Edge Intelligence for Battery Management Systems**

        Evaluating lightweight architectures with BMS-relevant parameter counts, FLOPs, and inference latency so that cross-domain accuracy is considered together with deployment feasibility.

  - block: markdown
    id: selected-publications
    content:
      title: "Selected Publications"
      text: |
        ### Published

        **A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries**

        Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang · *Journal of Energy Storage* 177 (2026): 123418 · Published

        Paper focus: a multimodal foundation model for unified SOH/RUL estimation from heterogeneous battery data, with parameter-efficient fine-tuning and anomaly detection. [DOI](https://doi.org/10.1016/j.est.2026.123418)

        **Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning**

        Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang · *Journal of Energy Storage* 150 (2026): 120566 · Published

        Paper focus: a multi-source, few-shot SOH estimation framework using MMD-based distribution alignment and a lightweight ResNet–Transformer–KAN architecture. [DOI](https://doi.org/10.1016/j.est.2026.120566)

        ### Under Review

        **Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation**

        Zihan Gong; additional authors: [TO BE PROVIDED] · *IEEE Transactions on Emerging Topics in Computational Intelligence* · Under review

        Research summary: learnable battery data prototypes are optimized to preserve SOH label semantics, feature distributions, and degradation-sequence structure. No manuscript, supplementary material, code, or download link is provided while the paper is under review.

        [View all publication records](publications/)

  - block: markdown
    id: selected-projects
    content:
      title: "Selected Projects"
      text: |
        ### Battery Dataset Processing and Infrastructure

        03/2026–04/2026 · Advisor: Xiang Li

        Built a reproducible Python pipeline for heterogeneous battery data, including `.csv`/`.mat` ingestion, outlier removal, 256-point downsampling, `.pkl` serialization, and validation across 11 datasets. [View project record](projects/battery-dataset-processing/)

        ### Multimodal Foundation Model Data and Evaluation

        03/2026–04/2026 · Advisor: Xiang Li

        Contributed the multi-source battery data preprocessing and standardization pipeline used to support downstream multimodal model training and evaluation. [View project record](projects/multimodal-foundation-model/)

        ### Task-Guided Prototype Distillation

        02/2026–Present · Advisor: Xiang Li · Under review

        Developed a structure-preserving prototype-generation pipeline for regression on battery aging sequences. [View project record](projects/prototype-distillation/)

        ### Edge-Constrained Generalized SOH Estimation

        09/2024–12/2025 · Advisor: Xiang Li

        Studied cross-domain SOH prediction with few-shot target labels and BMS-aware efficiency evaluation. [View project record](projects/edge-soh-deployment/)

        ### Mathematical Modeling Competition

        09/2025 · CUMCM Problem B · Award: First Prize, China Undergraduate Mathematical Contest in Modeling (CUMCM), Shaanxi Division, 2025

        Contributed to kinematic modeling, line-of-sight occlusion criteria, PSO/GA optimization, and C++ implementation. [View project record](projects/cumcm-smoke-jamming-optimization/)

        ### Industrial Computer Vision Internship

        07/2026 · Geely Automobile Xi’an Manufacturing Base

        Implemented and evaluated a single-template wheel hub recognition scheme with a rejection mechanism. [View project record](projects/geely-wheel-hub-recognition/)

  - block: markdown
    id: contact
    content:
      title: "Contact"
      text: |
        Email: [ZHGong_XJTU@163.com](mailto:ZHGong_XJTU@163.com)  
        Location: No. 28 West Xianning Road, Beilin District, Xi’an, Shaanxi, China 710049  
        GitHub: [github.com/asdstrind](https://github.com/asdstrind?tab=repositories)  
        Hugging Face: [huggingface.co/coinlearner](https://huggingface.co/coinlearner)
---
