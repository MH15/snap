class Operations {
  // Query
  // -
  // Query for some data
  Query(path) {
    // Execute query
    let query = this.Find.resolvePath(this.HOME, path)

    // Return query or error
    return (query ? query : -1)
  }
}

module.exports = Operations.prototype.Query
