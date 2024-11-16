import ProfileList from './components/ProfileList/ProfileList'
import Profile from './components/Profile/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<ProfileList />
    },
    {
      path:'/profile',
      element:<Profile />
    }
  ],{
    future: { v7_startTransition: true },
  })
 
 
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
