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

**styles** _v1.7.1_

React theming utility for use with Pi and styled-components

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="http://pi.lance-tayor.com/?path=/story/theming-getting-started" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/styles" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/styles" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Interactions

### @pi-lib/advanced-button

**AdvancedButton** _v0.6.6_

A React component for an advanced button with a built in loader

**Dependencies:** @pi-lib/button, @pi-lib/loader, react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-advancedbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/advanced-button" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/molecules/AdvancedButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/button

**Button** _v1.5.4_

A React button component

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-button" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/button" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/Button" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/icon-button

**IconButton** _v0.6.3_

A React component for a special button with an icon

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-svg

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-iconbutton" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/icon-button" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/IconButton" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/link

**Link** _v0.6.5_

A React component for a router optional link

**Dependencies:** @pi-lib/styles, react, react-router-dom

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/interactions-link" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/link" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/Link" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Inputs

### @pi-lib/input

**Input** _v0.5.2_

A React component to handle various types of form input

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/inputs-input" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/input" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/inputs/Input" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/select

**Select** _v0.2.2_

A React component for a themeable select input

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/inputs-select" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/select" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/inputs/Select" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## UI

### @pi-lib/collapsible-menu

**CollapsibleMenu** _v0.4.3_

A React component for an expanding/collapsing menu with icons

**Dependencies:** @pi-lib/styles, @pi-lib/utils, react, react-aria, react-aria-components, react-stately

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-collapsiblemenu" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/collapsible-menu" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/molecules/CollapsibleMenu" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/loader

**Loader** _v2.4.1_

Basic loading spinner React component

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-loader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/loader" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/Loader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/page-loader

**PageLoader** _v0.2.7_

A React component for a page blocking loader

**Dependencies:** @pi-lib/loader, @pi-lib/modal-screen, @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-pageloader" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-loader" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/molecules/PageLoader" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/tooltip

**Tooltip** _v1.3.4_

A React component used to position a tooltip containing content

**Dependencies:** @pi-lib/styles, lodash.throttle, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/ui-tooltip" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/tooltip" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/Tooltip" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Layout

### @pi-lib/banner

**Banner** _v0.3.1_

A banner React component that can be used for header or footer

**Dependencies:** react, styled-components

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-banner" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/banner" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/Banner" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/modal-screen

**ModalScreen** _v0.2.6_

A React component used to block out the screen with modal content

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-modalscreen" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/modal-screen" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/atoms/ModalScreen" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/page-content

**PageContent** _v0.1.4_

A React component for a page layout with a sidebar

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-pagecontent" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/page-content" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/molecules/PageContent" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/table

**Table** _v1.7.3_

A React component for a table with expandable rows

**Dependencies:** @pi-lib/styles, react

<table>
  <tbody>
    <tr>
      <td><a href="https://pi.lance-taylor.com/?path=/story/layout-table" target="_blank">Docs</a></td>
      <td><a href="https://www.npmjs.com/package/@pi-lib/table" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/components/molecules/Table" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

## Utilities

### @pi-lib/config

**config** _v0.4.0_

Shared Pi config

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/config" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/constants

**constants** _v0.2.0_

Shared Pi constants

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/constants" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/config" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/types

**types** _v0.1.0_

Global types for Pi

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/types" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/types" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

### @pi-lib/utils

**utils** _v0.2.2_

Utilities for use with Pi

<table>
  <tbody>
    <tr>
      <td><a href="https://www.npmjs.com/package/@pi-lib/utils" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/src/src/utils" target="_blank">Github</a></td>
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
