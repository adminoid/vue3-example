export const widgetsTemplate = [
  {
    initial: {
      name: 'Клиенты',
      type: 'threshold',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeThresholdData',
      params: {
        from: 0,
        to: 20,
        threshold: 10
      },
      increase: ['value']
    }
  },
  {
    initial: {
      name: 'Касса',
      type: 'threshold',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeThresholdData',
      params: {
        from: 0,
        to: 50000,
        threshold: 25000
      },
      increase: ['value']
    }
  },
  {
    initial: {
      name: 'Выручка',
      type: 'threshold',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeThresholdData',
      params: {
        from: 0,
        to: 10000,
        threshold: 5000
      },
      increase: ['value']
    }
  },
  {
    initial: {
      name: 'Аварии',
      type: 'warning',
      data: {
        warning: 0,
        danger: 0
      }
    },
    process: {
      method: 'makeWarningData',
      params: {
        warning: {
          probability: 0.5,
          from: 1,
          to: 3
        },
        danger: {
          probability: 0.5,
          from: 1,
          to: 3
        }
      },
      increase: ['warning', 'danger']
    }
  },
  {
    initial: {
      name: 'Химия',
      type: 'warning',
      data: {
        warning: 0,
        danger: 0
      }
    },
    process: {
      method: 'makeWarningData',
      params: {
        warning: {
          probability: 0.5,
          from: 1,
          to: 3
        },
        danger: {
          probability: 0.5,
          from: 1,
          to: 3
        }
      },
      increase: ['warning', 'danger']
    }
  },
  {
    initial: {
      name: 'Вода',
      type: 'value',
      data: {
        value: 0
      }
    },
    process: {
      method: 'random',
      params: {
        from: 0,
        to: 1000
      },
      increase: ['value']
    }
  },
  {
    initial: {
      name: 'Связь',
      type: 'value',
      data: {
        value: 0
      }
    },
    process: {
      method: 'random',
      params: {
        from: 0,
        to: 7
      },
      increase: ['value']
    }
  }
]
