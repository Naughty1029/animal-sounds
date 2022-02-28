import { PageProvider } from 'providers/PageProvider'
import { Router } from 'router/Router'

const App: React.VFC = () => {
  return (
    <PageProvider>
      <Router />
    </PageProvider>
  )
}

export default App
