export const dispatchEvent = (
  element: HTMLElement,
  eventType: string
): MouseEvent => {
  const event = document.createEvent('MouseEvents')
  event.initEvent(eventType, true, true)
  element.dispatchEvent(event)
  return event
}
