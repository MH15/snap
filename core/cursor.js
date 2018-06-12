// moves the cursor up and down in the schema
const find = require('./find')

class Cursor {
	constructor() {

	}
	Home(doNotRecord) {
		this.HOME = find.Object(this.STORE, "title", this.ACTIVE_FILE).data
		this.CURSOR = this.HOME
		// see documentation
		this.CURSOR_DEPTH = []
		if (doNotRecord != true) {
			this.H_CURSOR.push({
				"move": "home"
			})

		}
		return this.HOME
	}
	Up() {
		// console.log(this)
	}

	Down(field, doNotRecord) {
		if(this.CURSOR[field]) {
			this.CURSOR = this.CURSOR[field]
			if (doNotRecord != true) {
				this.H_CURSOR.push({
					"move": "down",
					"to": field
				})
				this.CURSOR_DEPTH.push(field)
			}
			return this.CURSOR
		} else {
			return -1
		}
	}

	Push() {
		// this.HOME
		let resolvedPath = this.CURSOR_DEPTH.join('.')
		// let newHome = find.resolvePath(this.HOME, resolvedPath)
		let newHome = find.setPath(this.HOME, resolvedPath, this.CURSOR)
		this.HOME = newHome
		return this.HOME

	}

	HistoryPrevious() { // TODO: make sure that this function returns -1 when it can't go any higher.
		let historyTemporary = this.H_CURSOR.slice(0, this.H_CURSOR.length - 1)
		if (historyTemporary.length != 0) {
			// reset CURSOR_DEPTH so CURSOR can be properly added to HOME
			this.CURSOR_DEPTH = 0
			for (let i = 0; i < historyTemporary.length; i++) {
				// console.log(i)
				let move = historyTemporary[i].move
				let to = historyTemporary[i].to
				switch (move) {
					case "home":
						this.CursorHome(true)
						break
					case "down":
						this.CursorDown(to, true)
						break
				}
			}
			this.H_CURSOR = historyTemporary
			return this.CURSOR
		} else {
			// No more previous functions
			return -1
		}

	}


	


}




module.exports = new Cursor()