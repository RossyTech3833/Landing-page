
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './Component/Home'
import { Contact } from './Component/Contact'
import { Project } from './Component/Project'


function App() {
 

  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />
    </Routes>
   </Router>
    </>
  )
}

export default App
