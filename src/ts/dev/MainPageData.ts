import { widgetsTemplate } from './widgetsTemplate'
import Helpers from './Helpers'
import { cloneDeep } from 'lodash'

export class MainPageData {
  _totalWashers: number
  h: any = Helpers
  washers: any[]
  widgetsCommon: any[] = []

  data: any

  constructor (totalWashers: number) {
    if (totalWashers < 1) {
      throw new Error('least one washer needed')
    }
    this._totalWashers = totalWashers
    this.washers = this.makeWashers()
    this.data = {
      user: {
        name: 'Вячеслав'
      },
      summary: {
        info: {
          company: 'ООО "Мойка"',
          owner: 'Иванов И.П.',
          total: 12,
          tariff: 'БОНУС ПЛЮС'
        },
        widgets: this.widgetsCommon
      },
      washers: this.washers
    }
  }

  makeWashers () {
    const washers = []
    let i = 0
    while (i < this._totalWashers) {
      const widgets = this.makeWidgets()
      washers.push({
        info: {
          id: `SW01022020${i}`,
          version: '4.6.9/4.7.3',
          posts: {
            dry: this.h.random(3, 6),
            wet: this.h.random(1, 4)
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
          ip: '192.168.0.1'
        },
        widgets
      })
      i++
    }
    return washers
  }

  makeWidgets (): any {
    const isFirstIteration = this.widgetsCommon.length === 0
    // generate data for each widget
    const collect = widgetsTemplate.map((item, index) => {
      const data = this.h[item.process.method](item.process.params)
      if (!isFirstIteration) this.increaseWidgetsCommon(index, data)
      // data property below overwrites data prop on initial
      return {
        ...item.initial,
        data
      }
    })
    if (isFirstIteration) {
      // if widgetCommon is empty - just assign collect to
      this.widgetsCommon = cloneDeep(collect)
    }
    return collect
  }

  increaseWidgetsCommon (index: number, data: any) {
    const current = this.widgetsCommon[index].data
    for (const key in current) {
      current[key] += data[key]
    }
  }
}
