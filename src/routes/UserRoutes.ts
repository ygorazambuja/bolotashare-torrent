import { Router } from 'express'
import {
  UserCreate
} from '../controller/UserController'

const routes = Router()

routes.post('/user', UserCreate)

export default routes
