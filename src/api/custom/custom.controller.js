import Custom from './custom.model'

export async function getCustom (req, res) {
  try {
    const custom = await Custom.find({})

    return res.status(200).json(custom)
  } catch (e) {
    return res.status(400).json(e)
  }
}
