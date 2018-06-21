class Operations {
  // Insert
  // -
  // Insert new data to the dataset
  Insert(path, insertion) {
    // Check if dataset exists
    if(this.Find.resolvePath(this.HOME, path)) {
      // Return error
      return -1
    }

    // Generate access id
    let accessString = 'this.HOME.' + path

    // Execute command
    eval(accessString + '=' + insertion)

    // Return reference
    return this.HOME
  }
}

module.exports = Operations.prototype.Insert
