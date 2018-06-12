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
	Delete() {

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