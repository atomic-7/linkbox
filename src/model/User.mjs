class User {
    constructor(name) {
        this.name = name
        this.folders = []
    }
    addFolder(folder) {
        this.folders.push(folder)
    }
    removeFolder(folderName) {
        this.folders = this.folders.filter(f => f.name !== folderName)
    }
    renameFolder(oldName, newName) {
        const index = this.folders.findIndex(f => f.name === oldName)
        this.folders[index].name = newName
    }
}

export default User