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
        <div class="research-grid">
        <article class="research-grid__item">
        <h3>Generalizable Battery Intelligence</h3>
        <p>Learning transferable degradation representations across heterogeneous battery datasets, with few-shot target-domain supervision and explicit distribution alignment.</p>
        </article>
        <article class="research-grid__item">
        <h3>Data-Efficient Learning and Prototype Distillation</h3>
        <p>Designing learnable synthetic prototypes for regression tasks so that SOH semantics, cross-sample distributions, and degradation-sequence structure remain useful under aggressive data compression.</p>
        </article>
        <article class="research-grid__item">
        <h3>Foundation Models for Energy Systems</h3>
        <p>Building data and modeling infrastructure for multimodal foundation models that unify SOH and RUL estimation across multiple battery domains and support early degradation detection.</p>
        </article>
        <article class="research-grid__item">
        <h3>Jetson-Based Edge Battery SOH Deployment</h3>
        <p>Building an independent edge pipeline that connects real battery measurements to acquisition, preprocessing, reproducible experiment storage, and Jetson-side SOH inference; closed-loop deployment and validation remain ongoing.</p>
        </article>
        </div>
  - block: markdown
    id: selected-publications
    content:
      title: "Selected Publications"
      text: |
        <div class="academic-list academic-publication-list">
        <div class="academic-list__group">
        <h3>Published</h3>
        <article class="academic-list__item">
        <h4>A Large Multimodal Foundation Model for Unified State-of-Health and Remaining Useful Life Estimation of Lithium-ion Batteries</h4>
        <p class="academic-list__meta">Wending Zhu, Xiang Li, Zihan Gong, Mamdouh Abdelsalam, Wei Zhang, and Shaojie Yang · <em>Journal of Energy Storage</em> 177 (2026): 123418 · Published</p>
        <p>Paper focus: a multimodal foundation model for unified SOH/RUL estimation from heterogeneous battery data, with parameter-efficient fine-tuning and anomaly detection. <a href="https://doi.org/10.1016/j.est.2026.123418">DOI</a></p>
        </article>
        <article class="academic-list__item">
        <h4>Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning</h4>
        <p class="academic-list__meta">Zihan Gong, Xiang Li, Wei Zhang, and Shaojie Yang · <em>Journal of Energy Storage</em> 150 (2026): 120566 · Published</p>
        <p>Paper focus: a multi-source, few-shot SOH estimation framework using MMD-based distribution alignment and a lightweight ResNet–Transformer–KAN architecture. <a href="https://doi.org/10.1016/j.est.2026.120566">DOI</a></p>
        </article>
        </div>
        <div class="academic-list__group">
        <h3>Under Review</h3>
        <article class="academic-list__item">
        <h4>Task-Guided Prototype Distillation for Regression with Structure Preservation in Lithium-Ion Battery State-of-Health Estimation</h4>
        <p class="academic-list__meta">Zihan Gong; additional authors: [TO BE PROVIDED] · <em>IEEE Transactions on Emerging Topics in Computational Intelligence</em> · Under review</p>
        <p>Research summary: learnable battery data prototypes are optimized to preserve SOH label semantics, feature distributions, and degradation-sequence structure. No manuscript, supplementary material, code, or download link is provided while the paper is under review.</p>
        </article>
        </div>
        <p class="academic-list__more"><a href="publications/">View all publication records</a></p>
        </div>
  - block: markdown
    id: selected-projects
    content:
      title: "Selected Projects"
      text: |
        <div class="academic-list academic-project-list">
        <article class="academic-list__item">
        <h3>Task-Guided Prototype Distillation</h3>
        <p class="academic-list__meta">02/2026–Present · Advisor: Xiang Li · Under review</p>
        <p>Developed a structure-preserving prototype-generation pipeline for regression on battery aging sequences. <a href="projects/prototype-distillation/">View project record</a></p>
        </article>
        <article class="academic-list__item">
        <h3>Jetson-Based Edge Battery SOH Deployment</h3>
        <p class="academic-list__meta">08/2026–Present · Advisor: Xiang Li</p>
        <p>Building an end-to-end edge pipeline for real battery acquisition, preprocessing, reproducible experiment storage, and Jetson-side SOH inference; deployment and reference-SOH validation remain ongoing. <a href="projects/edge-soh-deployment/">View project record</a></p>
        </article>
        <article class="academic-list__item">
        <h3>Battery Dataset Processing and Infrastructure</h3>
        <p class="academic-list__meta">03/2026–04/2026 · Advisor: Xiang Li</p>
        <p>Built a reproducible Python pipeline for heterogeneous battery data, including <code>.csv</code>/<code>.mat</code> ingestion, outlier removal, 256-point downsampling, <code>.pkl</code> serialization, and validation across 11 datasets. <a href="projects/battery-dataset-processing/">View project record</a></p>
        </article>
        </div>
  - block: markdown
    id: contact
    content:
      title: "Contact"
      text: |
        Email: [ZHGong_XJTU@163.com](mailto:ZHGong_XJTU@163.com)  
        Location: Xi'an, Shaanxi, China  
        GitHub: [github.com/asdstrind](https://github.com/asdstrind)  
        Hugging Face: [huggingface.co/coinlearner](https://huggingface.co/coinlearner)
---
