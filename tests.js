// require main library
const snap = require('./index')
const Benchmark = require('benchmark')

let suite = new Benchmark.Suite


// feed Snap the current __dirname
const Snap = new snap(__dirname)
// Snap.loadFile("test/data0.json")
// Snap.loadFile("test/data1.json")
// Snap.loadFile("test/data2.json")
const saveOptions = {
	padding: 4
}


// // activate before using
// Snap.setActiveFile("test/data2.json")
// let a = Snap.Query("name")

// Snap.setActiveFile("test/data1.json")
// let b = Snap.Edit("quiz.sport.q1", {"foo":"bar"})
// Snap.saveFile(saveOptions)


// Snap.setActiveFile("test/data0.json")
// let c = Snap.Query("required")

// console.log(a)
// console.log(b)
// console.log(c)



Snap.loadFile("test/data1.json")
Snap.setActiveFile("test/data1.json")





// TESTS: Keep for Readme.md


// Querying to deep levels does indeed slow things down
// Snap.Time("Snap.Query() shallow", 1000000, () => {
// 	let b = Snap.Query("quiz")
// })
// Snap.Time("Snap.Query() deep", 1000000, () => {
// 	let b = Snap.Query("quiz.maths.q1.maths.q2.maths.q1.options")
// })


// Editing with a substatially larger replacement object
// does not drastically increase the execution time

// files reset before each measurement
let large = {"quiz":{"sport":{"q1":{"question":"Which one is correct team name in NBA?","options":["New York Bulls","Los Angeles Kings","Golden State Warriros","Huston Rocket"],"answer":"Huston Rocket"}},"maths":{"q1":{"question":"5 + 7 = ?","options":["10","11","12","13"],"answer":"12","maths":{"q1":{"question":"5 + 7 = ?","options":["10","11","12","13"],"answer":"12"},"q2":{"question":"12 - 8 = ?","options":["1","2","3","4"],"answer":"4","maths":{"q1":{"question":"5 + 7 = ?","options":["10","11","12","13"],"answer":"12"},"q2":{"question":"12 - 8 = ?","options":["1","2","3","4"],"answer":"4"}}}}},"q2":{"question":"12 - 8 = ?","options":["1","2","3","4"],"answer":"4"}}}}
let small = {"foo":"bar"}

Snap.loadFile("test/data1.json")
Snap.setActiveFile("test/data1.json")
Snap.Time("edit", 1000000, () => {
	let b = Snap.Edit("quiz.sport.q1", large)
})

Snap.loadFile("test/data1.json")
Snap.setActiveFile("test/data1.json")
Snap.Time("delete", 1000000, () => {
	let b = Snap.Edit("quiz.sport.q1", small)
})


// Snap.Time("insert", 1000000, () => {
// 	let b = Snap.Edit("quiz.sport.q2", {"foo":"bar"})
// })







































// debugging only - works with the Chrome Debugger to visualize objects
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

function capitalize (str) {
  const firstLetter = str.charAt(0) // we can check what's inside here
  return `${firstLetter.toUpperCase()}${str.slice(1)}`
}

app.get('/:name?', (req, res) => {
  const name = req.params.name ? capitalize(req.params.name) : 'World'
  res.send(`Hello ${name}!`)
  
})

// app.listen(PORT, () => console.log(`App listening on *:${PORT}`))






