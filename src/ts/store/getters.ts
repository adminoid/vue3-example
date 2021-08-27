import root from '@/sass/_root.sass'

export default {
  isMobile (state: any) {
    return state.viewport.width < root.mobileWidth
  }
}
