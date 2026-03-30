# SleepAI Project Agents

本文件是 `/Users/oliver/.config/superpowers/worktrees/sleepai-rules` 的项目级入口规则。

开始任何公开页面改动前，先读取并严格遵守同目录下的 `DESIGN_RULES.md`。`DESIGN_RULES.md` 是本项目的长版规则源。

高优先级硬规则：

- 对外 HTML 页面统一放在 `reports/<date>-<slug>/index.html`
- 首页是根目录 `index.html`
- 共享样式优先改 `assets/css/deck.css` 与 `assets/css/site.css`
- 单页 `Codex.md` 只写单页业务规则，不接管全站排版和站点结构
- 单页内联样式不得把 `.hero h1`、`.section-title`、`.section-sub`、`.big-line` 的最大宽度压到共享安全线以下
- 桌面端标题、导语、卡片正文应尽量把容器宽度用到合理上限；不能左侧只占一小块、右侧长期留大片空白
- 中文和中英混排标题必须优先按自然词组换行，不得拆成海报式竖块
- 新页面和改版页面完成前，至少检查 `1440px` 与 `390px` 两档宽度
- 若出现过早换行，优先顺序固定为：放宽文本块宽度、改写标题、调整字号与行高、最后才改布局
