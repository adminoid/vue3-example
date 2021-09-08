import { widgetsTemplate } from './templates'
import Helpers from './Helpers'

export class MainPageData {
  _totalWashers: number
  washers: any
  widgetsCommon: any[] = []

  // h: { [keyof Helpers]: typeof Helpers} = Helpers
  h: any = Helpers

  constructor (totalWashers: number) {
    this._totalWashers = totalWashers
    // this.washers = this.makeWashers()

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

  makeWidgets (isCommon: boolean = false) {
    const collect = widgetsTemplate.map(item => {
      const additional = this.h[item.process.method](item.process.params)

      console.log(item.process.method, additional)

      return item.initial
    })

    console.log(collect.length)
    console.log(this.widgetsCommon.length)

    return collect
  }

  // makeWashers () {
  //   const washers = []
  //   let i = 0
  //   while (i < this._totalWashers) {
  //     washers.push({
  //       info: {
  //         id: `SW01022020${i}`,
  //         version: '4.6.9/4.7.3',
  //         posts: {
  //           dry: this.h.random(3, 6),
  //           wet: this.h.random(1, 4)
  //         },
  //         address: 'Москва, ул. Радищева, д. 28',
  //         contact: {
  //           name: 'Сидоров А.А.',
  //           phone: '+7(926)340-21-12'
  //         },
  //         geo: {
  //           latitude: '123123.123123',
  //           longitude: '123123.123123'
  //         },
  //         ip: '192.168.0.1'
  //       },
  //       widgets: this.makeWidgets()
  //     })
  //     i++
  //   }
  //   return washers
  // }
}
