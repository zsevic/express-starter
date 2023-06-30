// import Boom from '@hapi/boom';
import Custom from './custom.model.js';

export async function getCustomList() {
  // throw new Error('alo');
  // throw new Boom.badRequest();
  return Custom.find({});
}
