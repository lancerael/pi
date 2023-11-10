<a href="https://pi.lance-taylor.com" target="_blank" title="Storybook"><img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg"/></a>&nbsp;
<a href="https://github.com/lancerael/pi/actions?workflow=Test Components & Apps" target="_blank" title="Tests"><img src="https://github.com/lancerael/pi/workflows/Tests/badge.svg"/></a>&nbsp;
<a href="https://coveralls.io/github/lancerael/pi?branch=dev" target="_blank" title="Coverage"><img src="https://coveralls.io/repos/github/lancerael/pi/badge.svg?branch=dev"/></a>

# pi-lib

Monorepo containing a design system of React UI components and supporting utilities. Pi supports theming and comes with some starter themes.

All packages prefixed with `@pi-lib/...` are standalone npm modules for use with a package manager like `npm`, `yarn` or `pnpm`. They intended for use with TypeScript, but they are also bundled in vanilla JS - import from the package name with a suffix of `/vanilla`

Once you have set up a theme, you can build your app with the React components. Check out the docs for more details on usage.

- <a href="https://demo.lance-taylor.com" target="_blank">Demo</a>
- <a href="https://pi.lance-taylor.com" target="_blank">Docs</a>
- <a href="https://github.com/lancerael/pi" target="_blank">Code</a>

<!--- readmeGen --->

## Theming

### styles

**@pi-lib/styles**

React theming utility for use with Pi and styled-components

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="http://pi.lance-taylor.com/?path=/story/theming-getting-started" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/styles?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/styles" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Atoms

### Banner

**@pi-lib/banner**

A banner React component that can comtain spaced or flowing items

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-banner" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/banner?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/layout/Banner" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Button

**@pi-lib/button**

A React button component with a status

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-button" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/interactions/Button" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Grid

**@pi-lib/grid**

A wrapper for a simple grid layout.

**Dependencies:** @pi-lib/styles, react, styled-components

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

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-svg, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-iconbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/icon-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/interactions/IconButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Link

**@pi-lib/link**

A React component for a router optional link

**Dependencies:** @pi-lib/styles, react, react-router-dom, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-interactions-link" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/link?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/interactions/Link" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### ModalScreen

**@pi-lib/modal-screen**

A React component used to block out the screen with modal content

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-modalscreen" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal-screen?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/layout/ModalScreen" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageGrid

**@pi-lib/page-grid**

A wrapper for a page grid layout.

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-layout-page-grid" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-grid?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/atoms/layout/PageGrid" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Tooltip

**@pi-lib/tooltip**

A React component used to show and position a tooltip containing content

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/atoms-ui-tooltip" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/tooltip?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/ui/Tooltip" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Molecules

### AdvancedButton

**@pi-lib/advanced-button**

A React component for an advanced button with a built in loader

**Dependencies:** @pi-lib/button, @pi-lib/loader, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules/interactions-advancedbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/advanced-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/interactions/AdvancedButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Card

**@pi-lib/card**

A card component with a title and subtitle.

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-card" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/card?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/./src/packages/components/molecules/ui/Card" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### CollapsibleMenu

**@pi-lib/collapsible-menu**

A React component for an expanding/collapsing menu with icons

**Dependencies:** @pi-lib/icon, @pi-lib/styles, @pi-lib/utils, react, react-aria, react-aria-components, react-stately, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-collapsiblemenu" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/collapsible-menu?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/ui/CollapsibleMenu" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Modal

**@pi-lib/modal**

Modal for custom content that allows dismissal internally or externally

**Dependencies:** @pi-lib/dismissable-content, @pi-lib/modal-screen, @pi-lib/styles, @pi-lib/utils, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-modal" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/Modal" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageContent

**@pi-lib/page-content**

A React component for a page layout with a sidebar

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-layout-pagecontent" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-content?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/layout/PageContent" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### PageLoader

**@pi-lib/page-loader**

A React component for a page blocking loader

**Dependencies:** @pi-lib/loader, @pi-lib/modal-screen, @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-ui-pageloader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-loader?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/ui/PageLoader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### Table

**@pi-lib/table**

A React component for a table with expandable rows

**Dependencies:** @pi-lib/styles, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/docs/molecules-layout-table" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/table?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/layout/Table" target="_blank">Github</a></td>
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
      <td><a href="https://github.com/lancerael/pi/tree/main/src/config" target="_blank">Github</a></td>
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
      <td><a href="https://github.com/lancerael/pi/tree/main/src/config" target="_blank">Github</a></td>
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
      <td><a href="https://github.com/lancerael/pi/tree/main/src/types" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### utils

**@pi-lib/utils**

Utilities for use with Pi

**Dependencies:** react, react-aria

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
- _Vanilla versions_ - run `pnpm build` to generate the alternative vanilla JS export.

## Contribution

If you have a contribution, make a branch and raise a pull request into `main`. Run `pnpm change` to register the changes with the pipeline, the push the change files to the PR source branch. This will automatically publish version bumps when the PR is merged.
