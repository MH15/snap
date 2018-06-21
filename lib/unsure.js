const path = require('path')
const io = require('./io')

class Unsure {
  // constructor
  // -
  // Initialize a new unsure class
  constructor(dirname) {
    // Store the loaded files
    this.STORE = []

    // Keep track of the current file
    this.ACTIVE_FILE = ''

    // Reference the current object
    this.CURSOR = null

    // Store every used cursor
    this.H_CURSOR = []

    // Store path information
    this.dirname = dirname
  }

  // loadFile
  // -
  // Load a new file to the store
  loadFile(filename) {
    // Generate full path
    let filePath = path.join(this.dirname, filename)

    // Read file content
    const res = io.readFile(filePath, 'utf8')

    // Read the file content
    this.STORE.push({
      'title': filename,
      'data': JSON.parse(res),
      'meta': []
    })

    // Update current file
    this.ACTIVE_FILE = filename
  }

  // saveFile
  // -
  // Store a file edited by unsure
  saveFile(options) {
    // Generate full path
    let filePath = path.join(this.dirname, this.ACTIVE_FILE)

    // Check if options are set
    if(options) {
      // Store write result
      let write = null

      // Check for padding option
      if(options.padding) {
        write = io.writeFile(filePath, JSON.stringify(this.HOME, null, options.padding))
      }

      // Check for save as
      if(options.saveas) {
        write = io.writeFile(options.saveas, JSON.stringify(this.HOME))
      }

      return
    }

    // Default write action
    io.writeFile(filePath, JSON.stringify(this.HOME))
  }

  // printFile
  // -
  // Print file content of the active file to the console
  printFile() {
    // Check if active file is set
    if(this.ACTIVE_FILE == '') {
      return console.log('No active file set')
    }

    // Print file content
    console.log('File content:')
    console.log(pj.render(
      this.Find.Object(this.STORE, 'title', this.ACTIVE_FILE).data,
      {
        noColor: true
      }
    ))

    // Print file information
    console.log("File metadata:")
    console.log(find.Object(this.STORE, "title", this.ACTIVE_FILE).meta)
  }

  // setActiveFile
  // -
  // Update the selected file
  setActiveFile(filename) {
    // Check if file exists
    if(this.Find.Object(this.STORE, 'title', filename) != null) {
      // Update settings
      this.ACTIVE_FILE = filename
      this.HOME = this.Find.Object(this.STORE, 'title', this.ACTIVE_FILE).data

      // Return filename
      return filename
    }

    // Return error
    return -1
  }
}

// Assign operations
Unsure.prototype.Insert = require('./operations/insert')
Unsure.prototype.Edit   = require('./operations/edit')
Unsure.prototype.Delete = require('./operations/delete')
Unsure.prototype.Query  = require('./operations/query')
Unsure.prototype.Find   = require('./operations/find')

// Export Unsure class
module.exports = Unsure
