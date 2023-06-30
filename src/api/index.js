import { errors } from 'celebrate';
import { Router } from 'express';
import customRoutes from './custom/custom.routes.js';
import { errorHandler } from './error-handler.js';

const apiRouter = Router();

apiRouter.use('/custom', customRoutes);
apiRouter.use(errors());
apiRouter.use(errorHandler);

export default apiRouter;
