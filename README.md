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
`Snap.loadFile("path")` loads the file specified and sets the file as the active file. All further Snap commands will be called on this file unless the active file is changed or this file is unloaded. Calling `loadFile` on a file that's already been loaded reloads the file.

`Snap.printFile("file")` logs the file to the console. The exact filename that the file was loaded with must be used. This command does no reload the file from  the disk, it merely prints the current state.

