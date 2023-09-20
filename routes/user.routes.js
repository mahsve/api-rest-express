import { Router } from 'express'

const routerUser = new Router()

routerUser.get('/', (req, res) => {
  res.json({ message: 'Respuesta API GET!' })
})

routerUser.post('/', (req, res) => {
  res.json({ message: 'Respuesta API POST!' })
})

routerUser.put('/', (req, res) => {
  res.json({ message: 'Respuesta API PUT!' })
})

routerUser.patch('/', (req, res) => {
  res.json({ message: 'Respuesta API PATCH!' })
})

routerUser.delete('/', (req, res) => {
  res.json({ message: 'Respuesta API DELETE!' })
})

export default routerUser;