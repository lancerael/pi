import { useEffect, useRef } from 'react'

export const useFramerate = (frames: number = 60) => {
  const frame = useRef(0)

  const counters = useRef({
    fps: {
      counter: 0,
      lastTime: 0,
      framerate: 0,
    },
    average: {
      counter: 0,
      lastTime: 0,
      framerate: 0,
    },
    totalTime: 0,
  })

  const framerates = useRef({
    fps: 0,
    average: 0,
    totalTime: 0,
  })

  useEffect(() => {
    const checkFrame = (time: number) => {
      const { fps, average } = counters.current
      fps.counter++
      average.counter++

      if (fps.counter >= frames) {
        fps.framerate = fps.lastTime
          ? Math.round((fps.counter / (time - fps.lastTime)) * 1000)
          : 0
        fps.counter = 0
        fps.lastTime = time
      }

      if (!average.lastTime) average.lastTime = time
      else {
        const totalTime = time - average.lastTime
        average.framerate = Math.round((average.counter / totalTime) * 1000)
        counters.current.totalTime = Math.round(totalTime / 1000)
      }

      frame.current = requestAnimationFrame(checkFrame)
    }

    frame.current = requestAnimationFrame(checkFrame)

    return () => cancelAnimationFrame(frame.current)
  }, [])

  useEffect(() => {
    const { fps, average, totalTime } = counters.current
    framerates.current = {
      fps: fps.framerate,
      average: average.framerate,
      totalTime,
    }
    // console.log(framerates.current)
  }, [counters.current.totalTime])

  return framerates
}
