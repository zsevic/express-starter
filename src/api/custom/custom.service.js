import * as customRepository from './custom.repository';

export async function getCustomList() {
  return customRepository.getCustomList();
}
