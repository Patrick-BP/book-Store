import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />  
        </Provider>
     </AuthProvider>
  </StrictMode>,
)
