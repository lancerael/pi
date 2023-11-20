const fs = require('fs-extra')

const [node, _location, destinationPath, id] = process.argv
const lcName = id.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()
const source = './generator'
const destination = `./${destinationPath}/${id}`
const files = ['package.json', 'tsconfig.json', 'vite.config.ts']
const subFiles = [
  '_NAME_.stories.tsx',
  '_NAME_.style.ts',
  '_NAME_.style.types.ts',
  '_NAME_.test.tsx',
  '_NAME_.tsx',
  '_NAME_.types.ts',
  '_NAME_index.ts',
]

/**
 * Generate a new component
 */
const generate = async () => {
  try {
    await fs.ensureDir(destination)
    for (const fileName of ['src', ...files]) {
      const fullDestinationPath = `${destination}/${fileName}`
      await fs.copy(`${source}/${fileName}`, fullDestinationPath)
      if (fileName !== 'src') {
        const fileContents = await fs.readFile(fullDestinationPath, 'utf8')
        await fs.writeFile(
          fullDestinationPath,
          fileContents
            .replace(/_LC_NAME_/g, lcName)
            .replace(/_NAME_/g, id)
            .replace(/_FULL_PATH_/g, `${destinationPath}/${id}`)
        )
      }
    }
    for (const fileName of subFiles) {
      const oldFileName = `${destination}/src/${fileName}`
      const newFileName = oldFileName.replace(
        /_NAME_/g,
        oldFileName.match('index') ? '' : id
      )
      const fileContents = await fs.readFile(oldFileName, 'utf8')
      await fs.writeFile(
        newFileName,
        fileContents.replace(/_LC_NAME_/g, lcName).replace(/_NAME_/g, id)
      )
      await fs.unlink(oldFileName)
    }
    console.log('Success!')
  } catch (err) {
    console.error(err)
  }
}
generate()
