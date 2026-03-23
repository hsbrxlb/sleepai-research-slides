# SleepAI 占卜、星座、解梦模块设计与竞品调研

研究日期：2026-03-23  
主题类型：产品/赛道 + 公司/品牌/产品  
研究对象：Moonly、DreamApp、Oniri，以及 SleepAI 新增 `占卜 / 星座 / 解梦` 模块的产品设计与合规策略  
时间范围：优先覆盖 2025-03-23 至 2026-03-23，并补充仍然有效的更早官方资料  
状态标记：`Confirmed` 为官方/平台/监管来源直接支持；`Estimated` 为平台口径或区间估算；`Inferred` 为基于多源证据的策略推断

## 一、Executive Summary

- 最关键判断：这三个模块可以做，但不要包装成“疗愈”或“治疗工具”。更稳妥的定位是：睡前陪伴、晨间记录、个人报告和仪式感内容。
- 产品顺序建议分两步。`第一步` 先上 `星座 / 占卜`，用出生信息驱动的个人报告做付费入口；`第二步` 再上 `解梦`，把它做成 `记录 -> 解读 -> 趋势 -> 回到睡眠和情绪` 的闭环，而不是一次性“算梦”。
- Moonly 证明了 `出生日期/时间/地点 -> 命盘 -> 每日指导 / 关系报告 / AI 问答 / 订阅` 的产品结构成立；DreamApp 证明了“即时解释”有转化力；Oniri 证明了“结构化记录 + 长期统计”才是更稳的留存抓手。
- 对 SleepAI 最值得复制的不是“玄学内容本身”，而是三套产品机制：`高价值新手引导`、`可持续的报告系统`、`轻量但高频的内容更新`。
- 风险不在“神秘学”三个字本身，而在三件事：`把内容说成健康疗效`、`处理出生信息与梦境文本等高敏数据`、`订阅与单次报告边界不清`。
- 与现有 SleepAI 语境最贴合的是 `解梦`。本地资产里已经有解梦内容页面和内部解梦提示词；星座与占卜更像新增增长层，需要更谨慎地和主品牌对齐。
- 下一步建议：90 天内先做 `Personal Night Profile / Birth Report` MVP 和 `Dream Journal + Quick Read` MVP；先验证付费与留存，再决定是否扩展到关系报告、AI 占星师和长期趋势报告。

## 二、Scope & Key Questions

### 研究边界

- 对象：SleepAI 新增的 `占卜 / 星座 / 解梦` 三个功能/场景模块
- 目的：为 CEO / 创始人 / 产品负责人提供可执行的产品与商业决策依据
- 地域：先看全球消费级移动应用，再聚焦 SleepAI 当前更相关的英语/欧美市场
- 来源：优先官方站点、App Store / Google Play、隐私政策、官方监管/平台政策

### 核心问题

1. 这三个模块在成熟竞品里分别如何被设计成“能留存、能付费、能扩展”的产品？
2. 哪些设计适合 SleepAI 现有品牌和用户心智，哪些会造成定位偏移？
3. 用户为什么愿意输入出生信息，为什么愿意持续记录梦境？
4. 哪些关键数字和评论信号说明这些模块有真实市场，而不是伪需求？
5. 如果 SleepAI 要做，最优的模块顺序、信息架构、收费方式和风控边界是什么？

### 默认假设

- SleepAI 当前核心人群仍以英语市场、年轻女性、夜间陪伴/睡眠支持场景为主
- 新功能目标不是改写 SleepAI 主品类，而是提高使用频次，补足内容层次，增加付费路径
- 用户愿意接受带有象征意义和仪式感的内容，但对“收费不透明”和“健康承诺过头”容忍度很低

## 三、Landscape / Topic Map

### 1. 三个模块不是三门孤立生意，而是一套解释型内容系统

这三个模块背后的共同商业逻辑很一致：

1. 用户先提供高价值个人信息，或者输入一段高意图内容  
2. 系统返回带有“只属于我”感觉的解释和报告  
3. 再把这份解释延伸成日报、关系分析、提醒、问答和趋势  
4. 最后形成 `订阅 + 单次深度报告 + 高频回访`

差异在于输入与留存方式：

