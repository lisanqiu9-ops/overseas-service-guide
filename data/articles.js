window.GUIDE_ARTICLES = [
  {
    id: "gmail-app-google-account-register-mainland",
    title: "大陆用户如何通过 Gmail App 注册 Google 账号",
    description: "通过 Gmail 移动应用进入 Google 账号创建流程，适合新手按截图一步一步操作。相比直接在浏览器里找入口，这种方式路径更固定，更适合新手。",
    cover: "assets/tutorial-images/google/cover.png",
    coverFallback: "assets/placeholder.svg",
    category: "Google 账号",
    group: "account",
    status: "available",
    difficulty: "简单",
    riskLevel: "低",
    updatedAt: "2026-05-11",
    duration: "10-20 分钟",
    targetUsers: [
      "第一次注册 Google 账号的新手用户",
      "不知道从哪里进入 Google 注册入口的用户",
      "更习惯通过手机 App 操作的用户",
      "需要 Gmail 邮箱作为海外服务基础账号的用户"
    ],
    summary: "通过 Gmail 移动应用进入 Google 账号创建流程，适合新手按截图一步一步操作。",
    notices: [
      { type: "note", text: "App Store 搜索页可能出现广告应用，操作时应认准官方 Gmail 应用，开发者应显示为 Google。" },
      { type: "info", text: "注册流程可能因设备、地区、网络环境、Google 页面版本不同而略有变化。本教程只介绍正常账号注册流程，不提供绕过风控、规避平台规则、异常注册等内容。" }
    ],
    steps: [
      {
        id: "step-01",
        number: "01",
        title: "下载并打开 Gmail 官方应用",
        description: "在 App Store 搜索 Gmail，认准开发者为 Google 的官方应用，点击获取或打开。",
        image: "assets/tutorial-images/google/步骤01.png",
        imageFallback: "assets/tutorial-images/google/步骤01.jpg",
        imageAlt: "在 App Store 搜索 Gmail 官方应用",
        imageCaption: "搜索结果中可能会出现广告应用，正式操作时应选择 “Gmail - Email by Google”。",
        tips: [
          "如果已经安装 Gmail，可以直接点击打开。",
          "注意不要误点广告应用。",
          "官方 Gmail 应用开发者应显示为 Google。"
        ]
      },
      {
        id: "step-02",
        number: "02",
        title: "打开账号管理入口",
        description: "进入 Gmail 后，点击右上角头像，进入账号管理和切换页面。",
        image: "assets/tutorial-images/google/步骤02.png",
        imageFallback: "assets/tutorial-images/google/步骤02.jpg",
        imageAlt: "点击 Gmail 右上角头像进入账号管理入口",
        imageCaption: "如果设备里已经登录过其他 Google 账号，会先看到账号列表。",
        tips: [
          "这是进入“添加账号”的上一步。"
        ]
      },
      {
        id: "step-03",
        number: "03",
        title: "添加其他账号",
        description: "点击“添加其他账号”，在邮箱类型列表中选择 Google。",
        image: "assets/tutorial-images/google/步骤03.png",
        imageFallback: "assets/tutorial-images/google/步骤03.jpg",
        imageAlt: "在 Gmail 中添加其他账号并选择 Google",
        imageCaption: "这里是从 Gmail App 进入 Google 登录或注册流程的关键入口。",
        tips: [
          "不要选择 iCloud、Outlook、Yahoo 或其他 IMAP。",
          "注册 Google 账号应选择 Google 入口。"
        ]
      },
      {
        id: "step-04",
        number: "04",
        title: "创建账号并选择个人用途",
        description: "进入 Google 登录页后，点击“创建账号”，再选择“个人用途”。",
        image: "assets/tutorial-images/google/步骤04.png",
        imageFallback: "assets/tutorial-images/google/步骤04.jpg",
        imageAlt: "在 Google 登录页选择创建账号和个人用途",
        imageCaption: "如果页面默认是登录状态，不要直接输入邮箱，应先进入“创建账号”流程。",
        tips: [
          "个人用户一般选择“个人用途”。",
          "如果没有特殊需求，不要选择工作或业务用途。"
        ]
      },
      {
        id: "step-05",
        number: "05",
        title: "填写姓名",
        description: "按照页面提示填写姓氏和名字，建议使用英文或拼音格式，方便后续使用。",
        image: "assets/tutorial-images/google/步骤05.png",
        imageFallback: "assets/tutorial-images/google/步骤05.jpg",
        imageAlt: "填写 Google 账号姓名信息",
        imageCaption: "这是 Google 账号注册的基础信息填写步骤。",
        tips: [
          "姓名尽量保持规范和稳定。",
          "不建议随意乱填。",
          "后续很多海外服务会直接读取 Google 账号名称。"
        ]
      },
      {
        id: "step-06",
        number: "06",
        title: "填写生日和性别",
        description: "继续填写出生年月日和性别信息，然后点击下一步。",
        image: "assets/tutorial-images/google/步骤06.png",
        imageFallback: "assets/tutorial-images/google/步骤06.jpg",
        imageAlt: "填写生日和性别信息",
        imageCaption: "Google 会根据这些信息进行账号基础设置和年龄相关判断。",
        tips: [
          "信息应尽量真实并符合实际使用需求。",
          "如果是未成年人账号，部分功能和权限可能受到限制。",
          "不建议为了绕开限制而虚构关键信息。"
        ]
      },
      {
        id: "step-07",
        number: "07",
        title: "选择 Gmail 地址",
        description: "系统通常会给出几个默认 Gmail 地址，也可以选择“创建您自己的 Gmail 邮箱”进行自定义。",
        image: "assets/tutorial-images/google/步骤07.png",
        imageFallback: "assets/tutorial-images/google/步骤07.jpg",
        imageAlt: "选择或自定义 Gmail 邮箱地址",
        imageCaption: "用户可以在默认推荐和自定义邮箱名之间进行选择。",
        tips: [
          "默认推荐地址可以直接使用。",
          "如果想更好记，可以自定义邮箱名。",
          "建议避免过度暴露个人隐私信息。"
        ]
      },
      {
        id: "step-08",
        number: "08",
        title: "设置密码",
        description: "输入密码并再次确认，建议使用包含字母、数字和符号的强密码。",
        image: "assets/tutorial-images/google/步骤08.png",
        imageFallback: "assets/tutorial-images/google/步骤08.jpg",
        imageAlt: "设置 Google 账号密码",
        imageCaption: "密码设置完成后即可继续后续验证流程。",
        tips: [
          "不要设置过于简单的密码。",
          "不要和其他网站完全共用密码。",
          "可以结合密码管理器保存。"
        ]
      }
    ],
    followUps: {
      title: "后续可能出现的步骤",
      description: "完成密码设置后，后续页面可能还会出现以下步骤，具体是否出现取决于设备、地区、网络环境和 Google 当前策略。",
      items: [
        {
          title: "手机号验证",
          description: "如果页面要求手机号验证，请填写自己常用的手机号，并输入收到的验证码。",
          tip: "验证码属于敏感信息，截图时必须隐藏。"
        },
        {
          title: "添加恢复邮箱",
          description: "恢复邮箱可用于找回密码并提升账号安全性。"
        },
        {
          title: "同意服务条款",
          description: "阅读服务条款和隐私政策后，点击同意。"
        },
        {
          title: "完成创建并检查安全设置",
          description: "账号创建完成后，建议进入 Google 账号安全设置页面，检查手机号、恢复邮箱以及登录设备。"
        }
      ]
    }
  },
  {
    id: "apple-id-region",
    title: "外区 Apple ID 注册与地区更改",
    description: "后续可补充外区 Apple ID 注册、App Store 地区切换、付款方式与地址填写、常见报错处理。",
    cover: "assets/placeholder.svg",
    category: "Apple ID",
    group: "region",
    status: "draft",
    difficulty: "简单",
    riskLevel: "中",
    updatedAt: "待补充",
    duration: "15-30 分钟",
    targetUsers: ["需要切换 App Store 地区或注册外区 Apple ID 的用户"],
    summary: "占位教程。后续可补充外区 Apple ID 注册、App Store 地区切换、付款方式与地址填写、常见报错处理。",
    notices: [
      { type: "warning", text: "请遵守 Apple 媒体服务条款和所在地法律法规，避免使用虚假身份或不合规支付资料。" }
    ],
    steps: [],
    followUps: null
  },
  {
    id: "turkey-gpt-subscription",
    title: "土区 GPT 订阅流程与风险说明",
    description: "后续可补充土区订阅前提、支付方式、订阅路径、失败原因、退款与账号风险说明。",
    cover: "assets/placeholder.svg",
    category: "GPT 订阅",
    group: "subscription",
    status: "draft",
    difficulty: "进阶",
    riskLevel: "高",
    updatedAt: "待补充",
    duration: "20-40 分钟",
    targetUsers: ["需要了解订阅路径、价格差异、支付限制和账号风险的用户"],
    summary: "占位教程。后续可补充土区订阅前提、支付方式、订阅路径、失败原因、退款与账号风险说明。",
    notices: [
      { type: "warning", text: "订阅、地区和支付资料需遵守 OpenAI、应用商店及支付机构规则。价格区差和地区切换可能存在服务限制或账号风险。" }
    ],
    steps: [],
    followUps: null
  }
];
