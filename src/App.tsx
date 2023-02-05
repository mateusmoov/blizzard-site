import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PrincipalSection, GameSection, FooterSection, Menu } from 'components'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Menu />
      {/* <PrincipalSection />
      <GameSection />
      <FooterSection /> */}
    </QueryClientProvider>
  )
}

export default App
