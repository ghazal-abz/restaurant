import './header.css';
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import {useThemeContext} from "../../context/context";

const Header = () => {
    const theme = useThemeContext();
    const darkMode = theme.darkMode;

    const changeTheme = () => {
        theme.setDarkMode(!darkMode);
    }
    return (
          <header
            className={`navbar navbar-expand bg-size-cover bg-position-center py-5 shadow-sm`}
          >
            <div className="container">
                <h1 className={`{mb-0 w-100 text-left text-light text-uppercase ${darkMode ? 'text-light' : 'text-dark'}`}>
                    Fast Food
                </h1>

              <div className="container d-flex justify-content-end">
                <ul className="navbar-nav d-flex flex-row-reverse">
                  <li className="navbar-item">
                      <Link to={"/"} className="nav-link">
                          <div className={`text-start me-4 ${darkMode ? 'text-light' : 'text-dark'}`}>home</div>
                      </Link>
                  </li>
                </ul>
                  <button onClick={changeTheme} className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} `}>
                      {darkMode ? 'تاریک': ' روشن'}
                  </button>

                <a className="navbar-tool ms-3 me-3">
                  <div className="navbar-tool-icon-box bg-secondary">
                    <RiShoppingCartLine className="navbar-tool-icon" />
                  </div>
                </a>

              </div>

            </div>
        </header>
    )
}

export default Header;
