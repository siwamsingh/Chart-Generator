import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

  // const router = createBrowserRouter([{
  //   path: '/',
  //   element: <Layout/>,
  //   children: [{
  //     path: '',
  //     element: <Home/>
  //   },{
  //     path: 'about',
  //     element: <About/>,
  //   },{
  //     path: 'Contact',
  //     element: <Contact/>
  //   }],
  // }])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route path='' element= {<Home/>}/>
        <Route path='about' element= {<About/>}/>
        <Route path='contact' element= {<Contact/>}/>
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

