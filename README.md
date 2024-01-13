<a href="https://pi.lance-taylor.com" target="_blank" title="Storybook"><img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg"/></a>&nbsp;
<a href="https://github.com/lancerael/pi/actions?workflow=Test Components & Apps" target="_blank" title="Tests"><img src="https://github.com/lancerael/pi/workflows/Tests/badge.svg"/></a>&nbsp;
<a href="https://coveralls.io/github/lancerael/pi?branch=dev" target="_blank" title="Coverage"><img src="https://coveralls.io/repos/github/lancerael/pi/badge.svg?branch=dev"/></a>

# pi-lib

A monorepo design system of React UI components and supporting utilities. Pi supports theming and comes with some starter themes. All packages prefixed with `@pi-lib/...` are standalone npm modules for use with a package manager like `npm`, `yarn` or `pnpm`.

Create a theme, use one of the provided themes or stick with the default, then build your app with the React components by importing them individually. Check out the docs for more details on usage.

- <a href="https://demo.lance-taylor.com" target="_blank">Demo</a>
- <a href="https://pi.lance-taylor.com" target="_blank">Docs</a>
- <a href="https://github.com/lancerael/pi" target="_blank">Code</a>

<!--- readmeGen --->

## Theming

### styles

**@pi-lib/styles**

React theming utility for use with Pi and styled-components

**Peer Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="http://pi.lance-taylor.com/?path=/story/theming-getting-started" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/styles?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/styles" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Atoms

### Button

**@pi-lib/button**

A styled React button component with a status

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-button" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/interactions/Button" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### CustomIcon

**@pi-lib/custom-icon**

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-svg, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-ui-customicon" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/custom-icon?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/atoms/ui/CustomIcon" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Grid

**@pi-lib/grid**

A wrapper for a simple grid layout.

**Peer Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-grid" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/grid?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/atoms/layout/Grid" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### IconButton

**@pi-lib/icon-button**

A React component for a special button with an icon

**Peer Dependencies:** @pi-lib/custom-icon, @pi-lib/styles, @pi-lib/utils, react, react-svg, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-iconbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/icon-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/interactions/IconButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Link

**@pi-lib/link**

A React component for a router optional link

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-router-dom, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-link" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/link?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/interactions/Link" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### ModalScreen

**@pi-lib/modal-screen**

A React component used to block out the screen with modal content

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-modalscreen" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal-screen?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/layout/ModalScreen" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageBanner

**@pi-lib/page-banner**

A banner React component that can comtain spaced or flowing items

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-pagebanner" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-banner?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/layout/PageBanner" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageGrid

**@pi-lib/page-grid**

A wrapper for a page grid layout.

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-pagegrid" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-grid?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/atoms/layout/PageGrid" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Tooltip

**@pi-lib/tooltip**

A React component used to show and position a tooltip containing content

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-ui-tooltip" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/tooltip?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/atoms/ui/Tooltip" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Molecules

### AdvancedButton

**@pi-lib/advanced-button**

A React component for an advanced button with a built in loader

**Peer Dependencies:** @pi-lib/button, @pi-lib/loader, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules/interactions-advancedbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/advanced-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/interactions/AdvancedButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Card

**@pi-lib/card**

A card component with a title and subtitle.

**Peer Dependencies:** @pi-lib/styles, @pi-lib/utils, @pi-lib/custom-icon, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-card" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/card?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/molecules/ui/Card" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Carousel

**@pi-lib/carousel**

**Peer Dependencies:** @pi-lib/styles, @pi-lib/use-limited-events, @pi-lib/use-touch, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-carousel" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/carousel?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/molecules/ui/Carousel" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### CollapsibleMenu

**@pi-lib/collapsible-menu**

A React component for an expanding/collapsing menu with icons

**Peer Dependencies:** @pi-lib/icon, @pi-lib/styles, @pi-lib/use-window-click, react, react-aria, react-aria-components, react-stately, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-collapsiblemenu" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/collapsible-menu?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/ui/CollapsibleMenu" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Modal

**@pi-lib/modal**

Modal for custom content that allows dismissal internally or externally

**Peer Dependencies:** @pi-lib/dismissable-content, @pi-lib/modal-screen, @pi-lib/styles, @pi-lib/use-window-click, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-modal" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/ui/Modal" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageContent

**@pi-lib/page-content**

A React component for a page layout with a sidebar

