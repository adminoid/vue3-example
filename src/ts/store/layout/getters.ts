export default {
  isShowSidebar (state: any) {
    return (state.sidebar.open && !state.chat.open)
  }
}
