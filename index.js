const fs = require('fs')
const io = require('./core/io')
const find = require('./core/find')
const operations = require('./core/operations')
const path = require('path')
const jsome = require('jsome')
const pj = require('prettyjson')
// for benchmarking
const microtime = require('microtime')
const benchmarking = require('./core/benchmarking')




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

	loadFile(filename) {
		let filePath = path.join(this.dirname, filename)
		const res = io.readFile(filePath, 'utf8')
		this.STORE.push({
			"title": filename,
			"data": JSON.parse(res),
			"meta": []
		})
		this.ACTIVE_FILE = filename
	}
	saveFile(options) {
		let filePath = path.join(this.dirname, this.ACTIVE_FILE)
		if (options) {
			if (options.padding) {
				const write = io.writeFile(filePath, JSON.stringify(this.HOME, null, options.padding))
			} 
			if (options.saveas) {
				const write = io.writeFile(options.saveas, JSON.stringify(this.HOME, null, 4))
			} else {
				const write = io.writeFile(filePath, JSON.stringify(this.HOME))
			}
		} else {
			const write = io.writeFile(filePath, JSON.stringify(this.HOME))
		}
	}

	printFile(filename) {
		// if no parameter is given, the ACTIVE_FILE is logged
		if (filename === undefined) {
			console.log("File content:")
			console.log(pj.render(find.Object(this.STORE, "title", this.ACTIVE_FILE).data), {noColor: true})
			console.log("File metadata:")
			console.log(find.Object(this.STORE, "title", this.ACTIVE_FILE).meta)
		} else {
			console.log("Filename '%s' matches no loaded files.", filename)
		}
	}

	setActiveFile(filename) {
		if (find.Object(this.STORE, "title", filename) != null) {
			this.ACTIVE_FILE = filename
			this.HOME = find.Object(this.STORE, "title", this.ACTIVE_FILE).data
		} else {
			return -1
		}
	}
}



// find things
Snap.prototype.Find = find
// Insert, Edit, Delete etc
Snap.prototype.Edit = operations.Edit
Snap.prototype.Query = operations.Query
Snap.prototype.Delete = operations.Delete
Snap.prototype.Insert = operations.Insert

Snap.prototype.Time = benchmarking.Time
Snap.prototype.Log = benchmarking.Log


module.exports = Snap

