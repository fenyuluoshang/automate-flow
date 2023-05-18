import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'

const Main = () => (
  <React.StrictMode>
  // We use NextUI as the UI framework, see https://nextui.org
  <NextUIProvider>
    <App />
  </NextUIProvider>
  </React.StrictMode>
)

createRoot(
  document.getElementById('app') as HTMLDivElement
).render(<Main />)
