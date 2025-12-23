# 项目级别的访问控制

## 项目类型

在 Airalogy 平台中，项目分为两种类型：**私有项目**和**公开项目**。其中私有项目又进一步细分为**实验室级别私有项目**和**项目级别私有项目**（但需要注意，这2种私有项目的本质都是私有项目，并按私有项目的管理方式进行管理，其区别在于对实验室成员所默认分配的权限，见下文）。实验室级别私有项目和项目级别私有项目的核心区别在于，实验室级别私有项目的 Protocol 和 Record 对该实验室的所有成员可见，而项目级别私有项目的 Protocol 和 Record 仅对该项目的成员可见。

## 基于角色的权限控制

在 Airalogy 平台中，可以邀请用户加入项目，并为其分配不同的角色。通过设置不同的角色，可以实现对项目中成员的权限控制。

### 私有项目中成员的角色

| 权限／操作 | Owner | Manager | Collaborator | Recorder |
| - | :-: | :-: | :-: | :-: |
| 1. 设定用户为 Manager | ✅ | ❌ | ❌ | ❌ |
| 2. 设定用户为除 Manager 外的其他角色 | ✅ | ✅ | ❌ | ❌ |
| 3. 创建新 Protocol | ✅ | ✅ | ✅ | ✅ <sup>1</sup> |
| 4. 是否能够管理自己新建的 Protocol（创建后系统会自动将其设为该 Protocol 的 Owner，因此在不变更 Owner 的前提下，默认拥有：1. 删除该 Protocol 的权限；2. 查看该 Protocol 下所有 Records 的权限；3. 删除该 Protocol 中任意 Record 的权限） | ✅ | ✅ | ✅ | ✅ |
| 5. 管理他人创建的 Protocol（如删除他人创建的 Protocol） | ✅ | ✅ | ❌ | ❌ |
| 6. 预览他人创建的 Protocol（预览界面） | ✅ | ✅ | ✅ | ✅ |
| 7. 使用他人创建的 Protocol 进行数据记录（能够打开数据记录界面，包括能够使用 Assigner） | ✅ | ✅ | ✅ | ✅ |
| 8. 将在他人创建的 Protocol 中记录的数据提交并储存为一条 Record | ✅ | ✅ | ✅ | ✅ |
| 9. 查看自己记录的所有 Records （包括自己记录于他人创建的 Protocol 中的 Records） | ✅ | ✅ | ✅ | ✅ |
| 10. 查看他人创建的 Protocol 中他人记录的 Records | ✅ | ✅ | ✅ | ❌ <sup>2</sup> |
| 11. 删除自己记录的 Records（无论是在自己创建的 Protocol 中的还是他人创建的 Protocol 中的） | ✅ | ✅ | ❌ <sup>3</sup> | ❌ <sup>3</sup> |
| 12. 删除他人记录的 Records | ✅ | ✅ | ❌ | ❌ |

- <sup>1</sup> 在私有项目中，Recorder是允许创建新的Protocol的，这是为了鼓励Recorder参与到研究，并能将自己的创造力体现在新的Protocol中。
- <sup>2</sup> Recorder 角色的功能可以这样类比理解：在一个私有项目中，Protocol 相当于一份私有问卷。Protocol 的创建者希望将这份问卷分发给项目的所有成员填写，但又不希望 Recorder 查看他人填写的结果。因此，Recorder 只能查看自己填写的内容，而无法看到其他成员的填写结果。这就好比一份用于收集个人信息的问卷，问卷的创建者当然不会希望填写者之间互相看到彼此的答案，否则就会造成个人信息泄露。
- <sup>3</sup> 在私有项目中，Collaborator和Recorder不能删除自己记录的Records，这是为了保护数据的完整性；并鼓励他们严谨对待自己提交的数据。如果他们一定要删除自己的记录，可以联系项目的Owner或Manager进行处理。

核心区别：

- Owner vs Manager: Owner 能够设定用户为 Manager，而 Manager 不能。
- Collaborator vs Recorder: Collaborator 能够查看他人创建的 Protocol 中他人记录的 Records，而 Recorder 不能。

#### 实验室级别私有项目

本质上，实验室级别私有项目和项目级别私有项目的区别在于，实验室级别私有项目的 Protocol 和 Record 对该实验室的所有成员可见；因此其本质仍然是一个私有项目，只是相当于默认授予了实验室所有成员一个不可撤销的 Collaborator 角色。

而对于项目级别私有项目，实验室成员不会被默认授予任何角色，只有当实验室成员被 Owner / Manager 邀请加入该项目时，才会被授予相应的角色。

### 公开项目中成员的角色

公开项目和私有项目的核心区别在于Protocol和Record的可见性，对于公开项目，其Protocol和Record对所有用户都是可见的。

当私有项目转换为公开项目时，用户角色会保留。

