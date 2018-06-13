const fs = require('fs')
const io = require('./core/io')
const find = require('./core/find')
const operations = require('./core/operations')
const path = require('path')




class Snap {
	constructor(dirname) {
		// all files loaded stored here
		this.STORE = []
		this.ACTIVE_FILE = ""
		// cursor marks an element
		this.CURSOR = ""
		// H_CURSOR keeps the history of the cursor in an array
		this.H_CURSOR = []
		this.CURSOR_DEPTH = []
		// keeping the paths straight
		this.dirname = dirname
		// console.log("Snap.js loaded at %s in directory %s.", new Date().toLocaleString(), dirname)
		this.MAX_DEPTH = 40
	}

	loadFile(file) {
		let filePath = path.join(this.dirname, file)
		const res = io.readFile(filePath, 'utf8')
		this.STORE.push({
			"title": file,
			"data": JSON.parse(res),
			"meta": []
		})
		this.ACTIVE_FILE = file
	}
	printFile(filename) {
		// if no parameter is given, the ACTIVE_FILE is logged
		if (file === undefined) {
			console.log("File content:")
			console.log(find.Object(this.STORE, "title", this.ACTIVE_FILE).data)
			console.log("File metadata:")
			console.log(find.Object(this.STORE, "title", this.ACTIVE_FILE).meta)
		} else {
			console.log("File content:")
			console.log(find.Object(this.STORE, "title", filename).data)
			console.log("File metadata:")
			console.log(find.Object(this.STORE, "title", filename).meta)
		}
	}
	setActiveFile(filename) {
		if (find.Object(this.STORE, "title", filename) != null) {
			this.ACTIVE_FILE = filename
		}
	}



}	

const Cursor = require('./core/cursor')

// cursor to move within the schema
Snap.prototype.CursorUp = Cursor.Up
Snap.prototype.CursorDown = Cursor.Down
Snap.prototype.CursorHome = Cursor.Home
Snap.prototype.CursorHistoryPrevious = Cursor.HistoryPrevious
Snap.prototype.CursorHistoryNext = Cursor.HistoryNext
Snap.prototype.CursorPush = Cursor.Push

// find things
Snap.prototype.Find = find
// Insert, Edit, Delete etc
Snap.prototype.Edit = operations.Edit
Snap.prototype.Query = operations.Query
Snap.prototype.Delete = operations.Delete


module.exports = Snap

