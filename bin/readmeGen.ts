const fsX = require('fs-extra')
const path = require('path')

const monorepoPath = './src'

const customReadmes = ['@pi-lib/charts']

const getPackageJsonFiles = async () => {
  const packageJsonFiles = []

  const searchForPackageJsonFiles = async (dirPath) => {
    const files = await fsX.readdir(dirPath)

    for (const file of files) {
      const filePath = path.join(dirPath, file)

      if (!filePath.includes('node_modules')) {
        if (file === 'package.json') {
          packageJsonFiles.push(filePath.replace(/\\/g, '/'))
        } else if ((await fsX.stat(filePath)).isDirectory()) {
          await searchForPackageJsonFiles(filePath)
        }
      }
    }
  }

  await searchForPackageJsonFiles(monorepoPath)

  return packageJsonFiles
}

const readmeTemplate = (
  filePath,
  {
    name,
    version,
    description,
    keywords,
    homepage,
    repository: { directory },
    peerDependencies,
  }
) => {
  const fileParts = filePath.split('/')
  const label = fileParts[fileParts.length - 2]
  return `
#### ${label}

#${name}# _${version}_

${description}
Keywords: ${keywords.join(', ')}
${
  !!homepage
    ? `
Docs: ${homepage}`
    : ''
}
NPM: https://www.npmjs.com/package/${name}
Github: https://github.com/lancerael/pi/${directory}
${
  !!peerDependencies
    ? `
Dependencies: ${Object.keys(peerDependencies).join(', ')}`
    : ''
}
`
}

const updateReadmes = async () => {
  const mainReadme = ''
  const packageJsonFiles = await getPackageJsonFiles()
  packageJsonFiles.forEach(async (filePath) => {
    const fileContents = await fsX.readFile(filePath, 'utf8')
    const parsedContents = JSON.parse(fileContents)
    if (parsedContents.private) return
    const componentReadme = readmeTemplate(filePath, parsedContents)
    await fsExtra.writeFile(
      filePath.split('/package.json')[0],
      readmeTemplate(filePath, parsedContents)
    )
    ;('<!--- readmeGen --->')
  })
}

updateReadmes()
