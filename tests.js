// require main library
const snap = require('./index')

// feed Snap the current __dirname
const Snap = new snap(__dirname)

// load file
Snap.loadFile("test/data.json")
Snap.loadFile("test/data2.json")

Snap.printFile("test/data.json")
Snap.printFile("test/data2.json")