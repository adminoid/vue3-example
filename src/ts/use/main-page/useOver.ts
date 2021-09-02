// todo: think about refactoring and improving it

import { isEqual } from 'lodash'
import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'

export default function useOver (is: string, index: number | undefined) {
  const store = useStore()
  const overComputed = computed(() => store.state.mainPage.over) as ComputedRef<{ [key: string]: any }>

  index = (is === 'washer' && index === undefined) ? -1 : index

  const onMouseover = () => {
    if (!isEqual(index, overComputed.value[is])) {
      store.commit('mainPage/setOver', { is, index })
    }
  }

  const onMouseleave = () => {
    if (isEqual(index, overComputed.value[is])) {
      store.commit('mainPage/unsetOver')
    }
  }

  return {
    onMouseover,
    onMouseleave
  }
}
