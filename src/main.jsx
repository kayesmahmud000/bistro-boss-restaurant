import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div className='container mx-auto'>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
 </div>
  </StrictMode>,
)
