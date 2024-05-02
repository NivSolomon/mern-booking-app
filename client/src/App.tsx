import './App.css'
import Layout from './layouts/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><p>Home Page</p></Layout>}/>
        <Route path='/search' element={<Layout><p>Search Page</p></Layout>}/>
        <Route path='/register' element={<Layout><Register/></Layout>}/>
        <Route path='/sign-in' element={<Layout><SignIn/></Layout>}/>
        {/* Catch all route */}
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App
