"use client";

import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Image from 'next/image';

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useRouter();
  const handleClick = () => {
    let e = document.querySelector("input[type='checkbox']");
    setshowMenu(false);
    e.checked = false;
  };
  const goToServices = async () => {
    await navigate.replace("/");
    window.scrollTo(0, 1300);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo-content">
            <Image src={logo} alt="logo" className="logo" />
            <Link className="navbar-brand" href="/">
              Ramita
            </Link>
          </div>
          <ul className="nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                الصفحه الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={goToServices}>
                خدماتنا
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Packages">
                الباقات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Contact">
                تواصل معنا
              </Link>
            </li>
          </ul>
          <div className="full-menu">
            <div
              className="menu"
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <label className="buttons__burger" htmlFor="burger">
                <input type="checkbox" id="burger" />
                <span />
                <span />
                <span />
              </label>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="full-screen menu" onClick={handleClick}>
            <div className="navbar">
              <ul className="nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    الصفحه الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={goToServices}>
                    خدماتنا
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Packages">
                    الباقات
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Contact">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
