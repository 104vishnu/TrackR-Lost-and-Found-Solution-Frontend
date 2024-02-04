import React from 'react';
import Layout from './components/layout/Layout.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import PostItem from './pages/postItem/PostItem.jsx';
import Home from './pages/home/Home.jsx'
import LostItems from './pages/lostitem/LostItems.jsx';
import FoundItem from './pages/founditem/FoundItem.jsx';
import MyItems from './pages/myItems/MyItems.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


function App() {

  // const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/postitem' element={<PostItem />} />
      <Route path='/founditems' element={<FoundItem />} />
      <Route path='/lostitems' element={<LostItems/>} />
      <Route path='/myitems' element={<MyItems/>} />
    </Route>
  )
)
  return <RouterProvider router={router} />;
  
}

export default App