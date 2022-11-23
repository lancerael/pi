// exports.handler = async (event) => {
//   const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello!'),
//   };
//   return response;
// };

import { CandlestickDayData } from "../CandlestickChart.types";

const appendZero = (value: number) => value < 10 ? `0${value}` : value

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${appendZero(month)}-${appendZero(day)}`
}

/**
 * Generates a random number within a range.
 *
 * @method randomNumber
 *
 * @param min minimum random value
 * @param max max random value
 * @return new random number
 */
const randomNumber = (min = 0, max = 10000): number =>  Math.floor(Math.random() * (min - max - 1)) + max + 1

const movePrevValue = (val: number, strength = 100) => Math.abs(val + (val - randomNumber(val - strength, val + strength)))

const generateCandlestickDay = (daysAgo: number, prevData?: CandlestickDayData): CandlestickDayData => {
  const strength = 50
  let date = new Date()
  date.setDate(date.getDate() - daysAgo);
  const open = prevData ? movePrevValue(prevData.close, 5) : randomNumber(100, 400)
  const close = movePrevValue(open, strength)
  const high = randomNumber(Math.max(open,close), Math.max(open,close)+20)
  const low = randomNumber(Math.abs(Math.min(open,close)-20), Math.min(open,close))
  return {
    date: formatDate(date),
    high, low, open, close,
    volume: randomNumber(5000, 10000),
    trades: randomNumber(50, 100),
  }
}

export const generateCandlestickData = (daysAgo: number) => {
  let prevData: undefined | CandlestickDayData
  const dates = new Array(daysAgo).fill('').map((day, index) => {
    const thisData = generateCandlestickDay(daysAgo-index, prevData)
    prevData = thisData
    return thisData;
  })
  return {
    company: 'Bortus',
    dates
  }
}
