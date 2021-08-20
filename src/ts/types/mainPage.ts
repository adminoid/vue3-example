export type TWClients = {
  today: number,
  yesterday: number
}

export type TWAccidents = {
  critical: number,
  warnings: number
}

export type TWDemo = {
  demo: number
}

export type TWidget = {
  id: number,
  name: string,
  component: string,
  data?: TWClients | TWAccidents | TWDemo
}

export type TWasher = {
  id: string,
  name: string,
  version: string,
  address: string,
  posts: {
    wet: number,
    dry: number
  },
  widgets: TWidget[]
}

export type TWashers = TWasher[]

export type TWindow = {
  el: HTMLElement,
  data: any
}

export type TUser = {
  name: string
}

export type TSummary = {
  total: number,
  clients: number,
  revenue: number,
  cash: number,
  widgets: TWidget[]
}

export type TMainPage = {
  user: TUser,
  summary: TSummary,
  washers: TWashers
}
