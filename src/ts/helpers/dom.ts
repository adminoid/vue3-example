export const getDistances = (el: HTMLElement) => {
  const parentTop = el.offsetParent?.getBoundingClientRect().top || 0
  const parentLeft = el.offsetParent?.getBoundingClientRect().left || 0
  const xPosition = window.pageXOffset +
    el.getBoundingClientRect().left +
    parentLeft
  const yPosition = window.pageYOffset +
    el.getBoundingClientRect().top +
    parentTop
  return { left: `${xPosition}px`, top: `${yPosition}px` }
}

export const getAttrs = (el: HTMLElement) => {
  const distances = getDistances(el)
  return {
    width: el.getBoundingClientRect().width + 'px',
    height: el.getBoundingClientRect().height + 'px',
    ...distances
  }
}
