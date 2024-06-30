import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Testimonials from './pages/Testimonials.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='project' element={<Projects />} />
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
