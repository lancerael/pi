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
    document.body.addEventListener('click', onWindowClick)
    return () => document.body.removeEventListener('click', onWindowClick)
  }, [])
}
