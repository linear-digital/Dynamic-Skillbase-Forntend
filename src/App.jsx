
import './App.css'

import { Provider } from 'react-redux'
import store from './redux/store'
import DefaultFetch from './Components/Layout/DefaultFetch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()
function App() {
  return <div>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <DefaultFetch />
        <Outlet />
      </QueryClientProvider>
    </Provider>
  </div>
}

export default App
