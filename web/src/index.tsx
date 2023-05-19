import { createRoot } from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import '@fontsource/roboto/400.css'

const Main = () => (
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={createTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

createRoot(
  document.getElementById('app') as HTMLDivElement
).render(<Main />)
