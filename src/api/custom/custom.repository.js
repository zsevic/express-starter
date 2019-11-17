import Custom from './custom.model'

export async function getCustomList () {
  return Custom.find({})
}
