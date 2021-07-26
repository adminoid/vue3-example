export const getDistances = (el: HTMLElement) => {
  // log(el)
  const parentTop = el.offsetParent?.getBoundingClientRect().top || 0
  const parentLeft = el.offsetParent?.getBoundingClientRect().left || 0

  const xPosition = window.pageXOffset +
    el.getBoundingClientRect().left +
    parentLeft
  const yPosition = window.pageYOffset +
    el.getBoundingClientRect().top +
    parentTop

  return { x: xPosition, y: yPosition }
}

const log = (el: HTMLElement) => {
  console.info(
    window.pageXOffset,
    el.getBoundingClientRect().left
  )
  console.log(
    window.pageYOffset,
    el.getBoundingClientRect().top
  )

  console.warn(el.offsetParent?.getBoundingClientRect())
}

/**
function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while(element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
}
*/
