import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import MainApp from './Components/MainApp'
import Business from './Pages/Public/Business'
import Dashboard from './Pages/Dashboard'
import Developer from './Pages/Public/Developer'
import FakeStore from './Pages/FakeStore'
import Help from './Pages/Public/Help'
import Home from './Pages/Public/Home'
import Login from './Pages/Public/Login'
import PaymentView from './Pages/PaymentView.jsx'
import Personal from './Pages/Personal'
import Signup from './Pages/Public/Signup'
import UserProfile from './Pages/UserProfile'
import './Styles/App.css'
import QrPage from 'Pages/QrPage'

const checkForToken = () => {
  if (!localStorage.getItem('token')) {
    throw redirect('/login')
  }
  return null
}

const loginLoader = ({ params }) => {
  if (localStorage.getItem('token')) {
    throw redirect('/dashboard')
  }
  return (params = { isOnGateway: false })
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'personal',
        element: <Personal />,
      },
      {
        path: 'business',
        element: <Business />,
      },
      {
        path: 'developer',
        element: <Developer />,
      },
      {
        path: 'qrpage',
        element: <QrPage />,
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'login',
        loader: loginLoader,
        element: <Login />,
      },
      {
        path: 'signup',
        loader: loginLoader,
        element: <Signup />,
      },
      {
        path: '',
        loader: checkForToken, // protected routes
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'profile',
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    path: 'gateway/:productUuid',
    loader: ({ params }) => (params = { ...params, isOnGateway: true }),
    element: <PaymentView />,
  },
  {
    path: 'fakestore',
    element: <FakeStore />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
