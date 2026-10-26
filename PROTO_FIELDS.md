# Proto 字段说明（与 Mongo / SDK 对齐）

**源文件**：`protos-file/protos/` → 同步至 `nest-server/src/protos`、`nest-grpc/server/protos`。

## SaveLogRequest（`log.proto`）

| 字段 | 用途 |
|------|------|
| `errorUid` / `errorUUid` | 错误关联 UUID（双字段兼容 SDK 与历史代码） |
| `eventCategory` / `eventAction` / `eventLabel` / `eventId` / `eventValue` | CUSTOM 自定义与网络测速指标 |
| `exeTime` | 性能耗时，metrics 上报 |
| `errorDetail` | 错误详情文本 |
| `extraInfo` / `otherInfo` | Struct，用户反馈扩展 |
| `totalSize` / `usedSize` / `limitSize` | 内存监控 |
| `Meta.conponentName` | React 组件名（历史拼写） |

长度与裁剪：`common/log_field_limits.proto` + 各端 `logPayload.util.ts`。

## QueryDTO

查询扩展：`type`、`path`、`format`、`errorId`、`id`、`errorUUid`、`keywordParmas`。

## Site

`SiteApiRule`：`apiUrlPattern`、`key`、`enums`、`allowEmpty`、`ignore`；`networkSpeedReportUrl` 网速告警群。

## 代码生成

```bash
cd protos-file && yarn proto-ts   # 需本机 protoc + ts 插件
```

未跑 codegen 时，已手工维护三份 `log.ts` / `site.ts` 与 `.proto` 一致。