**Peer Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-layout-pagecontent" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-content?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/layout/PageContent" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageLoader

**@pi-lib/page-loader**

A React component for a page blocking loader

**Peer Dependencies:** @pi-lib/loader, @pi-lib/modal-screen, @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-pageloader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-loader?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/ui/PageLoader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Table

**@pi-lib/table**

A React component for a table with expandable rows

**Peer Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-layout-table" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/table?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/molecules/layout/Table" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Visualisations

### AxisChart

**@pi-lib/axis-chart**

A React component used to display a bar ot line chart

**Peer Dependencies:** @pi-lib/styles, @pi-lib/use-timer, @pi-lib/utils, d-theia, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/visualisations-charts-axischart" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/axis-chart?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/visualisations/charts/AxisChart" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### CandlestickChart

**@pi-lib/candlestick-chart**

A candlestick chart React component used to show the movement of traded assets over time.

**Peer Dependencies:** @pi-lib/button, @pi-lib/do-transition, @pi-lib/loader, @pi-lib/select, @pi-lib/styles, @pi-lib/tooltip, @pi-lib/use-hash-comparison, @pi-lib/use-limited-events, @pi-lib/use-touch, @pi-lib/utils, d3-axis, d3-scale, d3-selection, d3-transition, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/visualisations-charts-candlestickchart" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/candlestick-chart?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/visualisations/charts/CandlestickChart" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Shimmer

**@pi-lib/shimmer**

A shimmering text ticker animation.

**Peer Dependencies:** @pi-lib/styles, @pi-lib/use-timer, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/visualisations-text-shimmer" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/shimmer?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main//src/packages/components/visualisations/text/Shimmer" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Stellar

**@pi-lib/stellar**

A spacefaring scene that takes you through the stars.

**Peer Dependencies:** @pi-lib/do-transition, @pi-lib/styles, @pi-lib/use-limited-events, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/visualisations-scenes-shimmer" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/stellar?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/visualisations/scenes/Stellar" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### WorldMap

**@pi-lib/world-map**

A React component for an SVG world map chart

**Peer Dependencies:** @pi-lib/styles, d3-geo, d3-selection, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/visualisations-charts-worldmap" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/world-map?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/components/visualisations/charts/WorldMap" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Utilities

### config

**@pi-lib/config**

Shared Pi config

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/config?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### constants

**@pi-lib/constants**

Shared Pi constants

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/constants?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### types

**@pi-lib/types**

Global types for Pi

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/types?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/types" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### useLimitedEvents

**@pi-lib/use-limited-events**

Hook used to add debounced or throttled events to a React component

**Peer Dependencies:** @pi-lib/use-hash-comparison, @pi-lib/utils, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/utilities-hooks-uselimitedevents--docs" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/use-limited-events?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/hooks/useLimitedEvents" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### useTimer

**@pi-lib/use-timer**

Hook used to add setTimeout or setInterval to a React component

**Peer Dependencies:** @pi-lib/constants, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/utilities-hooks-usetimer--docs" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/use-timer?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/hooks/useTimer" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### useWindowClick

**@pi-lib/use-window-click**

Hook used to add throttled escape (window) clicks to a React component

**Peer Dependencies:** @pi-lib/use-limited-events, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/utilities-hooks-usewindowclick--docs" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/use-window-click?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/packages/hooks/useTouch" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### usehashComparison

**@pi-lib/use-hash-comparison**

Create a hash of any object - can be used to compare dependencies and ensure correct re-rendering.

**Peer Dependencies:** @pi-lib/utils, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/utilities-hooks-usehashcomparison--docs" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/use-hash-comparison?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/hooks/usehashComparison" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### utils

**@pi-lib/utils**

Utilities for use with Pi

**Peer Dependencies:** react, react-aria

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/utils?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/utils" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

<!--- readmeGen --->

## Development

Pi uses `PNPM` to manage the monorepo, with some performance enhancements from `nx`.

- _Installation_ - Clone the repo and use `pnpm i` to install.
- _Storybook_ - Use `pnpm sb:dev` to launch Storybook.
- _New components_ - Use `pnpm gen:new [path] [ComponentName]` to scaffold a new component.

## Contribution

If you have a contribution, make a fork then set this repo as your upstream. Make your branch and raise a pull request into `main`. Run `pnpm pre:release` to run some code quality checks and register the changes with the pipeline, then push the change files to the PR source branch. This will automatically publish version bumps when the PR is merged.
