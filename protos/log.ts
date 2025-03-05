// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.27.1
// source: log.proto

/* eslint-disable */
import { Observable } from "rxjs";
import { type ChartItem } from "./common/chart_item";
import { type Pagination } from "./common/pagination";
import { type QueryDTO } from "./common/query_dto";

export const protobufPackage = "logproto";

export interface NTiming {
  fp: number;
  tti: number;
  domReady: number;
  load: number;
  firseByte: number;
  dns: number;
  tcp: number;
  ssl: number;
  ttfb: number;
  trans: number;
  domParse: number;
  res: number;
}

export interface PaintInfo {
  duration: number;
  entryType: string;
  name: string;
  startTime: number;
}

export interface SaveLogRequest {
  /** 唯一索引 */
  id: string;
  /** 报告类型 */
  reportsType: string;
  /** 站点 ID */
  siteId: string;
  /** 模型引用类型 */
  onModel: string;
  /** 日志类别 */
  category: string;
  /** 用户 ID */
  userId: string;
  /** 标题 */
  title: string;
  /** 路径 */
  path: string;
  /** URL */
  href: string;
  /** 方法 */
  method: string;
  /** 请求 URL */
  url: string;
  /** 请求体参数 */
  body:
    | { [key: string]: any }
    | undefined;
  /** 请求参数 */
  params:
    | { [key: string]: any }
    | undefined;
  /** 响应 */
  response:
    | Response
    | undefined;
  /** 错误信息 */
  value: string;
  /** IP 地址 */
  ip: string;
  /** 创建时间 */
  createAt: string;
  /** 更新时间 */
  updateAt: string;
  /** 追踪 ID */
  traceId: string;
  /**  */
  monitorId: string;
  /** 标签id */
  nodeId: string;
  /**  */
  fmpTime: number;
  /**  */
  cacheRate: string;
  /** 资源信息 */
  resourcePrefs: RequestInfo[];
  /** 性能计时信息 */
  ntTiming:
    | NTiming
    | undefined;
  /** 结束时间 */
  endTime: string;
  /** 交互时间 */
  interactionTime: string;
  /** 加载时间 */
  loadedTime: string;
  /** 正在加载时间 */
  loadingTime: string;
  /** 查询 URL */
  queryUrl: string;
  /** 请求时间 */
  requestTime: string;
  /** 响应时间 */
  responseTime: string;
  /** 状态 */
  status: number;
  /** 状态文本 */
  statusText: string;
  /** 错误类型 */
  errorType: string;
  /** 内容 */
  content: string;
  /** 元数据 */
  meta: Meta | undefined;
  Id: string;
  lang: string;
  /** 可空字段 */
  ua: string;
  /** 可空字段 */
  winScreen: string;
  /** 可空字段 */
  docScreen: string;
  /** 可空字段 */
  referrer: string;
  /** 可空字段 */
  prevHref: string;
  /** 可空字段 */
  jumpType: string;
  type: number;
  /** 可空字段 */
  effectiveType: string;
  /** 可空字段 */
  mode: string;
  /** 可空字段 */
  ipLocation: string;
  tagText: string;
  /** 可空字段 */
  tagName: string;
  /** 可空字段 */
  nodeDom: string;
  /** 数组 */
  classList: string[];
  /** 可空字段 */
  logName: string;
  /** 可空字段 */
  logData: string;
  /** 可空字段 */
  logPos: string;
  /** 可空字段 */
  logId: string;
  /** 可空字段 */
  errorDetail: string;
  stackTrace: { [key: string]: any }[];
  breadcrumbs: BehaviorItem[];
  errorUid: string;
  pageId: string;
  speed: string;
  costTime: string;
  /** FP timing object */
  fpTime:
    | PaintInfo
    | undefined;
  /** FCP timing value */
  fcpTime: PaintInfo | undefined;
}

export interface BehaviorItem {
  type: string;
  monitorId: string;
}

export interface Meta {
  body: { [key: string]: any } | undefined;
  endTime: string;
  interactionTime: string;
  loadedTime: string;
  loadingTime: string;
  method: string;
  params: { [key: string]: any } | undefined;
  queryUrl: string;
  requestTime: string;
  response: Response | undefined;
  responseTime: string;
  status: number;
  statusText: string;
  url: string;
}

export interface RequestInfo {
  /** 内容下载 */
  contentDownload: number;
  /** DNS 查找 */
  dnsLookup: number;
  /** 初始连接 */
  initialConnect: number;
  /** 发起者类型 */
  initiatorType: string;
  /** 是否缓存 */
  isCache: boolean;
  /** 请求 URL */
  name: string;
  /** 请求时长 */
  requestDuration: number;
  /** 响应结束时间 */
  responseEnd: number;
  /** 是否使用 SSL */
  ssl: boolean;
  /** 开始时间 */
  startTime: number;
  /** TTFB（首次字节时间） */
  timeToFirstByte: number;
  /** 传输大小 */
  transferSize: number;
}

/** 响应消息定义 */
export interface Response {
  status: number;
  message: string;
  result: string;
}

export interface LogResponse {
  status: number;
  message: string;
  result: { [key: string]: any } | undefined;
}

export interface LogList {
  /** 文档列表 */
  data: SaveLogRequest[];
  /** 分页信息 */
  pagination: Pagination | undefined;
}

export interface ChartList {
  /** 文档列表 */
  data: ChartItem[];
}

export interface LogService {
  /** 保存走kafka, 不过两种都支持==== */
  saveLog(request: SaveLogRequest): Observable<LogResponse>;
  getLogs(request: QueryDTO): Observable<LogList>;
  getLogsByCursor(request: QueryDTO): Observable<LogList>;
  getLogsChart(request: QueryDTO): Observable<ChartList>;
}
