import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Navbar = () => {

    const navigate = useNavigate();
    const handleLogOut = () =>{
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        toast.success('Logout Successfully')
        navigate('/login')
    }
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-success p-2 text-white bg-opacity-75">
   <div className="container-fluid">
    <Link className="navbar-brand"to={"/"}>Task Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item " >
          <Link className="nav-link text-white " aria-current="page" to={"/"}>Home</Link>
        </li>
       
        <li className="nav-item">
          <button className="nav-link text-white"  onClick={()=>{
            handleLogOut()
          }}>Logout</button>
        </li>
       
      </ul>
    </div>
  </div>
  </nav>
  )
}

export default Navbar
