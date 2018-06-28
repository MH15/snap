const unsure = require('./lib/unsure')

// New unsure instance
let d = new unsure(__dirname)

// Load files
d.loadFile('data/data01.json')
// d.loadFile('data/meteorite-landings.json')

// query pokedex
d.setActiveFile('data/data01.json')

// d.Time('delete', 1e6, () => {
//   let b = d.Delete(d.HOME, 'quiz.maths.q1.maths.q1')
// })
// d.Time('edit', 1e6, () => {
//   let b = d.Edit('quiz.maths.q1.question', {
//     'hello': 'world',
//     'number': 1e6
//   })
// })
// d.Time('insert', 1e6, () => {
//   let b = d.Insert('quiz.maths.q1.question', {
//     'hello': 'world',
//     'number': 1e6
//   })
// })
// d.Time('query', 1e6, () => {
  let b = d.Query('.')
  console.log(b)
// })

// query meteorite landings
// d.setActiveFile('data/meteorite-landings.json')
// console.log(d.Query('root.geolocation'))


d.saveFile().then(data => {
	console.log("Save Success!")
}).catch(err => {
	console.log(err)
})
