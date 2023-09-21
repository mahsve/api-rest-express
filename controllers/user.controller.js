import { request, response } from 'express'

export const userGET = (req = request, res = response) => {
  const { query = '', page = 1, limit = 10 } = req.query
  res.json({ message: 'Respuesta API GET! - Controller', query, page, limit })
}

export const userPOST = (req = request, res = response) => {
  const { name, age } = req.body
  res.json({ message: 'Respuesta API POST! - Controller', name, age })
}

export const userPUT = (req = request, res = response) => {
  const { id } = req.params
  res.json({ message: 'Respuesta API PUT! - Controller', id })
}

export const userPATCH = (req = request, res = response) => {
  res.json({ message: 'Respuesta API PATCH! - Controller' })
}

export const userDELETE = (req = request, res = response) => {
  const { id } = req.params
  res.json({ message: 'Respuesta API DELETE! - Controller', id })
}