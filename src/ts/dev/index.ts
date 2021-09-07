import { TWasher, TWidget } from 't@/types/mainPage'
import { widgetsTemplate, thresholds } from './templates'
import { set, get } from 'lodash'

export class MainPageData {
  readonly #totalWashers: number

  washers: TWasher[]

  widgetsSummary: any = widgetsTemplate

  // data: TMainPage

  constructor (totalWashers: number) {
    this.#totalWashers = totalWashers
    this.washers = this.makeWashers()

    // const widgetsCommon = this.makeWidgetsCommon()
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
    while (i < this.#totalWashers) {
      washers.push({
        info: {
          id: `SW01022020${i}`,
          version: '4.6.9/4.7.3',
          posts: {
            dry: this.random(3, 6),
            wet: this.random(1, 4)
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

  makeWidgets () {
    const getValue = (index: number, name: string) => {
      // const obj = this.widgetsSummary[index]
      const ret = get(this.widgetsSummary[index], `data.${name}`)
      return ret || 0
    }
    const increaseValue = (index: number, data: any, name: string) => {
      const newValue = getValue(index, name) + get(data, name)
      set(this.widgetsSummary[index], `data.${name}`, newValue)
    }
    return widgetsTemplate.map(
      (widget, index) : TWidget => {
        let data
        switch (index) {
          case 0:
            data = this.makeJumpsData(0, 20, thresholds[index])
            // widgetsSummary[index].data.value += data.value
            increaseValue(index, data, 'value')
            break
          case 1:
            data = this.makeJumpsData(0, 50000, thresholds[index])
            increaseValue(index, data, 'value')
            break
          case 2:
            data = this.makeJumpsData(0, 10000, thresholds[index])
            increaseValue(index, data, 'value')
            break
          case 3:
            data = this.makeDangerWarning()
            increaseValue(index, data, 'warning')
            increaseValue(index, data, 'danger')
            break
          case 4:
            data = this.makeDangerWarning()
            increaseValue(index, data, 'warning')
            increaseValue(index, data, 'danger')
            break
          case 5:
            data = {
              value: this.random(0, 7)
            }
            set(
              this.widgetsSummary[index],
              'data.value',
              get(
                this.widgetsSummary[index],
                'data.value',
                0
              ) +
              data.value)
            break
          case 6:
            data = {
              value: this.random(0, 7)
            }
            set(
              this.widgetsSummary[index],
              'data.value',
              get(
                this.widgetsSummary[index],
                'data.value',
                0
              ) +
              data.value)
            break
        }
        return {
          id: index,
          ...widget,
          data
        }
      }
    )
  }

  // makeWidgetsCommon () {
  //   return this.#widgetsTemplate.map(
  //     (widget, index) : TWidget => {
  //       let type, data
  //       switch (index) {
  //         case 0:
  //           type = 'clients'
  //           data = this.makeJumpsData(0, 20, 10)
  //           break
  //         case 1:
  //           type = 'cash'
  //           data = this.makeJumpsData(0, 50000, 25000)
  //           break
  //         case 2:
  //           type = 'proceeds'
  //           data = this.makeJumpsData(0, 10000, 5000)
  //           break
  //         case 3:
  //           type = 'accidents'
  //           data = this.makeDangerWarning()
  //           break
  //         case 4:
  //           type = 'chemicals'
  //           data = this.makeDangerWarning(0, 1)
  //           break
  //         case 5:
  //           type = 'water'
  //           data = this.random(0, 1000)
  //           break
  //         case 6:
  //           type = 'messages'
  //           data = this.random(0, 7)
  //           break
  //         default:
  //           type = ''
  //       }
  //       return {
  //         id: index,
  //         ...widget,
  //         type,
  //         data
  //       }
  //     }
  //   )
  // }

  makeJumpsData (from: number, to: number, threshold: number) {
    const value = this.random(from, to)
    const changed = value - threshold

    return {
      value, changed, threshold
    }
  }

  makeDangerWarning (from: number = 1, to: number = 3) {
    return {
      warning: this.randomProbability(from, to, 0.7),
      danger: this.randomProbability(from, to, 0.7)
    }
  }

  random (from: number, to: number) {
    return this.randomProbability(from, to, 1)
  }

  /**
   * probability of return random value, otherwise - returns 0
   */
  randomProbability (from: number, to: number, probability: number) {
    const rand = Math.random()
    return (rand <= probability)
      ? Math.round(from + rand * (to - from))
      : 0
  }
}