| 权限／操作 | Owner | Manager | Collaborator | Recorder <sup>4</sup> | Explorer <sup>4</sup> | Viewer <sup>4</sup> |
| - | :-: | :-: | :-: | :-: | :-: | :-: |
| 1. 设定用户为 Manager | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 2. 设定用户为除 Manager 外的其他角色 | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| 3. 创建新 Protocol | ✅ | ✅ | ✅ | ❌ <sup>1</sup> | ❌ | ❌ |
| 4. 是否能够管理自己新建的 Protocol（创建后系统会自动将其设为该 Protocol 的 Owner，因此在不变更 Owner 的前提下，默认拥有：1. 删除该 Protocol 的权限；2. 查看该 Protocol 下所有 Records 的权限；3. 删除该 Protocol 中任意 Record 的权限） | ✅ | ✅ | ✅ | - <sup>2</sup> | - <sup>2</sup> | - <sup>2</sup> |
| 5. 管理他人创建的 Protocol（如删除他人创建的 Protocol） | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| 6. 预览他人创建的 Protocol（预览界面） | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 7. 使用他人创建的 Protocol 进行数据记录（能够打开数据记录界面，包括能够使用 Assigner） | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| 8. 将在他人创建的 Protocol 中记录的数据提交并储存为一条 Record | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| 9. 查看自己记录的所有 Records （包括自己记录于他人创建的 Protocol 中的 Records） | ✅ | ✅ | ✅ | ✅ | - <sup>3</sup> | - <sup>3</sup> |
| 10. 查看他人创建的 Protocol 中他人记录的 Records | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11. 删除自己记录的 Records（无论是在自己创建的 Protocol 中的还是他人创建的 Protocol 中的） | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| 12. 删除他人记录的 Records | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

- <sup>1</sup> 出于安全性考虑，公开项目中不允许Recorder创建新的Protocol。
- <sup>2</sup> 不能创建新的Protocol，因此不存在对自己新建的Protocol的管理。
- <sup>3</sup> 不能提交新的Record，因此不存在查看自己记录的所有Records的权限。
- <sup>4</sup> 对于 Recorder / Explorer / Viewer 这3种角色，实际上每种角色又能够根据“能不能看别人记录”这个维度，进一步细分为两种亚型：
  - **X**：能看所有人的记录
  - **X (Self-only)**：（也即在角色名后加`(Self-only)`）只能看自己记录
  - 为此我们可以将公开项目中的角色进一步细分为6种，其角色矩阵如下：

    | 角色 | 能否运行 Assigner | 能否提交记录 | 能否看他人记录 | 说明 |
    | - | - | - | - | - |
    | **Recorder** | ✅ | ✅ | ✅ | 完整数据贡献者。代表性场景：一个允许公众参与的科学项目，Protocol的创建者希望全世界的用户能够实时提交来自全球各地用户产生的新记录，并且也希望所有公众能够立马看到所有用户提交的所有记录。 |
    | **Recorder (Self-only)** | ✅ | ✅ | ❌ | 只能提交 & 查看自己。代表性场景：比如一个公开的心理学实验项目，研究者希望收集尽可能多的参与者数据，但又不希望参与者之间互相看到彼此的记录，从而保护参与者的隐私。 |
    | **Explorer**       | ✅ | ❌ | ✅ | 可运行、可体验，但不写入永久数据；能参考他人记录。代表性场景：一个科学研究公开了一种实验Protocol，原始研究团队希望大家能够体验这种Protocol，并参考其他人的记录，但不希望大家提交数据到项目中，从而影响数据的纯洁性。 |
    | **Explorer (Self-only)** | ✅ | ❌ | ❌ | 可运行、可体验，但只能看到自己临时数据。代表性场景：项目的Protocol中已有一些记录，该Protocol的创建者希望大众能够体验下其功能的同时，又看不到自己/别人已经记录了的记录。该角色不常用。 |
    | **Viewer** | ❌ | ❌ | ✅ | 纯静态阅读者，既能够看公开的Protocol、也能够看这些Protocol相关的Records。代表性场景：通过公开Protocol分享的数据集，也即某研究者可能公开了某个Protocol和该Protocol对应的Records以供他人参考，但是该研究者并不希望用户能够运行该Protocol。 |
    | **Viewer (Self-only)**   | ❌ | ❌ | ❌ | 纯静态阅读者，但只能看公开的Protocol，不能看Records。代表性场景：某研究者只希望公开一个Protocol使得公众能够访问，但不希望公众看到该Protocol对应的Records。 |

说明：

- 对于任意一个公开项目，Public用户的默认角色为 Explorer。该设计是由于，Explorer可以让用户充分的体验一个Protocol的功能（包括记录功能），但不允许用户提交数据，这样可以避免用户在没有经过充分了解的情况下提交数据。
- 如果一个项目是希望通过公开渠道收集数据，那么我们建议可以将该项目的默认Public角色设置为Recorder或Recorder (Self-only)，这样可以允许将他们的记录提交到项目中，形成永久化的记录。
- Viewer角色的设计是为了满足某些Project只希望公众用户查看静态Protocol和Record的需求。即这种查看不会涉及到Protocol文件中的Python文件的启动（如`model.py`, `assigner.py`）。

### Project / Protocol角色权限

在Airalogy平台中，最小的权限控制层级是Protocol，本质上可以通过独立控制每个Protocol的权限来实现对一个项目中不同Protocol的权限的独立精细控制。而之所以我们提供了Project级别的角色，是为了方便用户在一个项目中对所有Protocol进行统一的权限控制（在实践中，大多数情况下，一个项目中的Protocol会有相似的权限需求，因此在Project级别进行统一的权限控制可以大大简化用户的操作）。Project级别的角色权限会自动授予给该项目下的所有Protocol。而如果用户进一步在Protocol级别进行权限设置，则我们遵循更小级别优先原则，即Protocol级别的权限会覆盖经过Project级别授予的权限。
