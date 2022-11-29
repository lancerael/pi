# pi-lib

Monorepo of React UI components and supporting utilities.  
Currently in pre-development.

DEMO: http://dtheia.org/pi

## Button

NPM: _@pi-lib/button_

## Loader

NPM: _@pi-lib/loader_

## AdvancedButton

NPM: _@pi-lib/advanced-button_

## CandlestickChart

NPM: _@pi-lib/candlestick-chart_

FEATURES:

- Created as a standalone component inside mono repo and published to NPM
- Created using d3 and React (with hooks)
- Randomised data (for now)
- Current day's data fluctuates to simulate market forces
- Candles and axes
- Scales adjust to visible data
- Nodes outside of visible range are not rendered
- Pan and zoom controls

TODO:

- Fix known issues (zoom not centered, glitch when panning to the far left if fully zoomed out)
- Controls to collapse data into weeks/months (or expand to units smaller than a day)
- Keyboard/mouse/touch controls
- Tooltips
- Better usage of groups to control positions of candles
- Convert candle wicks to lines (rects used for rapid prototype)
- Performance improvements
- Better TS typing (replace "any")
- Unit tests
- Deploy data API to AWS lamda and access via HTTP
- Deploy demo to AWS via CI pipeline
