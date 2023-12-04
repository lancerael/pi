{
  const fs = require('fs-extra')
  const path = require('path')

  const customReadmes = ['@pi-lib/charts']
  const nonComponents = [
    '@pi-lib/config',
    '@pi-lib/constants',
    '@pi-lib/utils',
    '@pi-lib/styles',
    '@pi-lib/charts',
    '@pi-lib/types',
  ]

  /**
   * Get a list of all the package JSON files for documentation
   */
  const getPackageJsonFiles = async () => {
    const packageJsonFiles = []
    const searchForPackageJsonFiles = async (dirPath) => {
      const files = await fs.readdir(dirPath)
      for (const file of files) {
        const filePath = path.join(dirPath, file)
        if (!filePath.includes('node_modules')) {
          if (file === 'package.json') {
            packageJsonFiles.push(filePath.replace(/\\/g, '/'))
          } else if ((await fs.stat(filePath)).isDirectory()) {
            await searchForPackageJsonFiles(filePath)
          }
        }
      }
    }
    await searchForPackageJsonFiles('./src')
    return packageJsonFiles
  }

  /**
   * Generate the readme template
   */
  const readmeTemplate = (
    componentName,
    { name, description, homepage, repository: { directory }, peerDependencies }
  ) => {
    return `### ${componentName}

**${name}**

${description}

${
  !!peerDependencies
    ? `**Peer Dependencies:** ${Object.keys(peerDependencies).join(', ')}`
    : ''
}

<table>
  <tbody>
    <tr>${
      !!homepage
        ? `
      <td><a href="${homepage}" target="_blank">Docs</a></td>`
        : ''
    }
      <td><a href="https://www.npmjs.com/package/${name}?activeTab=readme" target="_blank">NPM</a></td>
      <td><a href="https://github.com/lancerael/pi/tree/main/${directory}" target="_blank">Github</a></td>
    </tr>
  </tbody>
</table>

`
  }

  /**
   * Update all the readmes
   */
  const updateReadmes = async () => {
    const allReadmes = {
      Theming: [],
      Atoms: [],
      Molecules: [],
      Utilities: [],
    }
    const packageJsonFiles = await getPackageJsonFiles()
    // Update individual readmes
    packageJsonFiles.forEach(async (filePath) => {
      const location = filePath.split('/package.json')[0]
      const fileContents = await fs.readFile(filePath, 'utf8')
      const parsedContents = JSON.parse(fileContents)
      const componentName = location.split('/').pop()
      if (
        parsedContents.private ||
        !parsedContents.name ||
        customReadmes.includes(parsedContents.name)
      )
        return
      const componentReadme = readmeTemplate(componentName, parsedContents)
      Object.keys(allReadmes).forEach((readmeKey) => {
        if (parsedContents.keywords?.includes(readmeKey.toLowerCase())) {
          allReadmes[readmeKey].push(componentReadme)
        }
      })

      // Update readme
      await fs.writeFile(`${location}/README.md`, componentReadme)

      // Update component comment
      if (!nonComponents.includes(parsedContents.name)) {
        const componentPath = `${location}/src/${componentName}.ts${
          location.includes('components') ? 'x' : ''
        }`
        const componentContents = await fs.readFile(componentPath, 'utf8')
        if (
          componentContents.match(/\/\*\*[\s\S]+?\*\//)[0].split('\n').length <=
          3
        ) {
          await fs.writeFile(
            componentPath,
            componentContents.replace(
              /\/\*\*\r?\n\s+\*[^]*?\r?\n\s+\*\//,
              `/**
 * ${parsedContents.description}
 */`
            )
          )
        }
      }
    })

    // Updade main readme
    const splitter = '<!--- readmeGen --->'
    const mainContents = await fs.readFile('./README.md', 'utf8')
    const contentPieces = mainContents.split(splitter)
    contentPieces[1] = Object.entries(allReadmes)
      .map(([thisSection, sectionReadmes]) => {
        return `
## ${thisSection}
${sectionReadmes.sort().join(`\r\n\r\n`)}`
      }, '')
      .join('')
    await fs.writeFile('./README.md', contentPieces.join(splitter))
  }

  updateReadmes()
}
