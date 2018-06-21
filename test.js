const unsure = require('./lib/unsure')

// New unsure instance
let d = new unsure(__dirname)

// Load files
d.loadFile('data/pokedex.json')
d.loadFile('data/meteorite-landings.json')

// query pokedex
d.setActiveFile('data/pokedex.json')
console.log(d.Query('pokemon.next_evolution.name'))

d.Time('delete', 1e6, () => {
  let b = d.Edit('pokemon', {
    'hello': 'world',
    'number': 1e6
  })
})

// query meteorite landings
d.setActiveFile('data/meteorite-landings.json')
console.log(d.Query('root.geolocation'))
