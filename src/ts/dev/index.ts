import { TMainPage, TWidget } from 't@/types/mainPage'

export class MainPageData {
  _totalWashers: number
  data: TMainPage

  #widgetsTemplate = [
    {
      name: 'Клиенты',
      icon: 'bi-person-fill'
    },
    {
      name: 'Касса',
      icon: 'bi-cash-coin'
    },
    {
      name: 'Выручка',
      icon: 'bi-wallet2'
    },
    {
      name: 'Аварии',
      icon: 'bi-exclamation-triangle-fill'
    },
    {
      name: 'Химия',
      icon: 'bi-moisture'
    },
    {
      name: 'Вода',
      icon: 'bi-bar-chart-line-fill'
    },
    {
      name: 'Связь',
      icon: 'bi-droplet-half'
    }
  ]

  constructor (totalWashers: number) {
    this._totalWashers = totalWashers
    const widgets = this.makeWidgets()
    const washers = this.makeWashers()
    this.data = {
      user: {
        name: 'Вячеслав'
      },
      summary: {
        company: 'ООО "Мойка"',
        owner: 'Иванов И.П.',
        total: 12,
        tariff: 'БОНУС ПЛЮС',
        widgets
      },
      washers
    }
  }

  makeWidgets () {
    return this.#widgetsTemplate.map(
      (widget, index) : TWidget => {
        return {
          id: index,
          ...widget
        }
      }
    )
  }

  makeWashers () {
    const washers = []
    const widgets = this.makeWidgets()
    let i = 0
    while (i < this._totalWashers) {
      washers.push({
        id: 'SW01022020',
        version: '4.6.9/4.7.3',
        posts: {
          dry: 6,
          wet: 3
        },
        address: 'Москва, ул. Радищева, д. 28',
        contact: {
          name: 'Сидоров А.А.',
          phone: '+7(926)340-21-12'
        },
        geo: {
          latitude: '123123.123123',
          longitude: '123123.123123'
        },
        ip: '192.168.0.1',
        widgets
      })
      i++
    }
    return washers
  }
}
