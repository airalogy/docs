# 批量上传 CSV 记录

除逐条填写记录外，Airalogy Web 支持将 CSV 文件批量导入为某个 Protocol 下的多条 Record。该功能适用于已经在表格中整理好数据，或希望从其他系统迁移历史记录的场景。

当前建议使用 CSV。若原始数据在 Excel 中，请先将工作表另存为 `.csv` 文件后再上传。CSV 是纯文本格式，更容易检查、复现和版本管理，也能避免 Excel 文件中的多工作表、隐藏单元格、公式、样式和本地化格式带来的歧义。

## 使用方式

1. 进入目标 Protocol 的 **Records** 页面。
2. 点击 **批量上传**。
3. 选择或拖入一个 `.csv` 文件。
4. 确认上传后，Airalogy 会按照当前 Protocol 的字段定义校验每一行；校验通过后，每一行会创建为一条新的 Record。

批量上传只用于创建新的 Record，不用于覆盖或更新已有 Record。

## CSV 列名

CSV 的每一行对应一条 Record。列名可以直接使用变量字段名，也可以使用带前缀的字段路径：

| 列名格式 | 说明 |
| --- | --- |
| `sample_id` | 等同于 `var.sample_id`，写入 Protocol 中名为 `sample_id` 的变量字段 |
| `var.sample_id` | 明确写入变量字段 |
| `quiz.answer_id` | 写入测验字段 `answer_id` |
| `step.prepare_sample.checked` | 写入步骤 `prepare_sample` 的完成状态，值为 `true` 或 `false` |
| `step.prepare_sample.annotation` | 写入步骤 `prepare_sample` 的备注 |
| `check.quality_check.checked` | 写入检查项 `quality_check` 的完成状态，值为 `true` 或 `false` |
| `check.quality_check.annotation` | 写入检查项 `quality_check` 的备注 |
| `metadata.source` | 写入 Record metadata 中的 `source` 字段 |
| `record_id` | 可选；指定 Record UUID。不填写时系统自动生成 |

例如，对于包含 `sample_id` 和 `amount` 两个变量字段的 Protocol，可以上传如下 CSV：

```csv
sample_id,amount
S1,12
S2,18
```

上传后会创建两条 Record。

## 校验规则

导入时会使用当前 Protocol 的字段类型进行校验与类型转换。如果某一行存在未知字段、类型错误或必填字段缺失，Airalogy 会提示具体行号和列名，且不会导入有错误的数据。

常见单元格值会按以下方式解析：

| 单元格值 | 解析结果 |
| --- | --- |
| `true` / `false` | 布尔值 |
| `null` | 空值 |
| `{...}` 或 `[...]` | JSON 对象或数组 |
| 其他文本 | 字符串，并继续交给对应字段类型校验 |
