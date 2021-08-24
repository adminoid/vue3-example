export type TWidget = {
  id: number,
  name: string,
  component: string,
  icon: string,
  data?: any
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
