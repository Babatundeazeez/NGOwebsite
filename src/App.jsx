
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './AuthContext/authContext'
import Navbar from './Components/Navbar'

import AboutUs from './Pages/AboutUs'
import Projects from './Pages/Projects'
import Donate from './Pages/Donate'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {
 
  return (
    <>
    <div className='min-h-screen flex flex-col bg-green-50'>
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element = {< Home />} />
          <Route path='/aboutUs' element = {<AboutUs />} />
          <Route path='/project' element = {<Projects />} />
          <Route path='/donate' element = {<Donate />} />

        </Routes>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
      
    </div>
     
    </>
  )
}

export default App
