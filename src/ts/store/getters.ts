import { mobileWidth } from '@/ts/config'

export default {
  isMobile (state: any) {
    console.log(state.viewport.width, mobileWidth)
    return state.viewport.width < mobileWidth
  }
}
