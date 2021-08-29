import root from '@/sass/common.sass'

const mobileWidth = parseInt(root.mobileWidth)
const leftSidebarWidth = parseInt(root.leftSidebarWidth)

export default {
  isMobileViewport (state: any) {
    return state.viewport.width < mobileWidth + leftSidebarWidth
  },

  /**
   * have to check for main page area width being
   * either more or less than root.mobileWidth (750)
   * if sidebar is open. Compare viewport width:
   *  with mobile + leftSidebar, otherwise with just mobile
   */
  isMobileContent (state: any, getters: any, rootState: any) {
    return (rootState.layout.sidebar.open && rootState.layout.sidebar.pinned)
      ? state.viewport.width < mobileWidth + leftSidebarWidth
      : state.viewport.width < mobileWidth
  }
}
