import './Header.css'
import Toggle from '../Toggle/Toggle'
import Logout from '../Logout';
import { useLocation } from 'react-router-dom';


function Header() {

    const { pathname } = useLocation();

    return (
        <div className="container-header mt-5">
            <div className="item-1">
                <h1>devfinder</h1>
            </div>
            <div className="item-2">
                {
                    pathname === "/main"
                        ?
                        <Logout />
                        :
                        ""
                }
                <Toggle />
            </div>
        </div>
    )
}

export default Header;



