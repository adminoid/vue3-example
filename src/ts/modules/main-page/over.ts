import { isEqual } from 'lodash'
import { useStore } from 'vuex'

export default function useOver (is: string, index: number | undefined) {
  const store = useStore()
  const over = store.state.mainPage.over

  const onMouseover = () => {
    if (!isEqual(index, over[is])) {
      store.commit('mainPage/setOver', { is, index })
    }
  }

  const onMouseleave = () => {
    if (isEqual(index, over[is])) {
      store.commit('mainPage/unsetOver')
    }
  }

  return {
    onMouseover,
    onMouseleave
  }
}
