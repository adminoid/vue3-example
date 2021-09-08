import { TWasher, TWidget } from 't@/types/mainPage'
import { widgetsTemplate } from './templates'
import { Helpers } from './Helpers'
import _ from 'lodash'

export class MainPageData {
  washers: any

  // data: TMainPage

  h: Helpers

  constructor (totalWashers: number) {
    this.h = new Helpers(totalWashers)
    this.washers = this.makeWashers()

    // const widgetsCommon = this.makeWidgets(true)
    // console.log(widgetsCommon)
    // this.data = {
    //   user: {
    //     name: 'Вячеслав'
    //   },
    //   summary: {
    //     info: {
    //       company: 'ООО "Мойка"',
    //       owner: 'Иванов И.П.',
    //       total: 12,
    //       tariff: 'БОНУС ПЛЮС'
    //     },
    //     widgetsCommon
    //   },
    //   this.washers
    // }
  }

  makeWashers () {
    const washers = []
    let i = 0
    while (i < this.h.totalWashers) {
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
        widgets: this.makeWidgets()
      })
      i++
    }
    return washers
  }

  makeWidgets (isCommon: boolean = false) {
    return widgetsTemplate.map(item => {
      const data = item.initial
    })
  }
}
