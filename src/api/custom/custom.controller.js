import { logger } from '../../utils/logger.js';
import * as customService from './custom.service.js';

export async function getCustomListHandler(_, res) {
  const customList = await customService.getCustomList();

  logger.debug(customList, 'Got response');
  return res.json(customList);
}
