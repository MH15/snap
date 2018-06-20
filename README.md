# snap
JSON toolkit that's pretty good

## Goals
- Use JSON efficiently and effectively
- Parse files with ease
- Work non-destructively with a concurrent source of truth





## Usage
Here's an example usage of the system.

```javascript
const snap = require('snap')
// Snap operates with Global Paths.
const Snap = new snap(__dirname)
// Load as many files as you need, but be sure to 'setActiveFile()' before performing any operations.
Snap.loadFile("test/data1.json")
Snap.setActiveFile("test/data1.json")

let query = Snap.Query("root.body.message")
Snap.Edit("root.body.post", {"title":"Lorem"})


```

## Documentation

### Primitives
`Snap.loadFile("path")` loads the file specified and sets the file as the active file. All further Snap commands will be called on this file unless the active file is changed or this file is unloaded. Calling `loadFile` on a file that's already been loaded reloads the file.

`Snap.saveFile({options})` saves the active file to disk. Optionals are listed below.

```javascript
let options = {
	padding: 4, // saves JSON with spaces for readability
	saveas: "bbb.txt" // new save location relative to project path

}

```

`Snap.printFile("filename")` logs the file to the console. The exact filename that the file was loaded with must be used. This command does no reload the file from  the disk, it merely prints the current state. Ommiting the argument will print the active file.

`Snap.setActiveFile("filename")` sets the active file from the files already loaded. If the string passed in does not correspond to a file that has been loaded, `null` will be returned.

### Operations

`Snap.Edit("path", {update})` queries the active file in form `field.field.field` and replaces it with the update parameter. The update does not have to match the existing data. If the path does not match, `-1` is returned. The path must exist, no new paths will be created by this command. To insert new data, use `Insert`. 

`Snap.Query("path")` just like `Edit` except it finds and returns whatever is at the position.

`Snap.Delete("path")` deletes a field if it exists. Returns the object if successful, `-1` if matching path is not found or if `Delete` fails for other reasons.

`Snap.Insert("path", {insertion})` just like `Edit`, `Query` and `Delete`. If a key already exists at this path, `-1` is returned. If the new keys are inserted successfully, the object is returned.


### Find
`Snap.Find.Keys()` returns an array of all keys at the cursor level.

`Snap.Find.Count()` returns an integer equivalent to `Snap.Find.Keys().length`, because who wants to type that out.

`Snap.Find.Object("key")` returns an object with title matching the "key" parameter, if a match exists. This method returns the first matching object. Additional matches are ignored. If no matches are found, `-1` is returned.


## Development
Snap code starts with the `index.js` file. Tests are ran from the `tests.js` file, also in the root directory. One can load multiple files at the same time, switching between them with certain commands. All files loaded are stored in the `STORE` variable array. Example below:

```javascript
let STORE = {
    "filename.json": {
        "data": "long string",
        "meta": []
    }
    "other.json": {
        "data": "long string",
        "meta": []

    }
}
```
A global variable exists named `ACTIVE_FILE` that indicates which loaded file is currently active.

`CURSOR_DEPTH` indicates how many levels deep the `CURSOR` has traveled. Used for adding the `CURSOR` back to `HOME` before saving, etc.


