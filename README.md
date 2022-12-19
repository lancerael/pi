# pi-lib

Monorepo of React UI components and supporting utilities.  

- DEMO: http://dtheia.org/pi

## CandlestickChart

NPM: _@pi-lib/candlestick-chart_

A candlestick chart used to show the market forces acting on a traded asset.

FEATURES:

- Created as a standalone component inside mono repo and published to NPM
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
- Better TS typing (replace "any")
- Unit tests
- Deploy data API to AWS lamda and access via HTTP
- Deploy demo to AWS via CI pipeline

## Button

NPM: _@pi-lib/button_

## Loader

NPM: _@pi-lib/loader_

## AdvancedButton

NPM: _@pi-lib/advanced-button_