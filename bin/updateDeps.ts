const fs = require('fs')
const path = require('path')

const generatorPath = path.join(__dirname, '../generator/package.json')
const generatorJson = JSON.parse(fs.readFileSync(generatorPath, 'utf8'))

/**
 * Reads and updates a package.json file's dependencies to match the reference.
 * @param {string} filePath - Path to the package.json file.
 */
const updatePackageFile = (filePath) => {
  console.log(`Updating deps in ${filePath}`)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  ;['devDependencies', 'peerDependencies'].forEach((type) => {
    for (const dep in generatorJson[type]) {
      if (data[type]?.[dep]) {
        data[type][dep] = generatorJson[type][dep]
      }
    }
  })
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

/**
 * Recursively walks through directories and updates package.json files.
 * @param {string} dir - Directory path to start walking from.
 */
const walkDir = (dir) => {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filepath = path.join(dir, file)
    const stats = fs.statSync(filepath)
    if (stats.isDirectory() && file !== 'node_modules') {
      walkDir(filepath)
    } else if (file === 'package.json' && filepath !== generatorPath) {
      updatePackageFile(filepath)
    }
  }
}

walkDir('./src')
