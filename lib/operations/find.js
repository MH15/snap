class Find {
  // ObjectIndex
  // -
  // Find object in array by key and return index
  ObjectIndex(array, key, value) {
    // For each element
    for(let i = 0; i < array.length; i++) {
      // Compare values
      if(array[i][key] === value) {
        // Return element
        return i;
      }
    }

    // Return error
    return null
  }

  // Object
  // -
  // Find object in array by key
  Object(array, key, value) {
    return array[this.ObjectIndex(array, key, value)]
  }

  // resolvePath
  // -
  // Resolve a given path
  resolvePath(object, path, defaultValue) {
    // Split path to elements
    let paths = path.split('.')

    // Reduce paths array
    let objectProp = paths.reduce((obj, prop) => {
      return (obj ? obj : null)
    }, object)

    // Return reduced path
    return objectProp
  }

  // setPath
  // -
  // Change path
  setPath(object, path, value) {
    // Split path to elements
    let paths = path.split('.')

    // Reduce path array
    let objectProp = paths.reduce((o,p) => {
      o[p] = path.split('.').pop() === p ? value : o[p] || {}
    }, object)

    // Return reduced path
    return objectProp
  }

  // Count
  // -
  // Count keys of object
  Count(object) {
    return Object.keys(object).length
  }

  // Keys
  // -
  // Read keys of Object
  Key(object) {
    return Objec.keys(object)
  }
}

module.exports = new Find()
