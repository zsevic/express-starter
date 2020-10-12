import { errors } from 'celebrate';
import { Router } from 'express';
import customRoutes from './custom/custom.routes';
import { errorHandler } from './error-handler';

const apiRouter = Router();

apiRouter.use('/custom', customRoutes);
apiRouter.use(errors());
apiRouter.use(errorHandler);

export default apiRouter;
