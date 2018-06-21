// Load libraries
const fs = require('fs')

// readFile
// -
// Simplify read file call
const readFile = (path, opts = 'utf8') => {
  // Read the content
  let content = fs.readFileSync(path, opts)

  // Return content
  return content
}

// writeFile
// -
// Simplify write file call
const writeFile = (path, data, opts = 'utf8') => {
  // Write content with callback
  fs.writeFile(path, data, (err) => {
    // Throw error if one exists
    if(err) throw err

    // Return success
    return 1
  })
}

// Export functions
module.exports = {
  readFile,
  writeFile
}
