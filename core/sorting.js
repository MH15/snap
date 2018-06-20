class Sorting {
	fieldSorter(fields) {
		return function (a, b) {
			return fields
				.map(function (o) {
					var dir = 1;
					if (o[0] === '-') {
					   dir = -1;
					   o=o.substring(1);
					}
					if (a[o] > b[o]) return dir;
					if (a[o] < b[o]) return -(dir);
					return 0;
				})
				.reduce(function firstNonZeroValue (p,n) {
					return p ? p : n;
				}, 0);
		};
	}
}



module.exports = new Sorting()