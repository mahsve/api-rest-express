import { response } from 'express'

export const userGET = (req, res = response) => {
  res.json({ message: 'Respuesta API GET! - Controller' })
}

export const userPOST = (req, res = response) => {
  res.json({ message: 'Respuesta API POST! - Controller' })
}

export const userPUT = (req, res = response) => {
  res.json({ message: 'Respuesta API PUT! - Controller' })
}

export const userPATCH = (req, res = response) => {
  res.json({ message: 'Respuesta API PATCH! - Controller' })
}

export const userDELETE = (req, res = response) => {
  res.json({ message: 'Respuesta API DELETE! - Controller' })
}