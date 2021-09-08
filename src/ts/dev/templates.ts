export const widgetsTemplate = [
  {
    initial: {
      name: 'Клиенты',
      type: 'clients',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeJumpsData',
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
      type: 'cash',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeJumpsData',
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
      type: 'proceeds',
      data: {
        value: 0,
        changed: 0
      }
    },
    process: {
      method: 'makeJumpsData',
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
      type: 'accidents'
    },
    process: {
      method: 'makeDangerWarning',
      increase: ['warning', 'danger']
    },
    data: {
      warning: 0,
      danger: 0
    }
  },
  {
    initial: {
      name: 'Химия',
      type: 'chemicals'
    },
    process: {
      method: 'makeDangerWarning',
      increase: ['warning', 'danger']
    },
    data: {
      warning: 0,
      danger: 0
    }
  },
  {
    initial: {
      name: 'Вода',
      type: 'water',
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
      type: 'messages',
      data: {
        value: 0
      }
    }
  }
]
