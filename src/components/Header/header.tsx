import './header.css';
import { Link } from "react-router-dom";

const Header = () => {

    return (
          <header
            className={`navbar navbar-expand bg-size-cover bg-position-center py-5 shadow-sm`}
          >
            <div className="container">
                <h1 className={`mb-0 w-100 text-left text-light text-uppercase`}>
                   Fast Food
                </h1>

              <div className="container d-flex justify-content-end">
                <ul className="navbar-nav">
                  <li className="navbar-item">
                    <Link to={"/"} className="nav-link">
                      <div className={`text-start me-4`}>home</div>
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to={"/members"} className="nav-link">
                      <span className={`text-start me-4`}>members</span>
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to={"/developers"} className="nav-link">
                      <span className={`text-start me-4`}>developers</span>
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to={"/shopping"} className="nav-link">
                      <span className={`text-start me-4`}>shopping</span>
                    </Link>
                  </li>
                </ul>
                {/*<button onClick={changeTheme} className={`btn btn-sm`}>*/}
                {/*</button>*/}

                <a className="navbar-tool ms-3 me-3">
                  <div className="navbar-tool-icon-box bg-secondary">
                    {/*<span className="navbar-tool-label">{cart.length}</span>*/}
                    {/*<RiShoppingCartLine className="navbar-tool-icon" />*/}
                  </div>
                </a>

              </div>

            </div>
        </header>
    )
}

export default Header;
