class Folder {
    constructor(name) {
        this.name = name
        this.links = []
    }
    addLink(link) {
        this.links.push(link)
    }
    removeLink(linkName) {
        this.links = this.links.filter(l => l.name !== linkName)
    }
    updateLink(oldName, newName) {
        const index = this.links.findIndex( l => l.name = oldName)
        this.links[index].name = newName
    }
}

export default Folder