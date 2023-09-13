import Home from './pages/Home/Home'
import LayoutMain from './pages/Layouts/LayoutMain';
import Error404 from "./pages/Error404/Error404"
import Cities from "./pages/Cities/Cities"
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import City from './pages/City/City';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './redux/actions/authActions';
import { LS } from './data/LocalStorage/LS';
import { toast } from 'react-toastify';
import ProtectedRouter from './pages/Layouts/ProtectedRouter';

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
        element: <ProtectedRouter> <SignIn /> </ProtectedRouter> 
      },
      {
        path: '/signup',
        element: <ProtectedRouter> <SignUp /> </ProtectedRouter>
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
        .then((res) => {
          if(res.payload.success) {
            toast.success("Welcome " + res.payload.userData.name + '!')
          } else {
            toast.error("Error: " + res.payload.message)
          }
        })
        .catch((error) => {
          toast.error("An error occurred: " + error.message)
        })
    }
  },[])

  return (

    <RouterProvider router={router} />

  )
}

export default App
