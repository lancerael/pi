# pi-lib

Monorepo of React UI components and supporting utilities. It supports theming and comes with some starter themes. Check this link for example usage and props. 

- [DEMO & Docs](https://main.d3nmdhmk6s7nee.amplifyapp.com)

All components prefixed with _@pi-lib/..._ can be installed individually as npm packages.  They are bundled to avoid the need for you to use TypeScript, but they are not bundled with common dependencies. So make sure your project includes:

* React
* styled-components
* @pi-lib/styles

The number of components is small at first but will grow. Here is the story so far... 

## _Interactions_
#### Button
_@pi-lib/button_ - A simple button, styled via Pi theme.

#### AdvancedButton
_@pi-lib/advanced-button_ - An advanced button, with a loader.

## _UI_

#### Loader
_@pi-lib/loader_ - A simple themed loading spinner.

#### Tooltip
_@pi-lib/loader_ - A themed tooltip.

## _Charts_
#### CandlestickChart

_@pi-lib/candlestick-chart_ - A React candlestick chart used to show the market forces acting on a traded asset.

[Candlestick Chart Docs](https://github.com/lancerael/pi/blob/main/src/components/molecules/CandlestickChart/README.md)


## Develpoment

Pi uses PNPM to manage the monorepo, with some performance enhancements from nx.  If you want to contribute, it is highly recommended you use `pnpm` and not `yarn` or `npm`. 

* *Installation* - Clone the repo and use `pnpm i` to install.
* *Storybook* - Use `pnpm sb` to launch Storybook.
* *New components* - Use `pnpm generate [path] [ComponentName]` to scaffold a new component.
  
## Contribution

If you have a contribution, make a branch and raise a pull request into `main`.  Run `pnpm change` to register the changes with the pipeline. This will automatically publish version bumps when the PR is merged.