| 模块 | 核心输入 | 核心输出 | 最强价值 | 最强风险 |
| --- | --- | --- | --- | --- |
| 星座 | 出生日期/时间/地点 | 命盘、运势、关系、时机建议 | 新手引导强、身份感强、订阅潜力强 | 容易说得太满 |
| 占卜 | 同样依赖出生信息或问题输入 | 个性化报告、关系报告、AI 问答 | 高客单报告、节日/节点触发 | 易过度承诺命运与结果 |
| 解梦 | 梦境文本/语音/标签 | 即时解释、象征含义、趋势 | 与睡眠场景天然贴合、可做晨间回访 | 易碰心理健康与隐私高敏边界 |

### 2. Moonly、DreamApp、Oniri 各自代表不同产品原型

- `Moonly`：靠出生信息驱动的灵性内容产品  
  核心是 `Birth Chart`，其他模块都围着这张个人画像转。
- `DreamApp`：主打“醒来马上知道梦是什么意思”的高转化产品  
  核心是马上出结果，文案情绪很强。
- `Oniri`：梦境日记和清醒梦工具箱  
  核心是结构化记录、统计和长期回访。

### 3. 对 SleepAI 的品牌适配度并不对称

- `高适配`：解梦  
  原因：SleepAI 官网已经上线解梦内容，内部也已有解梦分析框架。
- `中适配`：星座  
  原因：可以被包装成睡前仪式、自我观察、每日建议。
- `低到中适配`：占卜  
  原因：如果说法太像“命运已定”，会和 SleepAI 的安全感、低刺激、陪伴定位冲突。

## 四、Competitive / Comparable Analysis

### 1. 核心竞品对比

| 维度 | Moonly | DreamApp | Oniri | 对 SleepAI 的含义 |
| --- | --- | --- | --- | --- |
| App Store 常见分类 | 生活方式 | Health & Fitness | Health & Fitness | 星座/占卜更适合放在生活方式类；解梦如果太像健康产品，审核压力会明显上升 |
| 核心定位 | Vedic astrology + lunar ritual + AI astrologer | AI 梦境解释 + 轻心理陪伴 | 梦境日志 + AI 解读 + lucid dreaming | SleepAI 不该复制单一竞品，而应拆开来学 |
| 主要输入 | 出生日期/时间；大概率还要出生地点 | 梦境长文本、后续追问 | 文本/语音/标签/图像/绘图 | 星座模块靠个人资料驱动；解梦模块靠结构化记录驱动 |
| 主要输出 | 命盘、兼容性、时机建议、AI 问答、梦境解释 | 个性化解释、主题提炼、AI 对话 | AI 解读、标签化反思、统计、导出、清醒梦工具 | SleepAI 要同时兼顾“马上有结果”和“长期能沉淀” |
| 付费方式 | 免费试用 + 订阅 + 单次 Birth Chart | 周/月/年订阅，多档试用与高价年费 | 月/年订阅，解锁分析/统计/导出 | 最合适的结构是 `免费体验 + 单次深度报告 + 订阅持续服务` |
| 增长信号 | Google Play `1M+` 下载；官网自报 `10M happy souls` | 官网自报 `1.6M downloads`；Google Play `500K+` | App Store评分高，但 Android 规模小很多 | 这是可做的赛道，但不同模块的规模上限和付费效率不同 |
| 主要问题 | 付费墙重、口径不一致、隐私说法存在张力 | 订阅争议、疗效暗示偏强 | Android 稳定性弱、商业化规模偏小 | SleepAI 必须把用户信任放在前面 |

### 2. Moonly：最值得借鉴的是“报告中台”

`Confirmed`

- 官网首页把 Moonly 定义为 `Next-Gen Astrology and Self-Discovery`，功能包含 `Birth Chart / Compatibility / Personal Astrologer / Tarot / Forecasts / Meditations / Dream Reader`。  
- 官网 FAQ 明确称其为 `holistic self-discovery app`，并表示核心基于 `Birth chart` 输出 daily guidance、compatibility 与 personalized recommendations。  
- 隐私政策于 2024-02-14 发布，列出会收集 `Date and Time of Birth`、personal reading 所需信息、dreams or mood logs、chat communications。  
- Google Play 页面显示 `1M+ Downloads`、`28.2K reviews`、评分 `4.0`，页面更新日期为 `2026-03-19`。

