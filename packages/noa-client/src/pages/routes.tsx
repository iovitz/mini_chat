import React from 'react'
import { useRoutes } from 'react-router-dom'
import Editor from './editor/editor'
import Home from './home/home'
import Layout from './layout'
import Login from './login/login'
import NotFound from './notfound/notfound'
import Template from './template/template'

export default function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/template',
          element: <Template />,
        },
        {
          path: '/editor/:page',
          element: <Editor />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  return elements
}
