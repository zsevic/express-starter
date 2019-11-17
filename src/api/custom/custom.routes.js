import { Router } from 'express'
import * as customController from './custom.controller'

const customRouter = Router()

customRouter.get('/', customController.getCustomListHandler)

export default customRouter
