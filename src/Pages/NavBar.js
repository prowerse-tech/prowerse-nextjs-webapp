import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenFull, setIsMenuOpenFull] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsMenuOpenFull(!isMenuOpenFull)
  }

  return (
    <>
      <header
        id="header"
        className={`fixed-top d-flex align-items-center  ${
          isMenuOpen ? 'header-scrolled' : ''
        }`}
      >
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo me-auto">
            <img src="assets/img/Prowerse.png" alt="logo" />
          </Link>
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMenuOpen ? 'navbar-mobile' : ''
            }`}
          >
            {isMenuOpen ? (
              <ul>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/"
                    onClick={toggleMenu}
                  >
                    About Us
                  </CustomLink>
                </li>
                <li class="dropdown has-dropdown">
                  <CustomLink
                    className="nav-link scrollto"
                    to="/service"
                    onClick={toggleMenu}
                  >
                    Services
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/build-your-dedicated-team"
                    onClick={toggleMenu}
                  >
                    Build Your Dedicated Team
                  </CustomLink>
                </li>

               
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/careers"
                    onClick={toggleMenu}
                  >
                    Careers
                  </CustomLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <CustomLink className="nav-link scrollto" to="/">
                    About Us
                  </CustomLink>
                </li>

                <li class="dropdown has-dropdown">
                  <CustomLink className="nav-link scrollto" to="/service">
                    Services
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/build-your-dedicated-team"
                  >
                    Build Your Dedicated Team
                  </CustomLink>
                </li>
                <li>
                  <CustomLink className="nav-link scrollto" to="/careers">
                    Careers
                  </CustomLink>
                </li>
              </ul>
            )}

            <i
              className={`bi mobile-nav-toggle ${
                isMenuOpen ? 'bi-x' : 'bi-list'
              }`}
              onClick={toggleMenu}
              // className="bi bi-list mobile-nav-toggle"
            ></i>
          </nav>
          <Link to="/contact" className="get-started-btn scrollto">
            Let's Talk
          </Link>
        </div>
      </header>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

// function CustomLinkDropDown({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <Link to={to} {...props} className={isActive ? 'active' : ''}>
//       {children}
//     </Link>
//   )
// }