`Inferred`

- 对 SleepAI 真正有价值的不是“Vedic astrology”本身，而是它证明了：  
  `高价值个人信息 -> 主报告 -> 日报 / 关系 / 问答 / 提醒` 这条链路能撑起长期收入。  
- 对西方市场，Moonly 用的是 `Birth Chart`；对中文语境，SleepAI 可以换成 `命盘 / 八字 / 生辰信息驱动的个人报告`，底层产品逻辑不变。

### 3. DreamApp：最值得借鉴的是“即时回报”

`Confirmed`

- DreamApp 官网写明其使命是 `Unlock the Meaning of Your Dreams`，并自报 `1.6M downloads`、`2.5M dreams analyzed`。  
- App Store 页面显示 IAP 包括 `Weekly $7.99`、`Monthly $9.99`、`Annual Subscription $59.99` 等多档。  
- App Store 隐私标签显示可能处理 `Health`、`Audio Data`、`Sensitive Info`、`Location`、`Purchase History` 等。  
- Google Play 页面显示 `500K+ Downloads`、`12.4K reviews`、评分 `4.0`。  
- 官方隐私页显示其会收集 names、relationship status、gender、dreams、phone numbers、email addresses、billing information、date of birth、geolocation 等，并列出 RevenueCat、Singular、Amplitude、OpenAI 等第三方服务。

`Inferred`

- DreamApp 的强项是首页承诺非常直接：用户一醒来就能立刻得到解释。  
- 但它的说法已经很靠近 `mental clarity / therapist guidance / anxiety / depression`，所以监管和信任压力都更高。

### 4. Oniri：最值得借鉴的是“长期留存结构”

`Confirmed`

- App Store 文案直接写明其是 `the most complete app for keeping a dream journal, analyzing your dreams, and having lucid dreams`。  
- 页面描述中包含结构化字段：记录 emotions、people、places、actions，支持 oral notes、AI analysis、password lock、PDF export、advanced statistics。  
- Google Play 页面显示 `10K+ Downloads`、`282 reviews`、评分 `2.4`；页面口径同时说明产品已持续开发约 10 年，并在 2025-2026 期间持续更新。  
- Oniri 隐私政策写明：dreams are `a very intimate and personal kind of data`，并强调不出售个人信息。

`Inferred`

- Oniri 适合 SleepAI 的地方在于：  
  梦不只是一次性内容，还可以沉淀成日历、趋势、重复意象和情绪轨迹。  
- 对 SleepAI 来说，这比 DreamApp 那种“看完就走”的单次解释更适合长期留存。

## 五、Quantitative Facts & Evidence

### 1. 关键事实表

| 数据点 | 数值 | 日期/口径 | 状态 | 来源 |
| --- | --- | --- | --- | --- |
| Moonly Google Play 下载量 | `1M+` | 抓取于 2026-03-23 | Confirmed | Google Play |
| Moonly Google Play 评分/评论 | `4.0 / 28.2K reviews` | 抓取于 2026-03-23 | Confirmed | Google Play |
| Moonly 页面更新时间 | `2026-03-19` | Google Play 页面 | Confirmed | Google Play |
| Moonly 官网自报用户规模 | `10M happy souls` | 官网首页 | Confirmed self-reported | Moonly 官网 |
| DreamApp 官网自报规模 | `1.6M downloads`、`2.5M dreams analyzed` | 官网首页 | Confirmed self-reported | DreamApp 官网 |
| DreamApp Google Play 下载量 | `500K+` | 抓取于 2026-03-23 | Confirmed | Google Play |
| DreamApp Google Play 评分/评论 | `4.0 / 12.4K reviews` | 抓取于 2026-03-23 | Confirmed | Google Play |
| DreamApp 常见年费档 | `US$59.99` | App Store IAP | Confirmed | App Store |
| Oniri Google Play 下载量 | `10K+` | 抓取于 2026-03-23 | Confirmed | Google Play |
| Oniri Google Play 评分/评论 | `2.4 / 282 reviews` | 抓取于 2026-03-23 | Confirmed | Google Play |
| Oniri App Store能力范围 | 日志、AI 分析、清醒梦、PDF 导出、统计 | 抓取于 2026-03-23 | Confirmed | App Store |

### 2. 用户输入与输出结构

