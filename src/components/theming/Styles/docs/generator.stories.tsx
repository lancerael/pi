import { useRef, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CodeFormat, PreFormat, Title } from './formatters.style'
import React from 'react'

const ThemeDocs = () => {
  const ref = useRef<any>(null)
  const [theme, setTheme] = useState('')

  const camelKey = (name: string) => {
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
      <Title>Custom themes</Title>
      <div>
        You can create your own themes by using the converter below.
        <br />
        <br />
        Visit the style generator at{' '}
        <a href="https://theme.numl.design/" {...linkProps}>
          https://theme.numl.design/
        </a>{' '}
        to generate your theme. When you are done, select <em>Colors</em> from
        the output and download the JSON. You can then paste the JSON here to
        generate a new theme.
        <br />
        <br />
        All existing themes are made using this process.
        <br />
        <br />
        <CodeFormat>INPUT</CodeFormat>
        <br />
        <textarea
          {...{ ref, onChange }}
          style={{ width: '400px', height: '200px' }}
        ></textarea>
        <br />
        <br />
        <CodeFormat>OUTPUT</CodeFormat>
        <br />
        <textarea
          style={{ width: '400px', height: '200px' }}
          value={theme}
          readOnly
        ></textarea>
      </div>
      <Title>Using your theme</Title>
      <div>
        Once converted, copy the output and save it. You can then pass this to
        your imported <CodeFormat>@pi-lib/styles/Theme</CodeFormat> provider as
        a prop. Make sure to also make a `GlobalStyle` component with your theme
        so that all of your colours are available to the theme as CSS variables.
        <br />
        <PreFormat>
          {`
import customTheme from './local/myThemes/customTheme'
import { getGlobalStyle } from '@pi-lib/styles'
const GlobalStyle = getGlobalStyle(customTheme)
/.../
<Theme theme={customTheme}>
  <GlobalStyle />
  <App/>
</Theme>
          `}
        </PreFormat>
        <br />
        You should then be able to access your theme from your App. 🎉
        <br />
        <br />
      </div>
    </div>
  )
}

export default {
  title: 'Theme/Custom Themes',
  component: ThemeDocs,
} as ComponentMeta<typeof ThemeDocs>

const Template: ComponentStory<typeof ThemeDocs> = () => <ThemeDocs />

export const ThemeGeneration = Template.bind({})
