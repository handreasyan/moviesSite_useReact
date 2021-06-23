import logo from '../logo.png'

import {NavLink} from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo_content">
            <NavLink href="index.html" to={'/home'}><img src={logo} alt="Logo_img"/></NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}