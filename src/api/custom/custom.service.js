import * as customRepository from './custom.repository.js';

export async function getCustomList() {
  return customRepository.getCustomList();
}
