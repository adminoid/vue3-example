import { get, set } from 'lodash'
import { thresholds, widgetsTemplate } from 't@/dev/templates'

export class Helpers {
  readonly totalWashers: number

  widgetsSummary: any = widgetsTemplate

  constructor (totalWashers: number) {
    this.totalWashers = totalWashers
  }

  getValue (index: number, name: string) {
    return get(this.widgetsSummary[index], `data.${name}`) || 0
  }

  increaseValue (index: number, data: any, name: string) {
    const newValue = this.getValue(index, name) + get(data, name)
    set(this.widgetsSummary[index], `data.${name}`, newValue)
  }

  mkj (
    { from, to, index }: any,
    isCommon: boolean
  ): any {
    let data
    if (!isCommon) {
      data = this.makeJumpsData(this.random(from, to), thresholds[index])
      console.log(data)
      return this.increaseValue(index, data, 'value')
    } else {
      console.info(this.widgetsSummary[index])
      data = this.makeJumpsData(
        this.widgetsSummary[index].value,
        thresholds[index] * this.totalWashers
      )
      console.log(data)
      return data
    }
  }

  incJustValue (index: number) {
    const data = {
      value: this.random(0, 7)
    }
    const obj = this.widgetsSummary[index]
    set(
      obj,
      'data.value',
      get(
        obj,
        'data.value',
        0
      ) +
      data.value)
  }

  makeJumpsData (value: number, threshold: number) {
    return {
      value,
      changed: value - threshold
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
