# pi-lib

Monorepo of mainly React UI components, but also contains supporting libraries and utilities. It supports theming and comes with some starter themes. Check this link for example usage and props. 

- [DEMO & Docs](https://main.d3nmdhmk6s7nee.amplifyapp.com)

All packages prefixed with `@pi-lib/...` can be installed individually as npm modules.  They designed for use with TypeScript, but they are also bundled in vanilla JS if you want to install your own dependencies. In this case import from the package name with a suffix of `/vanilla`

## _Charts_

_@pi-lib/charts_ is not a React component, but a standalone charting library that can be used in any framework.

[Pi Charts Docs](https://github.com/lancerael/pi/blob/main/src/libs/Charts/README.md)

#### BarChart

_@pi-lib/bar-chart_ - A React component that uses Pi Charts to make a simple bar chart.

#### CandlestickChart

_@pi-lib/candlestick-chart_ - A React candlestick chart used to show the market forces acting on a traded asset.

[Candlestick Chart Docs](https://github.com/lancerael/pi/blob/main/src/components/molecules/CandlestickChart/README.md)

## _UI_

#### Loader
_@pi-lib/loader_ - A simple themed loading spinner.

#### Tooltip
_@pi-lib/loader_ - A themed tooltip.

## _Interactions_
#### Button
_@pi-lib/button_ - A simple button, styled via Pi theme.

#### AdvancedButton
_@pi-lib/advanced-button_ - An advanced button, with a loader.

## Develpoment

Pi uses `PNPM` to manage the monorepo, with some performance enhancements from `nx`.  If you want to contribute, it is highly recommended you use `pnpm` and not `yarn` or `npm`. 

* *Installation* - Clone the repo and use `pnpm i` to install.
* *Storybook* - Use `pnpm sb` to launch Storybook.
* *New components* - Use `pnpm generate [path] [ComponentName]` to scaffold a new component.
* *Vanilla versions* - run `pnpm build` to generate the alternative vanilla JS export.
  
## Contribution

If you have a contribution, make a branch and raise a pull request into `main`.  Run `pnpm change` to register the changes with the pipeline. This will automatically publish version bumps when the PR is merged.