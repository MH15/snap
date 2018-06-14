// require main library
const snap = require('./index')

// feed Snap the current __dirname
const Snap = new snap(__dirname)

// load file
// Snap.loadFile("test/data.json")
Snap.loadFile("test/data2.json")

Snap.setActiveFile("test/data2.json")

Snap.CursorHome()
// console.log(Snap.HOME)

// Snap.CursorDown("root")
// Snap.CursorDown("properties")


console.log(Snap.HOME)
// console.log(Snap.Edit("root.properties", {type: "wad"}))
// console.log(Snap.Query("root.properties.firstNamaae"))

Snap.Delete(Snap.HOME, "root.properties.firstName")
// Snap.Delete(Snap.HOME, "root.properties.firstName")
console.log(Snap.HOME.root.properties)

Snap.Insert("root.properties.firstName", {"title": "phhhh"})
console.log(Snap.HOME.root.properties)

// console.log(Snap.HOME)
// console.log("\n\n\n")
// setPath(this.HOME, 'root', 'hetero')

// console.log(Snap.HOME)































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






