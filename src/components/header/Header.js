import { ArrowRight, Menu } from "lucide-react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#">Portfolio creator.</a>
          <div className="navbar-bottom">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Book a call </li>
            </ul>
            <ArrowRight />
            <Menu className="my-menu" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
