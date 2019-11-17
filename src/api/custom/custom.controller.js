import * as customService from './custom.service'

export async function getCustomListHandler (req, res) {
  try {
    const customList = await customService.getCustomList()

    return res.status(200).json(customList)
  } catch (e) {
    return res.status(400).json(e)
  }
}