| 能力 | Moonly | DreamApp | Oniri | 对 SleepAI 的建议 |
| --- | --- | --- | --- | --- |
| 出生信息采集 | 强 | 弱 | 无 | 星座/占卜必须单独授权，并采用分步采集 |
| 文本输入 | 中 | 强 | 强 | 解梦需要自由文本 |
| 语音输入 | 未突出 | 有 | 强 | SleepAI 应继续利用语音优势 |
| 结构化标签 | 弱 | 中 | 强 | 结构化标签是做长期趋势的前提 |
| 即时报告 | 强 | 强 | 中 | 首次体验必须 1 分钟内出结果 |
| 长期趋势 | 中 | 弱 | 强 | 解梦如果没有长期趋势，很难长期留存 |

### 3. 估算与推断

- `Inferred`：对 SleepAI 而言，星座/占卜模块最重要的价值在 `新用户转化` 和 `单次报告收入`；解梦模块最重要的价值在 `晨间回访` 和 `长期内容积累`。  
  方法：基于 Moonly 的新手引导结构，以及 DreamApp/Oniri 的留存路径差异推断。  
  置信度：中高。
- `Inferred`：若三者同时上线，SleepAI 团队的真正瓶颈不会是模型，而是 `内容 taxonomy + 隐私治理 + 付费边界`。  
  方法：基于三款产品的公开能力范围与隐私披露推断。  
  置信度：高。

## 六、Strategic Implications / Actionable Insights

### 1. 产品路线：先做两条主线，不要三头并进

建议分成两条产品线，不要做成三个分散的小入口：

1. `夜间个人档案`  
   包含：星座、占卜、个人命盘/八字、每日建议、关系报告、关键日期提醒  
   目标：拿下新手引导、首单和订阅
2. `梦境记录与解读`  
   包含：晨间梦境记录、快速解读、标签、趋势，以及和睡眠/压力的轻连接  
   目标：拿下晨间回访、内容沉淀和搜索留存

### 2. 新手引导：不要一上来就要全量生辰八字

建议采用三段式渐进采集：

- `Step 1`：先用生日给一个免费试读  
  例如：人格摘要、今日主题、睡前建议
- `Step 2`：为获得完整报告，再补出生时间
- `Step 3`：为获得关系/年度/时机精算，再补出生地点

含义：

- 降低首次放弃率
- 把最敏感的数据留到价值感最强的节点
- 这样更符合英语市场用户习惯；如果面向中文语境，可把文案换成 `命盘更完整 / 八字更精确`

### 3. 解梦模块：采用 `Oniri 70% + DreamApp 30%`

建议结构：

- 前台体验学 DreamApp  
  核心是“醒来 1 分钟内得到解释”
- 数据结构学 Oniri  
  至少包含：梦境标题、梦境内容、醒来情绪、人物、地点、关键物件、清晰度
- 输出结构改成三层  
  `快速摘要` -> `象征/情绪线索` -> `与睡眠和近几天压力的关联`

这比现有“梦境心理分析”式写法更像产品，也更容易做周报和长期趋势。

### 4. 商业模式：用 `报告单卖 + 订阅`，不要只做高压订阅

推荐商业结构：

- 免费：  
  基础星座摘要、1 次梦境快速解读、少量月相/睡前内容
- 单次付费：  
  完整命盘/八字报告、关系报告、年度报告、梦境深度档案
- 订阅：  
  日报、每周建议、关系动态、连续梦境趋势、AI 问答

原因：

- Moonly 证明单次 `Birth Chart` 很适合做首单
- 纯 DreamApp 式高压年费会伤 SleepAI 主品牌信任
- 解梦更适合靠连续价值拉订阅，而不是第一天就压付费墙

### 5. 品牌表达：必须回到 SleepAI 的“安全感”主轴

建议保留的说法：

- 自我观察
- 睡前仪式
- 晨间回看
- 象征性解读
- 温和建议

建议避免的说法：

- 治疗焦虑 / 抑郁
- 诊断潜意识问题
- 科学预测未来
- 临床验证的梦境疗法

原因：

- Apple 对健康和医疗类应用的表达更敏感
- 解梦一旦被用户理解为心理治疗替代，隐私与投诉风险都会显著升高
- SleepAI 的主品牌本来就不是“强诊断工具”，而是“被接住、被安放、慢慢睡下去”

