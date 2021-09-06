import { TMainPage, TWidget } from 't@/types/mainPage'

export class MainPageData {
  readonly #totalWashers: number
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
    // {
    //   name: 'Сообщения',
    //   icon: 'bi-droplet-half'
    // }
  ]

  constructor (totalWashers: number) {
    this.#totalWashers = totalWashers
    const widgets = this.makeWidgets()
    const washers = this.makeWashers()
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
        widgets
      },
      washers
    }
  }

  makeWidgets () {
    return this.#widgetsTemplate.map(
      (widget, index) : TWidget => {
        let type, data
        switch (index) {
          case 0:
            type = 'clients'
            data = this.makeJumpsData(0, 20, 10)
            break
          case 1:
            type = 'cash'
            data = this.makeJumpsData(0, 50000, 25000)
            break
          case 2:
            type = 'proceeds'
            data = this.makeJumpsData(0, 10000, 5000)
            break
          case 3:
            type = 'accidents'
            data = this.makeDangerWarning()
            break
          case 4:
            type = 'chemicals'
            data = this.makeDangerWarning(0, 1)
            break
          case 5:
            type = 'water'
            data = this.random(0, 1000)
            break
          case 6:
            type = 'messages'
            data = this.random(0, 7)
            break
          default:
            type = ''
        }
        return {
          id: index,
          ...widget,
          type,
          data
        }
      }
    )
  }

  makeJumpsData (from: number, to: number, threshold: number) {
    const value = this.random(from, to)
    const changed = value - threshold

    return {
      value, changed, threshold
    }
  }

  makeDangerWarning (from: number = 1, to: number = 3) {
    return {
      warning: this.randomProbability(from, to, 0.3),
      danger: this.randomProbability(from, to, 0.3)
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

  makeWashers () {
    const washers = []
    const widgets = this.makeWidgets()
    let i = 0
    while (i < this.#totalWashers) {
      washers.push({
        info: {
          id: `SW01022020${i}`,
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
          ip: '192.168.0.1'
        },
        widgets
      })
      i++
    }
    return washers
  }
}
