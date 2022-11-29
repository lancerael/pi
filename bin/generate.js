const fs = require('fs-extra')

const [node, location, path, name] = process.argv
const lcName = name.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()
const source = './generator'
const destination = `./${path}/${name}`
const files = ['package.json', 'tsconfig.json', 'vite.config.ts']
const subFiles = [
  '_NAME_.stories.tsx',
  '_NAME_.style.ts',
  '_NAME_.style.types.ts',
  '_NAME_.test.tsx',
  '_NAME_.tsx',
  '_NAME_.types.ts',
  'index.ts',
]
const generate = async () => {
  try {
    await fs.ensureDir(destination)
    for (const fileName of ['src', ...files]) {
      await fs.copy(`${source}/${fileName}`, `${destination}/${fileName}`)
      if (fileName !== 'src') {
        const fileContents = await fs.readFile(
          `${destination}/${fileName}`,
          'utf8'
        )
        await fs.writeFile(
          `${destination}/${fileName}`,
          fileContents.replace(/_LC_NAME_/g, lcName).replace(/_NAME_/g, name)
        )
      }
    }
    for (const fileName of subFiles) {
      const oldFileName = `${destination}/src/${fileName}`
      const newFileName = `${destination}/src/${fileName.replace(
        /_NAME_/g,
        name
      )}`
      if (!oldFileName.match('index')) {
        const fileContents = await fs.readFile(oldFileName, 'utf8')
        await fs.writeFile(newFileName, fileContents.replace(/_NAME_/g, name))
        await fs.unlink(oldFileName)
      }
    }
    console.log('Success!')
  } catch (err) {
    console.error(err)
  }
}
generate()
