import { reactive } from 'vue'
import { isEqual } from 'lodash'

type TOver = {
  washer: number | boolean,
  widget: number | boolean
}
const overDefault: {[index: string]:any} = {
  washer: false,
  widget: false
} as TOver

let over = reactive(overDefault)

export default function useOver (is: string, index: number | undefined) {
  const onMouseover = () => {
    if (!isEqual(index, over[is])) {
      over[is] = index
      console.log(over)
    }
  }

  const onMouseleave = () => {
    if (isEqual(index, over[is])) {
      over = overDefault
      console.log(over)
    }
  }

  return {
    onMouseover,
    onMouseleave
  }
}
