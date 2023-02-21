import { useContext } from 'react';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../App';
import './Toggle.css'

function Toggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="toggle-container">

            
            <h5 className="mt-2 theme-text">{theme === "Light" ? "DARK" : "LIGHT"}</h5>

            <div className='theme-icon'>
                {
                    theme === "Light" ?
                        <BsMoonFill onClick={toggleTheme} />
                        :
                        <BsFillSunFill onClick={toggleTheme} />
                }
            </div>

            {/* <ReactSwitch onChange={toggleTheme} checked={theme==="Light"} /> */}

            {/* <input type="checkbox" id='toggle' onChange={toggleTheme} /> */}

        </div>
    )
}

export default Toggle;

