import * as customService from './custom.service';

export async function getCustomListHandler(_, res) {
  const customList = await customService.getCustomList();

  return res.json(customList);
}
