import { Link } from "react-router-dom"

function HeaderComponent() {
    return (
        <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <i className="fas fa-users me-2"></i>
                EMPLOYEE MANAGEMENT SYSTEM
              </Link>
            </div>
          </nav>
        </header>
      </div>
    )
  }
  
  export default HeaderComponent