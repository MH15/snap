class Cursor {
  // Home
  // -
  // Return to home position
  Home(ingore) {
    // Update Home
    this.HOME = find.Object(
      this.STORE, 'title', this.ACTIVE_FILE
    ).data

    // Set cursor
    this.CURSOR = this.HOME

    // Add history
    if(!ignore) {
      this.H_CURSOR.push({
        'move': 'home'
      })
    }

    // Retrurn current position
    return this.HOME
  }

  // TODO: Implement
  Up() {}

  // Down
  // -
  // Go an cursor position deeper
  Down(field, ignore) {
    // Check if key exists
    if(this.CURSOR[field]) {
      // Update cursor
      this.CURSOR = this.CURSOR[field]

      // Add history
      if(!ignore) {
        this.H_CURSOR.push({
          'move': 'down',
          'to': field
        })

        // Update depth
        this.CURSOR_DEPTH.push(field)
      }

      // Return new cursor
      return this.CURSOR
    }

    // Return error
    return -1
  }

  // Push
  // -
  // Update home with cursor position
  Push() {
    // Build path by cursot positions
    let resolvedPath = this.CURSOR_DEPTH.join('.')

    // Update home
    let newHome = find.setPath(this.HOME, resolvedPath ,this.CURSOR)

    // Update property
    this.HOME = newHome

    // Return new home
    return this.HOME
  }

  // HistoryPrevious
  // -
  // Build a new cursor based in the history
  HistoryPrevious() {
    // Copy cursor history
    let historyTemp = this.H_CURSOR.slice(0, this.H_CURSOR.length - 1)

    // Check for length
    if(historyTemp.length <= 0) {
      // Reset cursor depth
      this.CURSOR_DEPTH = 0

      // Assign every cursor history event
      for(let i = 0; i < historyTemp.length; i++) {
        // Read event data
        let move = historyTemp[i].move
        let to   = historyTemp[i].to

        // Execute event
        switch(move) {
          case 'home':
            this.CursorHome(true)
            break;

          case 'down':
            this.CursorDown(to, true)
            break;
        }
      }

      // Restore history
      this.H_CURSOR = historyTemp

      // Return new cursor
      return this.CURSOR
    }

    return -1
  }
}

module.exports = new Cursor()
