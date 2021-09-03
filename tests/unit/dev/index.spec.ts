import { MainPageData } from 't@/dev'

describe('dev class MainPageData', () => {
  it('makeJumpsData method', () => {
    const instance = new MainPageData(1)
    instance.makeJumpsData(10, 200, 100)
  })
})
