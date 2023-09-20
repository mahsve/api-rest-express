import { Router } from 'express'
import { userDELETE, userGET, userPATCH, userPOST, userPUT } from '../controllers/user.controller.js'

const routerUser = new Router()

routerUser.get('/', userGET)

routerUser.post('/', userPOST)

routerUser.put('/', userPUT)

routerUser.patch('/', userPATCH)

routerUser.delete('/', userDELETE)

export default routerUser;