export type TWClients = {
  today: number,
  yesterday: number
}

export type TWAccidents = {
  critical: number,
  warnings: number
}

export type TWidget = {
  id: number,
  name: string,
  component: string,
  data?: TWClients | TWAccidents
}

export type TWasher = {
  id: string,
  name: string,
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
  cash: number
}

export type TMainPage = {
  user: TUser,
  summary: TSummary,
  washers: TWashers
}
