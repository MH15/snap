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

`CURSOR_DEPTH` indicates how many levels deep the `CURSOR` has traveled. Used for adding the `CURSOR` back to `HOME` before saving, etc.

## Usage

### Snap
`Snap.loadFile("path")` loads the file specified and sets the file as the active file. All further Snap commands will be called on this file unless the active file is changed or this file is unloaded. Calling `loadFile` on a file that's already been loaded reloads the file.

`Snap.printFile("filename")` logs the file to the console. The exact filename that the file was loaded with must be used. This command does no reload the file from  the disk, it merely prints the current state. Ommiting the argument will print the active file.

`Snap.setActiveFile("filename")` sets the active file from the files already loaded. If the string passed in does not correspond to a file that has been loaded, `null` will be returned.

`Snap.Edit("path", {update})` queries the active file in form `field.field.field` and replaces it with the update parameter. The update does not have to match the existing data. If the path does not match, `-1` is returned. The path must exist, no new paths will be created by this command. To insert new data, use `Insert`.

`Snap.Query("path")` just like `Edit` except it finds and returns whatever is at the position.

### Cursor
TODO: explain how Snap cursors works

`Snap.CursorHome()` sets the cursor position to the top of the active file and returns.

`Snap.CursorDown("field")`	moves the cursor down one layer to the indicated field. If such field exists, it is returned. If it does not exist, `-1` is returned.

`Snap.CursorHistoryPrevious()` is equivalent to an undo command. Returns the current `CURSOR` selection if successful; or, in the event that this command has reached the beginning of the History, returns -1. There is no "HistoryNext" or Redo function currently implemented.


### H Cursor
History of the `CURSOR` element is represented in the `H_CURSOR` array.

- `"home"` indicates that the JSON file was homed using `Snap.CursorHome()`.
- `"down"` indicates that the Cursor moved down a level in the JSON file to a specified key.

### Find
`Snap.Find.Keys()` returns an array of all keys at the cursor level.

`Snap.Find.Count()` returns an integer equivalent to `Snap.Find.Keys().length`, because who wants to type that out.

`Snap.Find.Object("key")` returns an object with title matching the "key" parameter, if a match exists. This method returns the first matching object. Additional matches are ignored. If no matches are found, `-1` is returned.



