import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PrincipalSection, GameSection } from 'components'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrincipalSection />
      <GameSection />
    </QueryClientProvider>
  )
}

export default App
