import React, { useRef, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const Converter = () => {
  const ref = useRef<any>(null)
  const [theme, setTheme] = useState('')

  const camelKey = (name) => {
    const camelPieces = name.split('-')
    return camelPieces.length === 1
      ? name
      : `${camelPieces[0]}${camelPieces[1]
          .charAt(0)
          .toUpperCase()}${camelPieces[1].slice(1)}`
  }

  const onChange = () => {
    setTheme(
      ref.current?.value
        ? JSON.stringify(
            Object.entries(JSON.parse(ref.current.value))
              .filter(([key]) => ['light', 'dark'].includes(key))
              .reduce(
                (acc, [key, val]) => ({
                  ...acc,
                  [key]: (val as any[]).reduce(
                    (acc2, { name, hex }) => ({
                      ...acc2,
                      [camelKey(name)]: hex,
                    }),
                    {}
                  ),
                }),
                {}
              )
          )
        : ''
    )
  }

  const linkProps = {
    target: '_blank',
    style: { color: 'grey' },
  }

  return (
    <div>
      <h3>Theming Pi</h3>
      <div>
        Pi Themes contain both a dark and light colour palette. You can access
        the props directly from the theme object in styled components as usual.
        However it is more powerful to do so via CSS variables, as these are
        automatically substituted for Light or Dark variations according to the
        user's local preferences. Try adjusting yours to see the changes.
        <ul>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode"
              {...linkProps}
            >
              Windows
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT208976" {...linkProps}>
              Mac
            </a>
          </li>
        </ul>
      </div>
      <h3>Custom themes</h3>
      <div>
        You can create your own themes by using the converter below.
        <br />
        <br />
        Visit the style generator at{' '}
        <a href="https://theme.numl.design/" {...linkProps}>
          https://theme.numl.design/
        </a>{' '}
        to generate your theme. When you are done, select <em>Colors</em> from
        the output and download the JSON.
        <br />
        <br />
        You can then paste the JSON here to generate a new theme.
        <br />
        <br />
        <strong>INPUT</strong>
        <br />
        <textarea
          {...{ ref, onChange }}
          style={{ width: '400px', height: '200px' }}
        ></textarea>
        <br />
        <br />
        <strong>OUTPUT</strong>
        <br />
        <textarea
          style={{ width: '400px', height: '200px' }}
          value={theme}
          readOnly
        ></textarea>
      </div>
      <h3>Using your theme</h3>
      <div>
        Once converted, copy the output and save it. You can then pass this to
        your imported <em>@pi-lib/styles/getTheme</em> helper to get a{' '}
        <em>theme</em> which you can pass to the imported{' '}
        <em>@pi-lib/styles/Theme</em> provider as a prop.
        <br />
        <br />
        You should then be able to access your theme, once you wrap you app in
        the provider. 🎉
        <br />
        <br />
      </div>
    </div>
  )
}

export default {
  title: 'Styles/Docs',
  component: Converter,
} as ComponentMeta<typeof Converter>

const Template: ComponentStory<typeof Converter> = () => <Converter />

export const ThemeUse = Template.bind({})
