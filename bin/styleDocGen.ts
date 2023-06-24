{
  const fs = require('fs-extra')
  const fileName = './src/styles/docs/styles.stories.tsx'
  const themeFile = './src/styles/src/themes/themes.types.ts'

  /**
   * Generate the teplate for the story
   */
  const template = (name) => `
export const ${
    name.charAt(0).toUpperCase() + name.slice(1)
  }: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: '${name}',
  },
}
`

  /**
   * Update theme story file with stories for the latest themes
   */
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
}
