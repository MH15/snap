const fs = require('fs')

const readFile = (path, opts = 'utf8') => {
	// console.log(path)
	let content = fs.readFileSync(path, opts)
	return content
}


const writeFile = (path, data, opts = 'utf8') =>
	new Promise((res, rej) => {
		fs.writeFile(path, data, opts, (err) => {
			if (err) rej(err)
			else res()
		})
	}).catch(() => {
		console.log("err")
	})

module.exports = {
	readFile,
	writeFile
}