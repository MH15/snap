// Algorithims for finding stuff, etc
class Find {
	findObjectByKey(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
		return null;
	}
	count(object) {
		let keys = Object.keys(object)
		// console.log(keys)
		return keys.length
	}
} 


module.exports = new Find()