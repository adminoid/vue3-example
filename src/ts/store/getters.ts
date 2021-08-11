import { mobileWidth } from 't@/config'

export default {
  isMobile (state: any) {
    return state.viewport.width < mobileWidth
  }
}
