const fs = require('fs')
const io = require('./core/io')
const find = require('./core/find')
const path = require('path')


// all files loaded stored here
let STORE = []
let ACTIVE_FILE = ""
let LOCK = false

module.exports = class Snap {
	constructor(dirname) {
		this.dirname = dirname
		// console.log("Snap.js loaded at %s in directory %s.", new Date().toLocaleString(), dirname)
	}

	loadFile(file) {
		let filePath = path.join(this.dirname, file)
		const res = io.readFile(filePath, 'utf8')
		STORE.push({
			"title": file,
			"data": JSON.parse(res),
			"meta": []
		})
		ACTIVE_FILE = file
	}
	printFile(file) {
		// if no parameter is given, the ACTIVE_FILE is logged
		if (file === undefined) {
			console.log("File content:")
			console.log(find.findObjectByKey(STORE, "title", ACTIVE_FILE).data)
			console.log("File metadata:")
			console.log(find.findObjectByKey(STORE, "title", ACTIVE_FILE).meta)
		} else {
			console.log("File content:")
			console.log(find.findObjectByKey(STORE, "title", file).data)
			console.log("File metadata:")
			console.log(find.findObjectByKey(STORE, "title", file).meta)
		}
	}

	}	
