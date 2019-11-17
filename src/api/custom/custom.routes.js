import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import * as customController from './custom.controller'
import { customQuery } from './custom.validation'

const customRouter = Router()
const validator = createValidator({})

customRouter.get('/', validator.query(customQuery), customController.getCustomListHandler)

export default customRouter
