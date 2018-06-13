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
		let a = path.split('.')
		// let b = a.reduce((o, p) => o ? o[p] : defaultValue, object)
		let b = a.reduce((obj, prop) => {
			// return obj ? obj[prop] : defaultValue
			if (obj) {
				return obj[prop]
			} else {
				return null
			}
		}, object)
		

		let paths = path.split('.')
		let accessString = "object." + paths.join('.')
		// console.log(eval(accessString + "='a'"))

		eval("delete " + accessString)
		this.HOME = object
		return this.HOME
		
	}

	Insert() {

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