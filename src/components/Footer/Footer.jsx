"use client"
import React from "react";
import "./footer.css";
import Link from "next/link";
import { redirect } from "next/navigation";

const Footer = () => {
  const goToServices = async () => {
    await redirect("/");
    window.scrollTo(0, 1300);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Ramita</h2>
            <p>علامتك التجارية، حلمٌ نُحوله إلى حقيقة.</p>
          </div>
          <div className="footer-section links">
            <ul>
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
      </div>
      <div className="footer-bottom">© 2024 Ramita. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
