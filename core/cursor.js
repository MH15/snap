// moves the cursor up and down in the schema
const find = require('./find')

class Cursor {
	constructor() {

	}
	Home() {
		this.HOME = find.findObjectByKey(this.STORE, "title", this.ACTIVE_FILE).data
		this.CURSOR = this.HOME
		this.H_CURSOR.push({
			"move": "home"
		})
		return this.HOME
	}
	Up() {
		// console.log(this)
	}
	Down(field) {
		if(this.CURSOR[field]) {
			this.CURSOR = this.CURSOR[field]
			this.H_CURSOR.push({
				"move": "down",
				"to": field
			})
			return this.CURSOR
		} else {
			return -1
		}
	}
	HistoryPrevious() {
		let historyTemporary = this.H_CURSOR.slice(0, this.H_CURSOR.length - 1)
		
		for (let i = 0; i < historyTemporary.length; i++) {
			// console.log(i)
			let move = historyTemporary[i].move
			let to = historyTemporary[i].to
			switch (move) {
				case "home":
					this.CursorHome()
					break
				case "down":
					this.CursorDown(to)
					break
			}
		}
	}
	HistoryNext() {

	}


}




module.exports = new Cursor()