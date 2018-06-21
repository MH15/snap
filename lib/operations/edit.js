class Operations {
  // Edit
  // -
  // Update data
  Edit(path, replacement) {
    // Check if dataset could be found
    if(this.Find.resolvePath(this.HOME, path)) {
      // Replace data
      this.Find.setPath(this.HOME, path, replacement)

      // Return reference
      return this.HOME
    }

    // Return error
    return -1
  }
}

module.exports = Operations.prototype.Edit
