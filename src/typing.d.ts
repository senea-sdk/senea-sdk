declare module '*.json'
interface Window {
  senea: {
    (...args: Task): void
    q?: Task[]
  }
  senea_e: {
    q: any[]
  }
}

/**
 * pid 项目id
 * uid userid
 * sid sessionid
 * token
 * spa 是否支持spa项目
 * includePaths 只监控指定的pathname，优先级高于excludePaths
 * excludePaths 不监控指定的pathname
 * reportUrl 上报的后台地址
 * openPerf 是否监控性能
 * openException 是否监控异常
 * openBehavior 是否监控用户行为
 * behaviorActions 监控用户的哪些行为，比如['click']
 * maxMsgLength 说明性字段的最大长度
 * resourceTimeout 异步资源加载超时上报阈值
 */
interface GlobalConfig {
  pid: string
  uid: string
  sid: string
  token: string
  spa: boolean
  includePaths: string[]
  excludePaths: string[]
  reportUrl: string
  openPerf: boolean
  openException: boolean
  openBehavior: boolean
  behaviorActions: string[]
  maxMsgLength: number
  resourceTimeout: number
}

/**
 * ua 浏览器的userAgent
 * os 操作系统
 * ip IP地址
 * sdk sdk版本
 * pid 项目id
 * pversion 项目迭代版本
 * uid userid
 * sid sessionid
 * token 是否过期
 */
interface Client {
  ua: string
  browser: string
  os: string
  ip: string
  sdk: string
  pid: string
  pversion: string
  uid: string
  sid: string
  token: string
}

/**
 * referrer 上个url
 * sr 页面分辨率
 * screenColorDepth 页面颜色深度
 * dpr 设备像素比
 * lang 页面语言
 * title 页面标题
 * de document编码
 * stay 页面停留时间(onbeforeunloadTime - onloadTime)
 */
interface PageRuntime {
  origin: string
  pathname: string
  hash: string
  search: string
  sr: string
  screenColorDepth: number
  dpr: number
  lang: string
  title: string
  de: string
  stay: number
}

interface CreateTrackerOption {
  tId: string
  pId: string
  token: string
  isHTTPS?: boolean
  origin?: string
  transport?: string
  clientId?: string
}
interface Tracker {
  setField(fieldName: string, fieldValue: any): void
  getField(fieldName: string): void
  send(hitType: string, param: any): void
}
interface TrackerConstructor {
  readonly prototype: Tracker
  new (arg: CreateTrackerOption): void
}

type CommandTask = [string, string, ...any[]]
type CallbackTask = [(tracker: Tracker) => void]

type Task = CommandTask | CallbackTask
