// Algorithims for finding stuff, etc
class Find {
	Object(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
		return null;
	}
	ObjectIndex(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return i;
			}
		}
		return null;

	}

	resolvePath(object, path, defaultValue) {
		let a = path.split('.')
		let b = a.reduce((obj, prop) => {
			// return obj ? obj[prop] : defaultValue
			if (obj) {
				return obj[prop]
			} else {
				return null
			}
		}, object)
		return b
	}

	setPath(object, path, value) {
		// console.log(path)
		let a = path.split('.')
		let b = a.reduce((o,p) => o[p] = path.split('.').pop() === p ? value : o[p] || {}, object)
		// console.log(path)
		return b
	}

	Count(object) {
		let keys = Object.keys(object)
		// console.log(keys)
		return keys.length
	}
	Keys(object) {
		let keys = Object.keys(object)
		return keys
	}

	
} 


module.exports = new Find()