# CandlestickChart

NPM: [@pi-lib/candlestick-chart](https://www.npmjs.com/package/@pi-lib/candlestick-chart)

A React candlestick chart used to show the market forces acting on a traded asset.

## Usage

- Install `@pi-lib/candlestick-chart`.
- `import { CandlestickChart } from '@pi-lib/candlestick-chart'`
- Pass `data` prop with the following structure:

```
const data = [
  {
    date: 'YYYY-MM-DD',
    open: 10,
    high: 25,
    low: 5,
    close: 20,
  }
]
```

Data can be updated dynamically as required.

## FEATURES

- Created using d3 and React (with hooks)
- Randomised data tools
- Current day's data fluctuates to simulate market forces
- Candles and axes
- Scales adjust to visible data
- Pan and zoom controls
- Keyboard/mouse/touch controls
- Tooltips on hover and select
- Fully responsive layout
