import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'

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
