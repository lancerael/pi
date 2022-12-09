// exports.handler = async (event) => {
//   const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello!'),
//   };
//   return response;
// };

import { CandlestickDayData } from '../CandlestickChart.types'

// Appends zero to an integer for a consistent date string
const appendZero = (value: number) => (value < 10 ? `0${value}` : value)

// Formats the date in standard format
const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${year}-${appendZero(month + 1)}-${appendZero(day)}`
}

//Generates a random number within a range.
const randomNumber = (min = 0, max = 10000): number =>
  Math.floor(Math.random() * (min - max - 1)) + max + 1

// Moves the previous value to simulate market forces
export const movePrevValue = (val: number, strength = 100) =>
  Math.abs(val + (val - randomNumber(val - strength, val + strength)))

// Generate data for a candlestick day
const generateCandlestickDay = (
  daysAgo: number,
  prevData?: CandlestickDayData
): CandlestickDayData => {
  const strength = 50
  let date = new Date()
  date.setDate(date.getDate() - daysAgo)
  const open = prevData
    ? movePrevValue(prevData.close, 3)
    : randomNumber(100, 400)
  const close = movePrevValue(open, strength)
  const high = randomNumber(Math.max(open, close), Math.max(open, close) + 20)
  const low = randomNumber(
    Math.abs(Math.min(open, close) - 20),
    Math.min(open, close)
  )
  return {
    date: formatDate(date),
    high,
    low: low > 0 ? low : 0,
    open,
    close: close > 0 ? close : 0,
    volume: randomNumber(5000, 10000),
    trades: randomNumber(50, 100),
  }
}

// Generate a range of candlestick data
export const generateCandlestickData = (daysAgo: number) => {
  let prevData: undefined | CandlestickDayData
  const dates = new Array(daysAgo + 1).fill('').map((day, index) => {
    const thisData = generateCandlestickDay(daysAgo - index, prevData)
    prevData = thisData
    return thisData
  })
  return {
    company: 'Bortus',
    dates,
  }
}
