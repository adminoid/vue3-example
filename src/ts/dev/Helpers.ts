export default {
  makeThresholdData: function ({ from, to, threshold }: any) {
    const value = this.random({ from, to }).value
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

  random: function ({ from, to }: any) {
    return {
      value: this.randomProbability(
        { from, to, probability: 1 }
      )
    }
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
}
