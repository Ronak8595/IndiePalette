import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Collections from './Pages/Collections/Collections'
import Display from './Pages/Display/Display'
import ContactUs from './Pages/ContactUs/ContactUs'
import './index.css'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home/>,
      },
      {
        path : "collections/:name/",
        children : [
          {
            path : "",
            element : <Collections/>
          },
          {
            path : ":id",
            element : <Display/>
          },
        ]
      },
      {
        path : "about",
        element : <AboutUs/>,
      },
      {
        path : "contact",
        element : <ContactUs/>,
      },
      
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)
