import React from "react";
import Header from '../../Components/Header/Header'
function Layout({children})
{
    return(
        <div>
            < Header/>
            <div>{children}</div>
        </div>
    )
}
export default Layout;