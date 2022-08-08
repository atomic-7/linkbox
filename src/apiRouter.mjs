import express from 'express'
import User from './model/User.mjs'
import Folder from './model/Folder.mjs'
import Link from './model/Link.mjs'

const apiRouter = express.Router()
// User input safety checks!!!
// TODO: Setup a db
// temporary 
let data = []

// Setup json parsing to provide req.body with values
apiRouter.use(express.json())
apiRouter.use(express.urlencoded({extended: true}))
apiRouter.use('/users/:user',userExists)
apiRouter.use('users/:user/folders/:folder', folderExists)

function userExists(req, res, next) {
    const index = data.findIndex(u => u.name === req.params.user)
    if (index !== -1) {
        next()
    } else {
        res.sendStatus(404)
    }
}
function folderExists(req, res, next) {
    const user = data.find( u => u.name === req.params.user)
    const index = user.folders.findIndex(f => f.name === req.params.folder)
    if (index !== -1) {
        next()
    } else {
        res.sendStatus(404)
    }
}

apiRouter.route('/users')
    .get((req, res) => {
        res.json(data)
    })
    .post((req,res) => {
        const userName = req.body.user
        // TODO: check if user already exists
        const user = new User(userName)
        data.push(user)
        res.sendStatus(200)
    })

apiRouter.route('/users/:user')
    .get((req, res) => {
        res.json(data.find(u => u.name === req.params.user))
    })
    .delete((req, res) => {
        data = data.filter( u => u.name !== req.params.user)
        res.sendStatus(200)
    })
    .put((req, res) => {
        // rename a user? not sure yet
        res.sendStatus(501)
    })

apiRouter.route('/users/:user/folders')
    .get((req, res) => {
        const User = data.find(u => u.name === req.params.user)
        if (User === undefined) {
            res.sendStatus(404)
        }
        res.json(User.folders)
    })
    .post((req, res) => {
        const index = data.findIndex( u => u.name === req.params.user)
        data[index].addFolder(new Folder(req.body.name))
        res.sendStatus(200)
    })

apiRouter.route('/users/:user/folders/:folder')
    .get((req, res) => {
        // return a json object with the contents of the folder
        res.sendStatus(501)
    })
    .delete((req, res) => {
        // delete the folder and its contents
        res.sendStatus(501)
    })
    .put((req, res) => {
        // rename a folder
        res.sendStatus(501)
    })

apiRouter.route('/users/:user/folders/:folder') // consider adding /l/
    .post((req, res) => {
        // create a new entry, use query parameters
        res.sendStatus(501)
    })

apiRouter.route('/users/:user/folders/:folder/:id')
    .get((req, res) => {
        // return a json object with the link info
        res.sendStatus(501)
    })
    .delete((req, res) => {
        // delete a link from a folder
        res.sendStatus(501)
    })
    .put((req, res) => {
        // rename a link
        res.sendStatus(501)
    })

export default apiRouter