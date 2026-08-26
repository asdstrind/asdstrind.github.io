---
title: "Generalized Foundation Model for Lithium-ion Battery State-of-Health Prediction with Distribution Metric Learning"
translationKey: "publication-generalized-foundation-model"
authors:
  - "Zihan Gong"
  - "Xiang Li"
  - "Wei Zhang"
  - "Shaojie Yang"
publication: "Journal of Energy Storage 150 (2026): 120566"
year: "2026"
status: "Published"
abstract: >-
  This paper proposes a generalized foundation model for few-shot lithium-ion battery State-of-Health estimation using data from multiple source domains. Maximum Mean Discrepancy reduces feature-distribution gaps, while a ResNet–Transformer hybrid with a Kolmogorov–Arnold Network improves nonlinear representation. Voltage, current, and time data are used to learn transferable degradation knowledge for robust target-domain prediction.
build:
  list: never
---

## Research contribution

The work addresses distribution shifts among battery types and operating conditions when labeled target-domain data are scarce. It combines multi-source data curation, MMD-based feature alignment, and a lightweight CNN–Transformer–KAN model, then evaluates both cross-domain accuracy and BMS deployment constraints.

Reported results include cross-domain MAE below 1.1%, 8.37M parameters, 23.11 MMac FLOPs, and 8.9 ms inference time in the reported setup.

**DOI:** [10.1016/j.est.2026.120566](https://doi.org/10.1016/j.est.2026.120566)
