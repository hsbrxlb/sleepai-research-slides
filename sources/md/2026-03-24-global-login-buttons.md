# 全球快捷登录按钮调研

日期：2026-03-24  
用途：注册页 / 登录页快捷按钮排序与取舍  
结论口径：优先使用公开 MAU；未公开时使用官方 active users、active devices、广告触达或平台公开活跃口径作为代理，并单独标注。

## 一句话结论

- 当前版先放：`Google`、`Apple`
- 候选层：`X`、`TikTok`
- `Facebook`：保留对比，当前不纳入
- `WeChat`、`LINE`、`Kakao`：地区参考，不纳入当前欧美优先版本
- 不做独立按钮：`WhatsApp`、`Instagram`、`YouTube`、`Messenger`

## 判断标准

体量大，不一定适合首页。还要同时看四件事：

1. 体量够不够大  
2. 有没有标准第三方登录产品  
3. 能不能稳定覆盖 web、iOS、Android  
4. 用户会不会把它当成“正常的一键登录”

## 前十体量与登录能力

| 排名 | 账号生态 / 品牌 | 最新公开活跃规模 | 口径 | 标准第三方登录 | 判断 |
| --- | --- | --- | --- | --- | --- |
| 1 | Facebook | 30.7 亿 | 月活 | 有 | 可做，当前不纳入 |
| 2 | WhatsApp | 30 亿+ | 月活用户 | 无标准消费级登录 | 不做独立按钮 |
| 3 | Instagram | 30 亿 | 月活 | 无标准消费级登录 | 不做独立按钮 |
| 4 | Google | 30 亿；Gmail 用户数代理 | users / ecosystem proxy | 有 | 当前建议 |
| 5 | Apple | 25 亿+ | 活跃设备代理 | 有 | 当前建议 |
| 6 | TikTok | 18.4 亿 | 广告触达代理 | 有 | 候选 |
| 7 | WeChat | 14.11 亿 | 合并月活 | 有 | 参考，不纳入当前版 |
| 8 | Telegram | 10 亿 | 月活用户 | 有，但偏 web | 不做默认首发 |
| 9 | Snapchat | 9.46 亿 | 月活 | 有 | 优先级低于 TikTok |
| 10 | X | 5.86 亿 | 广告触达代理 | 有 | 候选 |

## 为什么 `X` 先放候选层

- `X` 有官方 OAuth，技术上能做成真的快捷登录
- 但它不是最底层的全球账号体系
- 覆盖面、设备绑定度、邮箱绑定度都弱于 `Google`、`Apple`
- 普通用户对“用 X 注册一个睡眠产品”的预期，也弱于 `Google`、`Apple`
- 更像社媒入口，不像底层账号

## 为什么不放 `WhatsApp` 和 `Instagram`

### WhatsApp

- 不是“点了会报错”
- 问题是官方并没有给普通消费 App 一条标准的 `Login with WhatsApp`
- 公开能力更偏 `WhatsApp Business`、商家接入、开户和消息触达
- 真硬做，最容易把“熟悉 WhatsApp”误当成“适合首页注册入口”

### Instagram

- 不是“完全不能碰”
- 问题是它不是 `Google / Apple / Facebook` 这一类标准注册入口
- 公开能力更偏 Instagram 自身账号能力，或偏 professional / business 场景
- 真硬做，最常见结果是流程绕、支持不稳、预期错位

## 推荐按钮栈

### 当前版

1. `使用 Google 登录`
2. `使用 Apple 登录`

### 候选层

3. `使用 X 登录`
4. `使用 TikTok 登录`

### 参考层

- `使用 WeChat 登录`
- `使用 LINE 登录`
- `使用 Kakao 登录`
- `Facebook Login`
  - 保留能力对比，不纳入当前版

### 不做独立按钮

- `使用 WhatsApp 登录`
- `使用 Instagram 登录`
- `使用 YouTube 登录`
- `使用 Messenger 登录`

## 关键依据

- `Google`、`Apple` 先解决当前版最大覆盖和最低摩擦
- `X`、`TikTok` 有官方登录能力，但更适合候选层
- `Facebook` 有能力，但当前版不纳入
- `WeChat`、`LINE`、`Kakao` 只做地区参考
- `WhatsApp`、`Instagram` 体量很大，但都不是标准注册入口

## 主要来源

### 规模数据

- Meta 2023 年报 / Facebook MAU：<https://investor.atmeta.com/investor-news/press-release-details/2024/Meta-Reports-Fourth-Quarter-and-Full-Year-2023-Results-Initiates-Quarterly-Dividend/default.aspx?code=unknown>
- WhatsApp 超过 30 亿用户：<https://about.fb.com/news/2025/09/introducing-message-translations-whatsapp/amp/>
- Instagram 30 亿 MAU：<https://www.cnbc.com/2025/09/25/instagram-3-billion-monthly-active-users.html>
- Gmail 30 亿用户：<https://apnews.com/article/63d6b29a82cb3de7702529b54b3c5071>
- Apple 25 亿活跃设备：<https://www.apple.com/newsroom/2026/01/apple-reports-first-quarter-results/>
- TikTok 18.4 亿广告触达：Kepios / DataReportal 2025 Global Statshot
- 腾讯 2025 Q2 / 微信与 WeChat 合并 MAU 14.11 亿：<https://www.prnewswire.com/apac/news-releases/tencent-announces-2025-second-quarter-results-302528863.html>
- Telegram 10 亿活跃用户：<https://www.yahoo.com/news/telegram-hits-1-billion-active-011848089.html>
- Snapchat 9.46 亿 MAU：<https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx>
- X 5.86 亿广告触达：DataReportal 2025 Digital Global Overview

### 登录能力文档

- Google Authentication：<https://developers.google.com/identity/authentication>
- Sign in with Apple：<https://developer.apple.com/documentation/xcode/configuring-sign-in-with-apple>
- App Store 4.8 / Sign in with Apple：<https://developer.apple.com/news/upcoming-requirements/?id=06302020a>
- Facebook Login：<https://developers.facebook.com/docs/facebook-login/>
- X OAuth 2.0：<https://developer.x.com/en/docs/authentication/oauth-2-0/authorization-code>
- TikTok Login Kit：<https://developers.tiktok.com/doc/login-kit-overview>
- LINE Login：<https://developers.line.biz/en/docs/line-login/>
- Telegram Login Widget：<https://core.telegram.org/widgets/login>
- Snap Login Kit：<https://developers.snap.com/snap-kit/login-kit/overview>
- Kakao Login：<https://developers.kakao.com/docs/latest/en/kakaologin/common>
- WhatsApp Embedded Signup：<https://developers.facebook.com/docs/whatsapp/embedded-signup/>
- Instagram API with Instagram Login：<https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login>

## 可信度标注

- Confirmed：Facebook、WhatsApp、Instagram、Apple、WeChat、Telegram、Snapchat、Google 登录能力、Apple 登录能力、Facebook 登录能力、X 登录能力
- Estimated：TikTok、X 活跃规模
- Inferred：`X` 更适合扩展层；`WhatsApp`、`Instagram` 不适合作为普通消费级独立快捷登录按钮；`YouTube` 应并入 `Google`；`Messenger` 应并入 `Facebook`
