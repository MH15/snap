# snap
JSON toolkit that's pretty good

## Goals
- Use JSON efficiently and effectively
- Parse files with ease
- Work non-destructively with a concurrent source of truth



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

## Usage

### Snap
`Snap.loadFile("path")` loads the file specified and sets the file as the active file. All further Snap commands will be called on this file unless the active file is changed or this file is unloaded. Calling `loadFile` on a file that's already been loaded reloads the file.

`Snap.printFile("filename")` logs the file to the console. The exact filename that the file was loaded with must be used. This command does no reload the file from  the disk, it merely prints the current state. Ommiting the argument will print the active file.

`Snap.setActiveFile("filename")` sets the active file from the files already loaded. If the string passed in does not correspond to a file that has been loaded, `null` will be returned.

### Cursor
TODO: explain how Snap cursors works

`Snap.CursorHome()` sets the cursor position to the top of the active file and returns.

`Snap.CursorDown("field")`	moves the cursor down one layer to the indicated field. If such field exists, it is returned. If it does not exist, `-1` is returned.


### H Cursor
History of the `CURSOR` element is represented in the `H_CURSOR` array.

- `"home"` indicates that the JSON file was homed using `Snap.CursorHome()`.
- `"down"`