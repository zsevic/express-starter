import { Router } from 'express';
import * as customController from './custom.controller';
import customValidation from './custom.validation';
import { asyncWrap } from '../../utils';

const customRouter = Router();
/**
 * This function comment is parsed by doctrine
 * @route GET /custom
 * @group Custom - Operations about custom
 * @param {string} name.query - name
 * @returns {object} 200 - An array of custom info
 * @returns {Error} 400 - Error validating request query.
 */
customRouter.get(
  '/',
  customValidation,
  asyncWrap(customController.getCustomListHandler),
);

export default customRouter;
