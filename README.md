[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://pi.lance-taylor.com)

# pi-lib

Monorepo of mainly React UI components, but also contains supporting libraries and utilities. It supports theming and comes with some starter themes. Check the Storybook link above for example usage and props.

All packages prefixed with `@pi-lib/...` can be installed individually as npm modules. They designed for use with TypeScript, but they are also bundled in vanilla JS if you want to install your own dependencies. In this case import from the package name with a suffix of `/vanilla`



## _Interactions_

#### Button

_@pi-lib/button_ - A simple button, styled via Pi theme.

#### IconButton

_@pi-lib/icon-button_ - A button with an icon, styled via Pi theme.

#### Link

_@pi-lib/link_ - A simple link, styled via Pi theme.

#### AdvancedButton

_@pi-lib/advanced-button_ - An advanced button, with a loader.



## _UI_

#### CollapsibleMenu

_@pi-lib/collapsible-menu_ - A themed dropdown menu for page navigation.

#### PageLoader

_@pi-lib/page-loader_ - A themed full scrteen loader.

#### Loader

_@pi-lib/loader_ - A simple themed loading spinner.

#### Tooltip

_@pi-lib/tooltip_ - A themed tooltip.



## _Layout_

#### Banner

_@pi-lib/banner_ - A banner used for header or footer, styled via Pi theme.

#### ModalScreen

_@pi-lib/modal-screen_ - A screen used for modals, styled via Pi theme.

#### Table

_@pi-lib/table_ - An expandable table, styled via Pi theme.

#### PageContent

_@pi-lib/page-content_ - A page layout with a sidebar, styled via Pi theme.



## _Charts_

#### Charts

_@pi-lib/charts_ is not a React component, but a standalone charting library that can be used in any framework.

[Pi Charts Docs](https://github.com/lancerael/pi/blob/main/src/libs/Charts/README.md)

#### BarChart

_@pi-lib/bar-chart_ - A React component that uses Pi Charts to make a simple bar chart.

#### CandlestickChart

_@pi-lib/candlestick-chart_ - A React candlestick chart used to show the market forces acting on a traded asset.

[Candlestick Chart Docs](https://github.com/lancerael/pi/blob/main/src/components/molecules/CandlestickChart/README.md)

#### WorldMap

_@pi-lib/world-map_ - A React component that uses d3 to make a simple world map chart.



## _Inputs_

#### Input

_@pi-lib/input_ - A form input component, styled via Pi theme.

#### Select

_@pi-lib/select_ - A select dropdown, styled via Pi theme.



## Develpoment

Pi uses `PNPM` to manage the monorepo, with some performance enhancements from `nx`. If you want to contribute, it is highly recommended you use `pnpm` and not `yarn` or `npm`.

- _Installation_ - Clone the repo and use `pnpm i` to install.
- _Storybook_ - Use `pnpm sb` to launch Storybook.
- _New components_ - Use `pnpm generate [path] [ComponentName]` to scaffold a new component.
- _Vanilla versions_ - run `pnpm build` to generate the alternative vanilla JS export.

## Contribution

If you have a contribution, make a branch and raise a pull request into `main`. Run `pnpm change` to register the changes with the pipeline. This will automatically publish version bumps when the PR is merged.
