export type TWidget = {
  id: number,
  name: string,
  icon: string,
  data?: any
}

export type TInfoWasher = {
  id: string,
  version: string,
  posts: {
    wet: number,
    dry: number
  },
  address: string,
  contact: {
    name: string,
    phone: string
  },
  geo: {
    latitude: string,
    longitude: string
  },
  ip: string
}

export type TWasher = {
  info: TInfoWasher,
  widgets: TWidget[]
}

export type TWindow = {
  el: HTMLElement,
  data: any
}

export type TUser = {
  name: string
}

export type TInfoSummary = {
  company: string,
  owner: string,
  total: number,
  tariff: string
}

export type TSummary = {
  info: TInfoSummary,
  widgets: TWidget[]
}

export type TMainPage = {
  user: TUser,
  summary: TSummary,
  washers: TWasher[]
}
