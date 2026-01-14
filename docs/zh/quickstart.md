# Airalogy 平台使用快速开始指南

## 注册 Airalogy 账号

1. 访问 Airalogy 官方网站。
2. 点击右上角的“注册”（Sign Up）按钮。（注册完成后，您也可以通过“登录”（Log In）按钮登录平台。）
   <img src="../public/images/guide/sign-up.png" alt="Sign Up" width="200"/>
3. 根据页面引导逐步填写信息，完成注册。

   1. 输入邮箱地址并设置密码。建议设置强密码以保障账号安全。 <img src="../public/images/guide/sign-up-1.png" alt="Sign Up Step 1" width="400"/>
   2. 设置用户名和用户 ID。
      注意：用户名后期可以更改，但**用户 ID（User ID）是用户在平台上的唯一标识，注册后不可更改，请务必设置为您满意的 ID**。 <img src="../public/images/guide/sign-up-2.png" alt="Sign Up Step 2" width="400"/>
   3. 填写手机号，并发送验证码进行验证。
      注意：Airalogy 平台支持全球 100 余个国家和地区的手机号注册，请您在注册时选择正确的国家区号。**中国用户请选择“+86”**。 <img src="../public/images/guide/sign-up-3.png" alt="Sign Up Step 3" width="400"/>

      当您点击“发送验证码”（Send Code）按钮后，验证码会发送到您填写的手机号上，请注意查收短信（如未收到，请检查手机号是否填写正确并再次尝试发送；此外，短信可能会被运营商延迟发送；验证码也可能被误判为垃圾短信，请检查短信垃圾箱）。

      您将收到一条以 `【渊楠】` 开头的短信，内容类似于 `【渊楠】您的验证码是123456，请勿泄露于他人！`：
      <img src="../public/images/guide/sign-up-4.jpg" alt="Sign Up Step 4" width="200"/>

      请将短信中的 6 位数字验证码填写到注册页面的验证码输入框中： <img src="../public/images/guide/sign-up-5.png" alt="Sign Up Step 5" width="400"/>

      点击“完成注册”（Complete Sign Up）按钮，即可完成注册。
   4. 完成注册后，您可以使用两种方式登录 Airalogy 平台：手机号登录或邮箱登录。

## 登录 Airalogy 平台

如上文“注册 Airalogy 账号”章节所述，您可以使用手机号或邮箱登录 Airalogy 平台。

## 注册后开始使用 Airalogy 平台

Airalogy 平台采用三级结构进行管理：

实验室（Lab） > 项目（Project） > 协议（Protocol）

其中，实验室是最高级别的组织单位，一个实验室可以包含多个项目。

项目用于管理一项具体研究工作；每个项目下可以包含多个协议。每个协议对应一个具体的数据收集/使用方案。

为了帮助您快速上手 Airalogy 平台，当您注册一个有效的 Airalogy 账号后（对应一个新的用户 ID，例如 `alice`），系统会自动为您创建以下内容：

* 一个默认实验室：

  * 实验室 ID 与您的用户 ID 相同（即实验室 ID 为 `alice`）
  * 实验室名称为 `<您的用户ID>'s Lab`（例如 `alice's Lab`）
  * **实验室 ID 和用户 ID 一样，一经创建便不可更改**；实验室名称则可在实验室设置中随时更改
* 在该默认实验室下，一个默认项目：

  * 项目 ID 同样与您的用户 ID 相同（即项目 ID 为 `alice`）
  * 项目名称为 `<您的用户ID>'s Project`（例如 `alice's Project`）
  * 同样，**项目 ID 一经创建便不可更改**；项目名称可在项目设置中随时更改

项目分为两种类型：私有项目和公开项目（具体项目类型与权限控制详见[访问控制](./access-control.md)章节）。

* 私有项目：项目中的协议和记录仅对项目成员可见。
* 公开项目：项目中的协议和记录根据设置可对所有用户可见。

系统默认创建的项目为私有项目；在不额外添加其他成员的情况下，该项目仅对您本人可见。

在该默认项目下，系统还会自动创建一个示例性的“日记记录”协议：

* 协议 ID：`diary`
* 协议名称：`Daily`

![Diary](../public/images/guide/diary.png)

该协议展示了 Airalogy 平台的最基本用法：用户可以基于 [Airalogy 协议语法](https://airalogy.github.io/airalogy/zh/syntax/) 创建一个 Airalogy 协议。在一个 Airalogy 协议中，用户可以使用由 Airalogy 开发的类 Markdown 语法（Airalogy Markdown，简称 AIMD）来设计协议方案。

简单来说，在 AIMD 中，用户可以在 Markdown 的基础上，自定义地在任意位置插入各种数据字段，并指定其数据类型。Airalogy 平台会自动解析该 AIMD，并生成一个可供数据录入的表单界面；用户可通过该表单界面进行数据录入，录入的数据会被自动保存到 Airalogy 平台的数据库中。

例如，上述 Daily 协议的 AIMD 源码如下所示：

```aimd
# Diary

Recorder's Name: {{var|name: UserName}}

Recording Time: {{var|time: CurrentTime}}

Content:

{{var|content: AiralogyMarkdown}}
```

在该协议中，用户定义了 3 个数据字段，分别是 `name`、`time` 和 `content`，并分别指定其数据类型为 `UserName`（当前登录用户的用户名）、`CurrentTime`（当前时间）和 `AiralogyMarkdown`（Airalogy Markdown 文本）。当用户打开该协议进行数据录入时，Airalogy 平台会自动将上述 AIMD 解析为表单界面，用户可在界面中输入数据并保存：

![使用 Diary 协议记录日记](../public/images/guide/diary-recording.png)

您还可以注意到：在记录界面左侧，Airalogy 平台提供了全球首创的全学科通用大模型 Aira。Aira 可实时读取右侧协议内容与记录数据，用户可以随时就协议/记录内容进行提问；Aira 会基于协议与数据进行智能分析，并给出相关回答与建议，帮助用户更好地理解与使用协议/记录内容。
