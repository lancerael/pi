<a href="https://pi.lance-taylor.com" target="_blank" title="Storybook"><img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg"/></a>

# pi-lib

Monorepo containing a design system of React UI components and supporting utilities. It supports theming and comes with some starter themes.

All packages prefixed with `@pi-lib/...` are standalone npm modules which you can install with a package manager like `npm`, `yarn` or `pnpm`. They intended for use with TypeScript, but they are also bundled in vanilla JS if you import from the package name with a suffix of `/vanilla`

Once you have set up a theme, you can build your app with the React components. Check out the docs for more details on usage.

- <a href="https://pi.lance-taylor.com" target="_blank">Docs</a>
- <a href="https://github.com/lancerael/pi" target="_blank">Code</a>

<!--- readmeGen --->

## Theming

### @pi-lib/styles

**styles**

React theming utility for use with Pi and styled-components

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="http://pi.lance-tayor.com/?path=/story/theming-getting-started" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/styles?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/styles" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Interactions

### @pi-lib/advanced-button

**AdvancedButton**

A React component for an advanced button with a built in loader

**Dependencies:** @pi-lib/button, @pi-lib/loader, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-advancedbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/advanced-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/AdvancedButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/button

**Button**

A React button component

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-button" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/Button" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/icon-button

**IconButton**

A React component for a special button with an icon

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-svg

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-iconbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/icon-button?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/IconButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/link

**Link**

A React component for a router optional link

**Dependencies:** @pi-lib/styles, react, react-router-dom

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-link" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/link?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/Link" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Inputs

### @pi-lib/input

**Input**

A React component to handle various types of form input

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/inputs-input" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/input?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/inputs/Input" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/select

**Select**

A React component for a themeable select input

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/inputs-select" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/select?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/inputs/Select" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## UI

### @pi-lib/collapsible-menu

**CollapsibleMenu**

A React component for an expanding/collapsing menu with icons

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-aria, react-aria-components, react-stately

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-collapsiblemenu" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/collapsible-menu?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/CollapsibleMenu" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/loader

**Loader**

Basic loading spinner React component

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-loader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/loader?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/Loader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/page-loader

**PageLoader**

A React component for a page blocking loader

**Dependencies:** @pi-lib/loader, @pi-lib/modal-screen, @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-pageloader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-loader?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/PageLoader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/tooltip

**Tooltip**

A React component used to position a tooltip containing content

**Dependencies:** @pi-lib/styles, lodash.throttle, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-tooltip" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/tooltip?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/Tooltip" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Layout

### @pi-lib/banner

**Banner**

A banner React component that can be used for a header or footer

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-banner" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/banner?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/Banner" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/modal-screen

**ModalScreen**

A React component used to block out the screen with modal content

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-modalscreen" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal-screen?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/atoms/ModalScreen" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/page-content

**PageContent**

A React component for a page layout with a sidebar

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-pagecontent" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-content?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/PageContent" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/table

**Table**

A React component for a table with expandable rows

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-table" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/table?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/components/molecules/Table" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Utilities

### @pi-lib/config

**config**

Shared Pi config

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/config?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/constants

**constants**

Shared Pi constants

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/constants?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/types

**types**

Global types for Pi

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/types?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/types" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/utils

**utils**

Utilities for use with Pi

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

Pi uses `PNPM` to manage the monorepo, with some performance enhancements from `nx`. If you want to contribute, it is highly recommended you use `pnpm` and not `yarn` or `npm`.

- _Installation_ - Clone the repo and use `pnpm i` to install.
- _Storybook_ - Use `pnpm sb` to launch Storybook.
- _New components_ - Use `pnpm generate [path] [ComponentName]` to scaffold a new component.
- _Vanilla versions_ - run `pnpm build` to generate the alternative vanilla JS export.

## Contribution

If you have a contribution, make a branch and raise a pull request into `main`. Run `pnpm change` to register the changes with the pipeline. This will automatically publish version bumps when the PR is merged.
