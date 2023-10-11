import { ApolloProvider } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { client } from './configuration/client'
import AppRouter from './routes/Routes'
import theme from './themes/themes'
import { BreadcrumbsProvider } from './components/features/breadcrumbs-context'
import { Notifications } from './components/features/notifications'
import { Dialogs } from './components/features/dialogs'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <BreadcrumbsProvider>
            <AppRouter />
          </BreadcrumbsProvider>
          <Notifications />
          <Dialogs />
        </LocalizationProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
