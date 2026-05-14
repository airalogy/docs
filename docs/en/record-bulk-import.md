# Bulk Upload CSV Records

In addition to filling records one by one, Airalogy Web can import a CSV file into multiple Records under a Protocol. This is useful when data has already been organized in a spreadsheet, or when historical records need to be migrated from another system.

CSV is the recommended format. If your source data is in Excel, first save the worksheet as a `.csv` file and upload that CSV. CSV is plain text, easier to inspect, reproduce, and version, and avoids ambiguity from Excel-specific features such as multiple sheets, hidden cells, formulas, styles, and localized formatting.

## How To Use

1. Open the **Records** page of the target Protocol.
2. Click **Bulk upload**.
3. Select or drop a `.csv` file.
4. After confirmation, Airalogy validates each row against the current Protocol fields. Each valid row is created as a new Record.

Bulk upload creates new Records only. It does not overwrite or update existing Records.

## CSV Columns

Each CSV row maps to one Record. Column names can use variable field names directly, or explicit prefixed paths:

| Column format | Meaning |
| --- | --- |
| `sample_id` | Equivalent to `var.sample_id`; writes to the Protocol variable field named `sample_id` |
| `var.sample_id` | Explicitly writes to a variable field |
| `quiz.answer_id` | Writes to the quiz field `answer_id` |
| `step.prepare_sample.checked` | Writes the checked state of step `prepare_sample`; value should be `true` or `false` |
| `step.prepare_sample.annotation` | Writes the annotation for step `prepare_sample` |
| `check.quality_check.checked` | Writes the checked state of check `quality_check`; value should be `true` or `false` |
| `check.quality_check.annotation` | Writes the annotation for check `quality_check` |
| `metadata.source` | Writes the `source` field in Record metadata |
| `record_id` | Optional; specifies the Record UUID. If omitted, Airalogy generates one automatically |

For example, for a Protocol with two variable fields, `sample_id` and `amount`, you can upload:

```csv
sample_id,amount
S1,12
S2,18
```

This creates two Records.

## Validation

During import, Airalogy validates and converts values using the current Protocol field types. If any row contains an unknown field, type error, or missing required field, Airalogy reports the row and column, and records with errors are not imported.

Common cell values are parsed as follows:

| Cell value | Parsed as |
| --- | --- |
| `true` / `false` | Boolean |
| `null` | Null value |
| `{...}` or `[...]` | JSON object or array |
| Other text | String, then validated by the target field type |
