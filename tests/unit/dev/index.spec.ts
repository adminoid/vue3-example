import { MainPageData } from 't@/dev'

describe('dev class MainPageData', () => {
  it('makeJumpsData method', () => {
    const threshold = 100
    const instance = new MainPageData(1)
    const data = instance.makeJumpsData(10, 120, threshold)

    expect(typeof data.value).toBe('number')
    expect(data.value > 0).toBeTruthy()
    expect(typeof data.changed).toBe('number')
  })
})
