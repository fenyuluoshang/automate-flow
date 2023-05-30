import { createBrowserRouter } from 'react-router-dom'

function defaultLazyHandler (importFn: () => Promise<any>) {
  return async () => {
    const module = await importFn()
    return {
      Component: module.default
    }
  }
}

const Router = createBrowserRouter([
  {
    path: '/',
    lazy: defaultLazyHandler(async () => await import('./layout/MainLayout')),
    children: [
      {
        path: '',
        lazy: defaultLazyHandler(async () => await import('./views/Home'))
      }
    ]
  }
])

export default Router
