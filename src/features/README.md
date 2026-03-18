# 业务功能模块（核心架构）

- **作用**：按**业务领域**组织代码，将相关的组件、逻辑、状态聚合在一起，实现 “高内聚”。
- **设计优势**：避免代码分散在 components/、hooks/ 等目录中，便于功能模块的独立开发、测试和删除。
- **示例结构**（以 user 模块为例）：

```plaintext
features/
└── user/
    ├── components/       # 用户模块专用组件（如 UserProfile、UserList）
    ├── hooks/            # 用户模块专用 Hooks（如 useUser、useUserAuth）
    ├── store/            # 用户模块状态（如 userSlice.ts）
    ├── services/         # 用户模块 API（如 userApi.ts）
    ├── types/            # 用户模块类型定义
    └── index.ts          # 模块出口（导出公共组件、Hooks 等）
```
