import cors from 'cors'
import express from 'express'

import routerUser from '../routes/user.routes.js'

export class Server {
  constructor() {
    this.port = process.env.PORT
    this.path = {
      users: '/api/users'
    }

    this.app = express()
    this.middlewares()
    this.router()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.static('public'))
  }

  router() {
    this.app.use(this.path.users, routerUser)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor funcionando en el puerto:', this.port)
    })
  }
}