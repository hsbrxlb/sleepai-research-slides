# SleepAI 调研幻灯片库

这个目录已按“未来可直接上 GitHub Pages”的方式整理。

## 目录说明

- `index.html`
  - 站点入口页，列出所有可分享的 HTML 幻灯片
- `reports/`
  - 每份可分享的调研幻灯片一个独立目录
  - 目录名统一使用 ASCII slug，便于稳定 URL
- `sources/md/`
  - 保留每份主报告的 Markdown 源稿
- `sources/notes/`
  - 保留量化备忘录、可比案例笔记等证据底稿
- `assets/`
  - 通用样式与脚本

## 未来放到 GitHub Pages 的建议

1. 新建一个 repo。
2. 把当前这个目录的全部内容作为 repo 根目录。
3. 推送后，在 GitHub Pages 里选择 `Deploy from branch`，目录选 `root`。
4. 默认入口就是 `/index.html`。

## 新增一份报告时怎么做

1. 把 Markdown 源稿放进 `sources/md/`。
2. 在 `reports/<yyyy-mm-dd-topic>/index.html` 新建对应 HTML 幻灯片。
3. 在根目录 `index.html` 增加一张入口卡片。

## 命名规范

- 对外目录：`YYYY-MM-DD-topic-slug`
- 展示标题：用中文
- Markdown 源稿：尽量与对应 topic slug 保持一致

## 备注

- 根目录不再堆放 Markdown 原稿，避免同事点进来时只看到“丑文件”。
- 真正可分享的是 `reports/` 里的 HTML 幻灯片。
