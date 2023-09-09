import Home from './pages/Home/Home'
import LayoutMain from './pages/Layouts/LayoutMain';
import Error404 from "./pages/Error404/Error404"
import Cities from "./pages/Cities/Cities"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import City from './pages/City/City';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from './redux/actions/authActions';
import { LS } from './data/LocalStorage/LS';

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
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  },
])

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (LS.getText('token')){
      dispatch(authenticate())
    }
  },[])

  return (

    <RouterProvider router={router} />

  )
}

export default App
