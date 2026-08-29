---
title: "基于 Jetson 的电池 SOH 边缘部署系统"
translationKey: "project-edge-soh-deployment"
period: "08/2026–Present"
advisor: "Xiang Li"
description: "面向电池实验数据采集、SOH 模型输入处理和 Jetson 端推理的边缘部署项目。"
methods:
  - "Jetson 边缘推理"
  - "ADS1115/I2C 数据采集"
  - "3×256 电池 cycle 输入"
  - "原始与处理后数据存储"
build:
  list: never
---

## 项目简介

该项目面向真实电池实验，基于 Jetson 构建 SOH 边缘推理流程。项目与我已发表的 generalized SOH 论文中的公开数据集实验相互独立。

## 当前工作

- 已验证 ADS1115 通过 I2C 的通信与连续数据采集。
- 建立原始测量数据与 3×256 模型输入的存储，并支持实验数据 replay。
- 当前使用已有 generalized SOH model 作为初始推理模型，用于验证 Jetson 部署流程。

真实电池端到端 SOH 实验验证仍在进行中。