import {  Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = () => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('auth');

  const authData = JSON.parse(isAuthenticated)
  
  // const userid = authData?.userid;
  
  return  authData?.userid ? <Outlet/> : <Navigate to="/login" replace={true} />
 
};

export default PrivateRoute;
