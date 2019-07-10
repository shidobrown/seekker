import React from "react";
import "../../Navbar.css"
import $ from "jquery"
import 'jquery-ui-dist/jquery-ui';

export default class Navbar3 extends React.Component {

  componentDidMount() {
   $('.nav-toggle').draggable();
  }


  constructor() {
    super();
    this.state = {
      menuOpen: false,
      navItems: [
        { link: "Tiers", href: "#" },
        { link: "", href: "#" },
        { link: "Projects", href: "#" },
        { link: "About", href: "Menu" }
        
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const navItems = this.state.navItems.map(({ link, href }) => {
      return (
        <a key={link} className="nav__item" href={href}>
          {link}
        </a>
      );
    });

    if (this.state.menuOpen) {
      return (
        <div className="nav-toggle nav-toggle--open">
          <span className="nav-toggle__button" onClick={this.toggleMenu} />

          <nav className="nav__items">{navItems}</nav>

          <div className="back-drop" onClick={this.toggleMenu} />
        </div>
      );
    } else {
      return (
        <div className="nav-toggle nav-toggle--closed">
          <span className="nav-toggle__button" onClick={this.toggleMenu} />

          <nav className="nav__items">{navItems}</nav>
        </div>
      );
    }
  }
}
