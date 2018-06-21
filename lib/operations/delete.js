class Operations {
  // Delete
  // -
  // Delete something from the dataset
  Delete(object, path) {
    // Get path elements
    let paths = path.split('.')

    // Generate access id
    let accessString = 'object.' + paths.join('.')

    // Execute command
    eval('delete ' + accessString)

    // Update references
    this.HOME = object
    return this.HOME
  }
}

module.exports = Operations.prototype.Delete
