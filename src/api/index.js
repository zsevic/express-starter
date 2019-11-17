import { Router } from 'express';
import customRoutes from './custom/custom.routes';

const apiRouter = Router();

apiRouter.use('/custom', customRoutes);

export default apiRouter;
