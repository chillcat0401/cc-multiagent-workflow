---
entry_point: true
trigger: One-line requirement from user
---

# SDD Autonomous Development Pipeline

## Quick Start

向架构师/PM Agent 输入一句话需求，即可自动运行：

```
@agents/architect-pm.md 我需要一个 [一句话需求描述]
```

示例：
```
@agents/architect-pm.md 我需要一个极简风格的待办事项应用，支持标签分类和截止日期
```

## Agent 角色映射

| 角色 | Agent 类型 | 文件 | 触发方式 |
|------|-----------|------|---------|
| 架构师/PM/UI-UX | `Plan` | `agents/architect-pm.md` | 用户入口，一句话需求 |
| 资深开发工程师 | `general-purpose` | `agents/developer.md` | 架构师委派 |
| 资深测试工程师 | `general-purpose` | `agents/tester.md` | 架构师委派 |
| 需求评审确认师 | `general-purpose` | `agents/reviewer.md` | 架构师遇到歧义时按需调用 |

## 自动化流水线

```
用户一句话需求
     │
     ▼
┌─────────────────────────────────┐
│  架构师/PM/UI-UX  (Plan Agent)  │ ← 入口
│  - 需求分析                      │
│  - OpenSpec vs Superpowers 决策  │
│  - UI/UX 设计 (遵循 DESIGN.md)   │
│  - 任务拆解                      │
└────────────┬────────────────────┘
             │
             │  需求不明确？──────────────► ┌──────────────────┐
             │                              │ 需求评审确认师    │
             │◄─────────────────────────────│ (按需激活)       │
             │                              └──────────────────┘
             │
             │  委派组件任务
             ▼
┌─────────────────────────────────┐
│  资深开发工程师                   │
│  (general-purpose Agent)        │
│  - 严格按 spec 实现               │
│  - 不猜测、不夹带、不测试自己代码  │
│  - 遵循 DESIGN.md 风格           │
└────────────┬────────────────────┘
             │
             │  代码 + 说明
             ▼
┌─────────────────────────────────┐
│  资深测试工程师                   │
│  (general-purpose Agent)        │
│  - 逐条验收标准验证               │
│  - DESIGN.md 合规检查            │
│  - 自动化检查                     │
└────────────┬────────────────────┘
             │
             │  PASS ──────────────────────► 下一组件 / 集成
             │
             │  FAIL ──────────────────────► 回开发工程师修复
             │
             │  SPEC ISSUE ────────────────► 回架构师重审需求
```

## 关键约束

- **开发工程师绝不测试自己的代码** — 测试完全由测试工程师负责
- **需求评审确认师仅按需激活** — 只在架构师遇到歧义或需要最终决策时工作
- **统一 UI/UX 风格** — 所有 Agent 遵循 `DESIGN.md` 的设计规范
- **循环上限** — 同一组件 Developer↔Tester 循环超过 3 次，架构师必须重新设计

## 小项目 vs 复杂项目

| 维度 | OpenSpec (小项目) | Superpowers (复杂项目) |
|------|------------------|----------------------|
| 组件数 | <5 | 5+ |
| 模块数 | 单模块 | 多模块 |
| 委派方式 | 逐组件串行 | 模块内并行 |
| 集成测试 | 简单验收 | 完整集成测试 |

## 文件结构

```
cc-multiagent-workflow/
├── DESIGN.md              # UI/UX 设计规范（所有 Agent 的视觉宪法）
├── WORKFLOW.md            # 本文档 - 流水线使用说明
└── agents/
    ├── architect-pm.md    # 架构师/PM/UI-UX - 入口编排者
    ├── developer.md       # 资深开发工程师 - 精准实现者
    ├── tester.md          # 资深测试工程师 - 质量守门人
    └── reviewer.md        # 需求评审确认师 - 按需决策者
```
