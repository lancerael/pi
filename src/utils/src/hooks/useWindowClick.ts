import { useEffect } from 'react'

export const useWindowClick = (
  callback: () => void,
  containerRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const onWindowClick = (e: MouseEvent) => {
      if (!!e.target && !containerRef?.current?.contains(e.target as Node)) {
        callback()
      }
    }
    const onEscapePress = ({ keyCode }) => {
      if (keyCode === 27) callback()
    }
    document.addEventListener('click', onWindowClick)
    document.addEventListener('keydown', onEscapePress)
    return () => {
      document.removeEventListener('click', onWindowClick)
      document.removeEventListener('keydown', onEscapePress)
    }
  }, [])
}
