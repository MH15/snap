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