### 6. 90 天执行路径

#### 0-30 天

- 确定统一信息架构：`个人档案 / 报告 / 仪式 / 日记`
- 写清楚授权、保存期限、删除和导出流程
- 搭建出生信息与梦境记录的最小数据模型

#### 31-60 天

- 上线 `Birth Report` MVP  
  输出：个人摘要、今夜建议、关系试读
- 上线 `Dream Quick Read` MVP  
  输出：快速摘要、象征线索、轻量建议

#### 61-90 天

- 补 `每周建议`、`关系报告`、`梦境趋势卡`
- 打通推送：晚上引导睡前内容，早上引导记梦
- 评估真实指标：资料填写完成率、单次报告转化、7 日回访、订阅转化

## 七、Risks, Unknowns, and What to Verify Next

### 高置信风险

1. `数据风险`  
   出生信息、梦境文本、语音、情绪标签都属于高敏个人内容。Moonly、DreamApp、Oniri 的公开披露都说明这一点。
2. `健康化表达风险`  
   DreamApp 使用 therapist / anxiety / depression 这类说法，说明这是最容易踩线的区域。
3. `订阅信任风险`  
   Moonly 与 DreamApp 都出现了用户对额外付费、试用与取消的不满。

### 中低置信未知项

1. DreamApp 当前真实新手引导顺序与付费墙位置  
2. Moonly 在实际 App 内是否强制要求出生地点  
3. Oniri 免费版对深度分析的额度限制  
4. 三者在大模型与规则引擎上的分工比例  
5. 不同平台间能力是否显著不一致

### 下一步必须验证的 5 个问题

1. 如果面向英语市场上线，`Birth Chart` 是否应优先于直接使用“Bazi/八字”这个概念？
2. 出生时间/地点是否可以延后索取而不显著伤转化？
3. 梦境文本和音频是否完全不进入广告和归因链路？
4. 付费页面如何明确区分：哪些是订阅权益，哪些是单次深度报告？
5. 解梦页面是否继续保持 `Lifestyle / 自我观察` 这套叙事，而不主动推向 `Health & Fitness / therapy`？

## 八、Source Appendix

### 官方产品与平台

- Moonly 官网：https://moonly.app/
- Moonly 隐私政策：https://moonly.app/privacy
- Moonly App Store：https://apps.apple.com/us/app/moonly-moon-phases-calendar/id1489889871
- Moonly Google Play：https://play.google.com/store/apps/details?hl=en_US&id=com.moonly.android
- DreamApp 官网：https://dreamapp.io/
- DreamApp 隐私政策：https://dreamapp.io/privacy
- DreamApp App Store：https://apps.apple.com/us/app/dreamapp-dream-interpretation/id1524421486
- DreamApp Google Play：https://play.google.com/store/apps/details?hl=en_US&id=com.dreamapp.app
- Oniri 官网梦境日志页：https://www.oniri.io/dream-journal
- Oniri 官网解梦页：https://www.oniri.io/dream-analysis
- Oniri 隐私政策：https://www.oniri.io/legal/privacy-policy
- Oniri App Store：https://apps.apple.com/us/app/oniri-your-dream-journal/id968737914
- Oniri Google Play：https://play.google.com/store/apps/details?hl=en-US&id=io.oniri.oniriapp

### 平台与监管

- Apple App Review Guidelines：https://developer.apple.com/app-store/review/guidelines/
- Google Play User Data policy：https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play Health Content and Services：https://support.google.com/googleplay/android-developer/answer/16679511
- ICO app privacy reminder, 2024-02-08：https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/02/ico-urges-all-app-developers-to-prioritise-privacy/
- FTC Health Breach Notification Rule update, 2024-04-26：https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule

### SleepAI 本地上下文

- SleepAI 上下文主文档：`/Users/oliver/Downloads/SleepAI/SleepAI Context.md`
- SleepAI 现有解梦页面：`/Users/oliver/Downloads/SleepAI/SleepAI官网/final-site/blog/dream-meaning/index.html`
- SleepAI 内部解梦提示词：`/Users/oliver/Downloads/SleepAI/SleepAI-运营和产品相关文件/Pufflo大模型Prompt.txt`
