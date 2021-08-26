export type TWidget = {
  id: number,
  name: string,
  icon: string,
  data?: any
}

export type TWasher = {
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
  ip: string,
  widgets: TWidget[]
}

export type TWindow = {
  el: HTMLElement,
  data: any
}

export type TUser = {
  name: string
}

export type TSummary = {
  company: string,
  owner: string,
  total: number,
  tariff: string,
  widgets: TWidget[]
}

export type TMainPage = {
  user: TUser,
  summary: TSummary,
  washers: TWasher[]
}
