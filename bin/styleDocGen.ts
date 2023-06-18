const fsExtra = require('fs-extra')
const fileName = './src/styles/docs/styles.stories.tsx'
const themeFile = './src/styles/src/themes/themes.types.ts'

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
  const themeContents = await fsExtra.readFile(themeFile, 'utf8')
  const themeList = themeContents.match(/'[a-z]+'/g)

  const fileContents = await fsExtra.readFile(fileName, 'utf8')

  const contentPieces = fileContents.split(`/* generated content below */`)

  contentPieces[1] = themeList.reduce((themeStories, theme) => {
    return `${themeStories}${template(theme.replace(/\'/g, ''))}`
  }, '')

  await fsExtra.writeFile(
    fileName,
    contentPieces.join(`/* generated content below */
    `)
  )
}

styleDocGen()
