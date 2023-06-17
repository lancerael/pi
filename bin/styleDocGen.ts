const fs = require('fs-extra')
const fileName = './src/components/theming/Styles/docs/styles.stories.tsx'
const themeFile = './src/components/theming/Styles/src/themes/themes.types.ts'

const template = (name) => `
export const ${
  name.charAt(0).toUpperCase() + name.slice(1)
}: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: '${name}',
  },
}
`

const styleDocGen = async () => {
  const themeContents = await fs.readFile(themeFile, 'utf8')
  const themeList = themeContents.match(/'[a-z]+'/g)

  const fileContents = await fs.readFile(fileName, 'utf8')

  const contentPieces = fileContents.split(`/* generated content below */`)

  contentPieces[1] = themeList.reduce((themeStories, theme) => {
    return `${themeStories}${template(theme.replace(/\'/g, ''))}`
  }, '')

  await fs.writeFile(
    fileName,
    contentPieces.join(`/* generated content below */
    `)
  )
}

styleDocGen()
