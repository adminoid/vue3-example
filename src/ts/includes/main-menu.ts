export type TItems = {
  id: number,
  uri: string,
  title: string,
  children?: {
    id: number,
    uri: string,
    title: string
  }[]
}[]

export const items = [
  {
    id: 1,
    uri: '/',
    title: 'Главная'
  },
  {
    id: 2,
    uri: '/metrics',
    title: 'Метрики'
  },
  {
    id: 3,
    uri: '/monitoring',
    title: 'Мониторинг'
  },
  {
    id: 4,
    uri: '/settings',
    title: 'Настройки',
    children: [
      {
        id: 5,
        uri: '/settings/program-cost',
        title: 'Стоимость программ'
      },
      {
        id: 6,
        uri: '/settings/chem-dosage',
        title: 'Дозация химии'
      },
      {
        id: 7,
        uri: '/settings/pressure',
        title: 'Настройка давления'
      },
      {
        id: 8,
        uri: '/settings/posts',
        title: 'Посты и пылесосы'
      },
      {
        id: 9,
        uri: '/settings/one-time',
        title: 'Одноразовые настройки'
      },
      {
        id: 10,
        uri: '/settings/customers',
        title: 'Пользователи'
      },
      {
        id: 11,
        uri: '/settings/cash',
        title: 'Онлайн касса'
      },
      {
        id: 12,
        uri: '/settings/options',
        title: 'Настройки опций объекта'
      },
      {
        id: 13,
        uri: '/settings/description',
        title: 'Описание объекта'
      }
    ]
  },
  {
    id: 14,
    uri: '/statistic',
    title: 'Статистика',
    children: [
      {
        id: 15,
        uri: '/statistic/common',
        title: 'Статистика общая'
      },
      {
        id: 16,
        uri: '/statistic/hourly',
        title: 'График по часам'
      },
      {
        id: 17,
        uri: '/statistic/daily',
        title: 'График по дням'
      },
      {
        id: 18,
        uri: '/statistic/programs',
        title: 'Использование программ'
      },
      {
        id: 19,
        uri: '/statistic/avg-check',
        title: 'Средний чек'
      }
    ]
  },
  {
    id: 20,
    uri: '/finance',
    title: 'Финансы',
    children: [
      {
        id: 21,
        uri: '/finance/cash',
        title: 'Деньги в кассе'
      },
      {
        id: 22,
        uri: '/finance/collection-history',
        title: 'История инкассаций'
      }
    ]
  },
  {
    id: 23,
    uri: '/bonus',
    title: 'ALLES Bonus'
  },
  {
    id: 24,
    uri: '/accounting',
    title: 'Учет',
    children: [
      {
        id: 25,
        uri: '/accounting/consumables',
        title: 'Учет расходников и коммуникаций'
      },
      {
        id: 26,
        uri: '/accounting/properties',
        title: 'Хозяйственный учет'
      },
      {
        id: 27,
        uri: '/accounting/tax-salary',
        title: 'Налоги и зарплата'
      },
      {
        id: 28,
        uri: '/accounting/object-logs',
        title: 'Журнал объекта'
      },
      {
        id: 29,
        uri: '/accounting/service',
        title: 'Сервисный учет объекта'
      }
    ]
  },
  {
    id: 30,
    uri: '/economics',
    title: 'Экономика',
    children: [
      {
        id: 31,
        uri: '/economics/profitability',
        title: 'Доходность'
      },
      {
        id: 32,
        uri: '/economics/payback',
        title: 'Окупаемость мойки'
      }
    ]
  },
  {
    id: 33,
    uri: '/analytics',
    title: 'Анализ мойки'
  }
] as TItems
