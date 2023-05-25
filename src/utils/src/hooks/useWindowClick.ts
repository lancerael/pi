import { useEffect } from 'react'

export const useWindowClick = (
  callback: () => void,
  containerRef?: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const onWindowClick = ({ target }: MouseEvent) => {
      if (!!target && !containerRef?.current?.contains(target as Node))
        callback()
    }
    document.body.addEventListener('click', onWindowClick)
    return () => document.body.removeEventListener('click', onWindowClick)
  }, [])
}
