export default {

  makeThresholdData: function ({ from, to, threshold }: any) {
    const value = this.random({ from, to })
    return {
      value,
      changed: value - threshold
    }
  },

  makeWarningData: function ({ warning, danger }: any) {
    const warnings = this.randomProbability(warning)
    const dangers = this.randomProbability(danger)
    return {
      warnings, dangers
    }
  },

  // makeWarningData: function (from: number = 1, to: number = 3) {
  //   return {
  //     warning: this.randomProbability(from, to, 0.3),
  //     danger: this.randomProbability(from, to, 0.3)
  //   }
  // },

  random: function ({ from, to }: any) {
    return this.randomProbability(
      { from, to, probability: 1 }
    )
  },

  /**
   * probability of return random value, otherwise - returns 0
   */
  randomProbability: (
    { from, to, probability }:
      {from: number, to: number, probability: number}
  ) => {
    const rand = Math.random()
    return (rand <= probability)
      ? Math.round(from + rand * (to - from))
      : 0
  }

//   widgetsSummary: [
//     { name: '0' },
//     { name: '1' },
//     { name: '2' },
//     { name: '3' },
//     { name: '4' }
//   ],
//
//   getValue: function (index: number, name: string) {
//     return get(this.widgetsSummary[index], `data.${name}`) || 0
//   },
//
//   // increaseValue: function (
//   //   index: number, data: any, name: string
//   // ) {
//   //   const newValue = this.getValue(index, name) + get(data, name)
//   //   set(this.widgetsSummary[index], `data.${name}`, newValue)
//   // },
//
//
//   // incJustValue: function (index: number) {
//   //   const data = {
//   //     value: this.random(0, 7)
//   //   }
//   //   const obj = this.widgetsSummary[index]
//   //   set(
//   //     obj,
//   //     'data.value',
//   //     get(
//   //       obj,
//   //       'data.value',
//   //       0
//   //     ) +
//   //     data.value)
//   // },
//
//
//
}
