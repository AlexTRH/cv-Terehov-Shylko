import { ApolloProvider } from '@apollo/client'
import { client } from './configuration/client'
import AppRouter from './routes/routes'
import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  )
}

export default App
