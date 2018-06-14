// Delete, Edit, Store, Insert etc

class Operations {
	Edit(path, replacement) {
		if (this.Find.resolvePath(this.HOME, path)) {
			this.Find.setPath(this.HOME, path, replacement)
			return this.HOME
		} else {
			return -1
		}
	}
	Delete(object, path, defaultValue) {
		let paths = path.split('.')
		let accessString = "object." + paths.join('.')
		// console.log(eval(accessString + "='a'"))
		eval("delete " + accessString)
		this.HOME = object
		return this.HOME
	}

	Insert(path, insertion) {
		if (this.Find.resolvePath(this.HOME, path)) {
			return -1
		} else {
			let paths = path.split('.')
			let accessString = "this.HOME." + paths.join('.')
			eval(accessString + "=" + "insertion")
			return this.HOME
		}
	}

	Query(path) {
		let query = this.Find.resolvePath(this.HOME, path)
		if (query) {
			return query
		} else {
			return -1
		}
	}

}


module.exports = new Operations()