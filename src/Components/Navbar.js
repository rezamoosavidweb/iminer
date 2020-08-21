import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from '@material-ui/core/Button';
import { red } from "@material-ui/core/colors";


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          /> */}
          <div className="logo"></div>

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                چرا آی ماینر
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                معرفی پنل
              </Link>
            </li>
            <li className="nav-item">
              <Link                
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
               درباره ما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                شروع کار
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                یک ساعت رایگان
              </Link>
            </li>
          </ul>
          <Button  style={{marginTop:'25px',boxShadow:'0px 11px 20px 0px rgb(9 50 84',fontFamily:'shabnambold',height:'40px'}} classname="btn" variant="contained" color="secondary">
             ثبت نام در سامانه
          </Button>
        </div>
      </nav>
    );
  }
}
