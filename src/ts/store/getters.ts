import { mobileWidth } from '@/ts/config'

export default {
  isMobile (state: any) {
    return state.viewport.width < mobileWidth
  }
}
