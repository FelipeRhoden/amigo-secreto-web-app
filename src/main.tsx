import App from '@/app'
import { StepperProvider } from '@/contexts/stepperContext'
import { denseTheme } from '@/theme/denseTheme'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PeopleProvider } from '@/contexts/peopleContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={denseTheme}>
    <CssBaseline />
      <Box sx={{ bgcolor: "primary.main", height: '100vh', maxWidth: 1024, m: "auto" }}>
      <StepperProvider>
        <PeopleProvider>
          <App />
        </PeopleProvider>
      </StepperProvider>
      </Box>
  </ThemeProvider>
)
