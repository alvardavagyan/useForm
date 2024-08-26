import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Page1 } from './pages/page1/index.tsx'
import { Page2 } from './pages/page2/index.tsx'


const router=createBrowserRouter([
  {
    path:"",
    element:<Page1/>
  },
  {
    path:"other",
    element:<Page2/>
  }
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
