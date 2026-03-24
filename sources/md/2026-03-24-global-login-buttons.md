# 全球快捷登录按钮调研

日期：2026-03-24  
用途：注册页 / 登录页快捷按钮排序与取舍  
结论口径：优先使用公开 MAU；未公开时使用官方 active users、active devices 或广告触达口径作为代理，并单独标注。

## 一句话结论

- 全球默认页优先加：`Google`、`Apple`、`Facebook`
- 条件加：`TikTok`、`WeChat`、`LINE`、`Kakao`
- 不建议加：`WhatsApp`、`Instagram`、`YouTube`、`Messenger`

## 排序表

| 排名 | 账号生态 / 品牌 | 最新公开活跃规模 | 口径 | 登录能力 | 判断 |
| --- | --- | --- | --- | --- | --- |
| 1 | Facebook | 3.07B | MAU | 有 | 全球通用，可直接做按钮 |
| 2 | WhatsApp | 3.0B+ | monthly users | 无标准第三方消费级登录 | 不做按钮 |
| 3 | Instagram | 3.0B | MAU | 无标准第三方消费级登录 | 不做按钮 |
| 4 | Google | 3.0B Gmail users；Google 身份体系跨 Gmail / Android / Chrome / YouTube | users / ecosystem proxy | 有 | 全球默认必加 |
| 5 | Apple | 2.5B+ active devices | active devices proxy | 有 | iOS 必加 |
| 6 | TikTok | 1.84B 广告触达 | ad reach proxy | 有 | 年轻流量型产品可加 |
| 7 | WeChat | 1.411B | combined MAU | 有 | 华语 / 中国相关版本可加 |
| 8 | Telegram | 1.0B | monthly users | 有，但偏 web | 不做全球默认首发 |
| 9 | Snapchat | 946M | MAU | 有 | 可做，但优先级低于 Google / Apple / Facebook / TikTok |
| 10 | LINE | 194M | global MAU | 有 | 日本 / 台湾 / 泰国版可加 |

## 为什么不是“谁大就加谁”

- `WhatsApp`：用户极大，但公开文档里没有面向第三方消费 App 的通用 “Login with WhatsApp” 产品。现有能力主要是 WhatsApp 自身帐号体验和 Business onboarding，不等于社交登录。
- `Instagram`：用户极大，但没有和 Google / Apple / Facebook 同级的通用第三方登录产品。
- `YouTube`：应合并到 `Google`，按钮不该写成 `Continue with YouTube`。
- `Messenger`：应合并到 `Facebook`，不单独再放一个按钮。

## 推荐按钮栈

### 全球默认页

1. `Continue with Google`
2. `Continue with Apple`
3. `Continue with Facebook`

### 可选扩展

- `Continue with TikTok`
  - 适合：TikTok 买量、内容创作者流量、18 到 34 岁偏年轻客群
- `Continue with WeChat`
  - 适合：中文市场、中国相关版本、华语用户
- `Continue with LINE`
  - 适合：日本、台湾、泰国
- `Continue with Kakao`
  - 适合：韩国

### 暂不建议

- `Continue with WhatsApp`
- `Continue with Instagram`
- `Continue with Telegram`
- `Continue with Snapchat`

## 关键依据

- Apple 的 App Store Review Guidelines 4.8 使 `Sign in with Apple` 在 iOS 上几乎属于必备项，只要页面已放第三方登录。
- Google Identity Services、Sign in with Apple、Facebook Login 属于用户认知最强、开发生态最成熟、跨 web / iOS / Android 最稳的第一梯队。
- TikTok、WeChat、LINE、Kakao 的价值更偏地域或流量来源，不适合一上来把全球注册页堆满。
- WhatsApp 虽然体量巨大，但当前并不是标准社交登录供应商。

## 主要来源

### 规模数据

- Meta 2023 年报 / Facebook MAU：<https://investor.atmeta.com/investor-news/press-release-details/2024/Meta-Reports-Fourth-Quarter-and-Full-Year-2023-Results-Initiates-Quarterly-Dividend/default.aspx?code=unknown>
- WhatsApp 超过 30 亿用户：<https://about.fb.com/news/2025/09/whatsapp-introduces-advertising-and-more-features-for-businesses/>
- Instagram 30 亿 MAU：<https://www.cnbc.com/2025/09/25/instagram-3-billion-monthly-active-users.html>
- Gmail 30 亿用户：<https://apnews.com/article/63d6b29a82cb3de7702529b54b3c5071>
- Apple 25 亿活跃设备：<https://www.apple.com/newsroom/2026/01/apple-reports-first-quarter-results/>
- TikTok 18.4 亿广告触达：Kepios / DataReportal 2025 Global Statshot 搜索摘要
- 腾讯 2025 Q2 / 微信与 WeChat 合并 MAU 14.11 亿：<https://www.prnewswire.com/apac/news-releases/tencent-announces-2025-second-quarter-results-302528863.html>
- Telegram 10 亿活跃用户：<https://www.yahoo.com/news/telegram-hits-1-billion-active-011848089.html>
- Snapchat 9.46 亿 MAU：<https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx>
- LINE 1.94 亿 MAU：<https://expandedramblings.com/index.php/line-statistics/>

### 登录能力文档

- Sign in with Google：<https://developers.google.com/identity/authentication>
- Sign in with Apple：<https://developer.apple.com/documentation/xcode/configuring-sign-in-with-apple>
- App Store 4.8 / Sign in with Apple：<https://developer.apple.com/news/upcoming-requirements/?id=06302020a>
- TikTok Login Kit：<https://developers.tiktok.com/doc/login-kit-overview>
- LINE Login：<https://developers.line.biz/en/docs/line-login/>
- Telegram Login Widget：<https://core.telegram.org/widgets/login>
- Snap Login Kit：<https://developers.snap.com/snap-kit/login-kit/overview>
- Kakao Login：<https://developers.kakao.com/docs/latest/en/kakaologin/common>

## 可信度标注

- Confirmed：Facebook、WhatsApp、Instagram、Apple、WeChat、Telegram、Snapchat
- Estimated：TikTok、LINE
- Inferred：WhatsApp / Instagram 不适合作为第三方消费级社交登录按钮；YouTube 应并入 Google；Messenger 应并入 Facebook
