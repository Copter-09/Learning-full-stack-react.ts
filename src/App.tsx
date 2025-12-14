import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Userlist from './index/Userlist'
import UserDetailPage from './index/Userdetail'

function App() {

  return (
    <>
      

      <BrowserRouter>
        <nav className='navbar'>
            <div className='nav-container'>
              <Link to={"/home"} className='nav-logo'>
                My Website
              </Link>
              <ul className='nav-menu'>
                <li>
                  <Link to={"/user"}>
                    User
                  </Link>
                </li>
                <li>
                  <Link to={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/user"}>
                    User
                  </Link>
                </li>
              </ul>
              
            </div>
        </nav>

        <Routes>
          <Route path='/user' element={<Userlist />}/>
          <Route path='/user/:id' element={<UserDetailPage />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
