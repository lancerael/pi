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

- Created as a standalone component inside mono repo
- CI/CD process publishes to NPM
- Created using d3 and React (with hooks)
- Randomised data tools
- Current day's data fluctuates to simulate market forces
- Candles and axes
- Scales adjust to visible data
- Pan and zoom controls
- Keyboard/mouse/touch controls
- Tooltips on hover and select
- Fully responsive layout

TODO:

- Controls to collapse data into weeks/months (or expand to units smaller than a day)
- Performance improvements
- Better touch zoom
- Better TS typing (replace "any")
- Unit tests
- Deploy data API to AWS lamda and access via HTTP
- Deploy demo to AWS via CI pipeline
