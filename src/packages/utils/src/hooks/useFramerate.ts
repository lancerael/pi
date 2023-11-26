import { useEffect, useRef } from 'react'

/**
 * Custom React hook to calculate and track frame rate (FPS) and average frame processing time over a set interval.
 *
 * @param {number} [frames=60] - The number of frames at which to measure the frame rate.
 * @returns {React.MutableRefObject<{fps: number, average: number, totalTime: number}>} A ref object containing the fps (frames per second), average time per frame, and total time elapsed.
 */
export const useFramerate = (frames: number = 60) => {
  const frame = useRef(0)

  const framerates = useRef({
    fps: 60,
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
            : 60,
          average: Math.round((average.counter / totalTime) * 1000),
          totalTime: Math.round(totalTime / 1000),
        }
        fps.counter = 0
        fps.lastTime = time
      }

      frame.current = requestAnimationFrame(checkFrame)
    }

    frame.current = requestAnimationFrame(checkFrame)

    return () => cancelAnimationFrame(frame.current)
  }, [frames])

  return framerates
}
