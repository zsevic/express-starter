import customRoutes from './custom/custom.routes'

export default app => {
  app.use('/api/custom', customRoutes)
}
