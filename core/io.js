const fs = require('fs')

const readFile = (path, opts = 'utf8') => {
	// console.log(path)
	let content = fs.readFileSync(path, opts)
	return content
}


const writeFile = (path, data, opts = 'utf8') => {
	fs.writeFile(path, data, (err) => {
		if (err) throw err
		return 1
	})
}


module.exports = {
	readFile,
	writeFile
}