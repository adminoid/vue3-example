import { MainPageData } from 't@/dev/MainPageData'

describe('debugging', () => {
  it('should create data', function () {
    // try {
    const instance = new MainPageData(0)
    console.log(instance.makeWidgets()[6])
    console.log(instance.makeWidgets()[6])
    console.log(instance.widgetsCommon[6])
    // } catch (e) {
    //   console.error(e.message)
    // }

    // const first = instance.washers[0].widgets
    // const second = instance.washers[1].widgets
    // const common = instance.widgetsSummary
    // console.log(common)
  })
})
