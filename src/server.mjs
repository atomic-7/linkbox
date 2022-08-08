import express from "express";
import apiRouter from "./apiRouter.mjs";

const server = express()
const port = 3000;  // read from .env file later?

server.use(express.static('public'))
server.use('/api', apiRouter)

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})