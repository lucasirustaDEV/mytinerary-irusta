import Home from './pages/Home/Home'
import LayoutMain from './pages/Layouts/LayoutMain';
import Error404 from "./pages/Error404/Error404"
import Cities from "./pages/Cities/Cities"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import City from './pages/City/City';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '/city/:id',
        element: <City />
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  },
])

function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App
