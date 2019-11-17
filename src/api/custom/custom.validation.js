import Joi from '@hapi/joi';

export const customQuery = Joi.object({
  name: Joi.string().min(5).optional(),
});
