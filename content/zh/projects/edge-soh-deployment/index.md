---
title: "基于 Jetson 的电池 SOH 边缘部署系统"
translationKey: "project-edge-soh-deployment"
period: "08/2026–至今"
advisor: "Xiang Li"
description: "面向电池实验的硬件设计、数据采集与 Jetson SOH 推理。"
methods:
  - "Jetson 端 SOH 推理"
  - "ADS1115/I2C 连续采样"
  - "3×256 电池循环输入"
  - "原始与处理后数据存储"
build:
  list: never
---

## 项目简介

围绕真实电池实验，开发一套集恒流放电控制、数据采集与 SOH 推理于一体的 Jetson 边缘系统。

## 项目进展

- **硬件设计：** 已完成钠离子电池可编程 3C 恒流放电控制器的 KiCad 原理图与双层 PCB 布局。
- **数据采集：** 通过 I2C 实现 ADS1115 通信与连续采样。
- **数据处理：** 保留原始测量值，将电压、电流与时间序列整理为同步的 3×256 循环输入，支持预处理、存储与实验回放。
- **实验管理：** 保存样本标识、数据来源与回放顺序，加入完整性检查和中断恢复，便于复现实验。

目前使用[已发表的 SOH 模型](../../publications/generalized-foundation-model/)开展 Jetson 端部署测试，正在进行整机联调，并与实验或参考 SOH 值对比。

## 钠离子电池可编程 3C 恒流放电控制器

控制器面向目标倍率为 3C 的钠离子电池放电测试，电路涵盖模拟电流反馈、MOSFET 负载控制、电流与电压采样及保护功能。双层 PCB 设计兼顾功率布线与散热。

<div class="hardware-gallery" id="hardware-design">
<figure class="hardware-figure hardware-figure--pcb">
  <figcaption><h3>双层 PCB 布局</h3><span><a href="/images/projects/sodium-ion-3c-discharge-controller-pcb.png" target="_blank" rel="noopener">查看高清图 ↗</a> · <a href="/files/sodium-ion-3c-discharge-controller-pcb.pdf">原始 PDF ↗</a></span></figcaption>
  <a class="hardware-image" href="/images/projects/sodium-ion-3c-discharge-controller-pcb.png" target="_blank" rel="noopener" aria-label="双层 PCB 布局 · 查看高清图"><img src="/images/projects/sodium-ion-3c-discharge-controller-pcb.webp" alt="双层 PCB 布局" width="2120" height="2350" loading="lazy" decoding="async"></a>
</figure>

<figure class="hardware-figure hardware-figure--schematic">
  <figcaption><h3>控制与测量原理图</h3><span><a href="/images/projects/sodium-ion-3c-discharge-controller-schematic.png" target="_blank" rel="noopener">查看高清图 ↗</a> · <a href="/files/sodium-ion-3c-discharge-controller-schematic.pdf">原始 PDF ↗</a></span></figcaption>
  <a class="hardware-image" href="/images/projects/sodium-ion-3c-discharge-controller-schematic.png" target="_blank" rel="noopener" aria-label="控制与测量原理图 · 查看高清图"><img src="/images/projects/sodium-ion-3c-discharge-controller-schematic.webp" alt="控制与测量原理图" width="2827" height="5978" loading="lazy" decoding="async"></a>
</figure>
</div>
