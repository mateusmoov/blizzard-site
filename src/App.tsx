import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PrincipalSection, GameSection, FooterSection, Menu, LoginModal } from 'components'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PrincipalSection />
      <GameSection />
      <FooterSection />
    </QueryClientProvider>
  )
}

export default App
