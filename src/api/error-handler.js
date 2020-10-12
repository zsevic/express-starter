import { isBoom } from '@hapi/boom';

export function errorHandler(err, req, res, next) {
  if (isBoom(err)) {
    return res.status(err.output.statusCode).send(err.output.payload.message);
  }
  console.log('Server error:', err.message);
  return res.sendStatus(500);
}
