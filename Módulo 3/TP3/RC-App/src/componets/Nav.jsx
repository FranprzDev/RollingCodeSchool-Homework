import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../Style.css";
import 'animate.css'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-start w-75">
            <a className="navbar-brand text-danger mx-auto fs-2" href="#">
              <span className="text-white animate__animated animate__zoomInDown">{"< > "}</span>
              RollingCode School
            </a>
          </div>
          <button
            className="navbar-toggler btn-custom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="flex-grow-0 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/Form">
                  Formulario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
