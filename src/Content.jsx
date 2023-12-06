import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Features from './components/Features'
import Home from './components/Home'
function Content() {

  return (
    <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Content
