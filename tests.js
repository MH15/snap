// require main library
const snap = require('./index')

// feed Snap the current __dirname
const Snap = new snap(__dirname)

// load file
// Snap.loadFile("test/data.json")
Snap.loadFile("test/data2.json")

Snap.setActiveFile("test/data.json")

Snap.CursorHome()
// console.log(Snap.CURSOR)

Snap.CursorDown("root")
Snap.CursorDown("properties")
Snap.CursorDown("firstName")
Snap.CursorDown("type")
console.log(Snap.CURSOR)

console.log(Snap.CursorHistoryPrevious())
console.log(Snap.CURSOR)
console.log(Snap.CursorHistoryPrevious())
console.log(Snap.CURSOR)
console.log(Snap.CursorHistoryPrevious())
console.log(Snap.CURSOR)
console.log(Snap.CursorHistoryPrevious())
console.log(Snap.CURSOR)