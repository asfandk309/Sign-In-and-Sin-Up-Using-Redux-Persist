import "./style.css"
import React from 'react'
import { GoSignOut } from 'react-icons/go';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Redux/Actions";

export const Logout = () => {

  const reduxState = useSelector(state => state.users)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    const logoutUser = reduxState.users.filter((user) => {
      if (user.isLogin === true) {
        return user
      }
    }
    )
    dispatch(signout(logoutUser[0].email));
    navigate("/")
  }

  return (

    <div className="logout-container">

      <h5 className="mt-2">Logout</h5>

      <div className='logout-icon'>

        <GoSignOut className="custom-margin" onClick={handleLogout} /> | 

      </div>
      
    </div>
  )
}

export default Logout;