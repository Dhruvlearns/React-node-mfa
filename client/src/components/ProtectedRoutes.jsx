import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../context/SessionContext';

//LOGIC : WE NEED TO CHECK WHETHER THE USER IS AUTHENTICATED OR NOT

const ProtectedRoutes = () => {
    const {isLoggedIn ,loading}=useSession();
    console.log("the logged in" , isLoggedIn);

    if(loading){
        return <div> Loading ... </div>
    }
    
    return isLoggedIn ? <Outlet/> : <Navigate to="/login" />; 
};

export default ProtectedRoutes;