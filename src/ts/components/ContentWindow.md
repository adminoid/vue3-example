# Component for animated opening window from source element

in `setup()` body:  
```typescript
const widgetEl = ref() // element which will be expanded to window
// method what usually called when user click by element with attr `ref="widgetEl"` 
const windowOpen = () => {
  store.commit('layout/windowOpen', {
    el: widgetEl.value,
    data: props.widget
  })
}
```
