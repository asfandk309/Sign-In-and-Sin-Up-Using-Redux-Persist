import {  Route, Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Main from '../Pages/Main'

function AppRouter() {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/signup" element={<SignUp />} /> 
                    <Route path="/main" element={<Main />} /> 
                </Routes>
        </div>
    )
}

export default AppRouter;



