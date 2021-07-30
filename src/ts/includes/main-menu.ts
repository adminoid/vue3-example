export type TItems = {
  uri: string,
  title: string,
  children?: {
    uri: string,
    title: string
  }[]
}[]

export const items = [
  {
    uri: '/metrics',
    title: 'Метрики'
  },
  {
    uri: '/monitoring',
    title: 'Мониторинг'
  },
  {
    uri: '/settings',
    title: 'Настройки',
    children: [
      {
        uri: '/settings/program-cost',
        title: 'Стоимость программ'
      },
      {
        uri: '/settings/chem-dosage',
        title: 'Дозация химии'
      },
      {
        uri: '/settings/pressure',
        title: 'Настройка давления'
      },
      {
        uri: '/settings/posts',
        title: 'Посты и пылесосы'
      },
      {
        uri: '/settings/one-time',
        title: 'Одноразовые настройки'
      },
      {
        uri: '/settings/customers',
        title: 'Пользователи'
      },
      {
        uri: '/settings/cash',
        title: 'Онлайн касса'
      },
      {
        uri: '/settings/options',
        title: 'Настройки опций объекта'
      },
      {
        uri: '/settings/description',
        title: 'Описание объекта'
      }
    ]
  },
  {
    uri: '/statistic',
    title: 'Статистика',
    children: [
      {
        uri: '/statistic/common',
        title: 'Статистика общая'
      },
      {
        uri: '/statistic/hourly',
        title: 'График по часам'
      },
      {
        uri: '/statistic/daily',
        title: 'График по дням'
      },
      {
        uri: '/statistic/programs',
        title: 'Использование программ'
      },
      {
        uri: '/statistic/avg-check',
        title: 'Средний чек'
      }
    ]
  },
  {
    uri: '/finance',
    title: 'Финансы',
    children: [
      {
        uri: '/finance/cash',
        title: 'Деньги в кассе'
      },
      {
        uri: '/finance/collection-history',
        title: 'История инкассаций'
      }
    ]
  },
  {
    uri: '/bonus',
    title: 'ALLES Bonus'
  },
  {
    uri: '/accounting',
    title: 'Учет',
    children: [
      {
        uri: '/accounting/consumables',
        title: 'Учет расходников и коммуникаций'
      },
      {
        uri: '/accounting/properties',
        title: 'Хозяйственный учет'
      },
      {
        uri: '/accounting/tax-salary',
        title: 'Налоги и зарплата'
      },
      {
        uri: '/accounting/object-logs',
        title: 'Журнал объекта'
      },
      {
        uri: '/accounting/service',
        title: 'Сервисный учет объекта'
      }
    ]
  },
  {
    uri: '/economics',
    title: 'Экономика',
    children: [
      {
        uri: '/economics/profitability',
        title: 'Доходность'
      },
      {
        uri: '/economics/payback',
        title: 'Окупаемость мойки'
      }
    ]
  },
  {
    uri: '/analytics',
    title: 'Анализ мойки'
  }
] as TItems
