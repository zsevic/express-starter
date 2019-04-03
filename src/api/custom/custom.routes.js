import { Router } from 'express'
import * as customController from './custom.controller'

const routes = new Router()

routes.get('/', customController.getCustom)

export default routes
