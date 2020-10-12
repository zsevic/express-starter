import { errors } from 'celebrate';
import { Router } from 'express';
import customRoutes from './custom/custom.routes';

const apiRouter = Router();

apiRouter.use('/custom', customRoutes);
apiRouter.use(errors());

export default apiRouter;
