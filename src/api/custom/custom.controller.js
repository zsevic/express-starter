import { logger } from '../../utils/logger';
import * as customService from './custom.service';

export async function getCustomListHandler(_, res) {
  const customList = await customService.getCustomList();

  logger.debug(customList, 'Got response');
  return res.json(customList);
}
