import { useEffect, useRef } from 'react'

export const useFramerate = () => {
  const counter = useRef(0)
  const lastTime = useRef(null)
  const fps = useRef(0)
  const frame = useRef(0)

  useEffect(() => {
    const checkFrame = (time: number) => {
      counter.current++

      if (counter.current >= 30) {
        fps.current = lastTime.current
          ? (counter.current / (time - lastTime.current)) * 1000
          : 0
        counter.current = 0
        lastTime.current = time
      }
      frame.current = requestAnimationFrame(checkFrame)
    }

    frame.current = requestAnimationFrame(checkFrame)

    return () => cancelAnimationFrame(frame.current)
  }, [])

  return fps
}
