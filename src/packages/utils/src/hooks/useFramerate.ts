import { useEffect, useRef } from 'react'

export const useFramerate = (frames: number = 60) => {
  const frame = useRef(0)

  const framerates = useRef({
    fps: 0,
    average: 0,
    totalTime: 0,
  })

  useEffect(() => {
    const counters = {
      fps: {
        counter: 0,
        lastTime: 0,
      },
      average: {
        counter: 0,
        lastTime: 0,
      },
    }
    const checkFrame = (time: number) => {
      const { fps, average } = counters
      if (!average.lastTime) average.lastTime = time
      fps.counter++
      average.counter++

      if (fps.counter >= frames) {
        const totalTime = time - average.lastTime
        framerates.current = {
          fps: fps.lastTime
            ? Math.round((fps.counter / (time - fps.lastTime)) * 1000)
            : 0,
          average: Math.round((average.counter / totalTime) * 1000),
          totalTime: Math.round(totalTime / 1000),
        }
        fps.counter = 0
        fps.lastTime = time
        // console.log(framerates.current)
      }

      frame.current = requestAnimationFrame(checkFrame)
    }

    frame.current = requestAnimationFrame(checkFrame)

    return () => cancelAnimationFrame(frame.current)
  }, [frames])

  return framerates
}
