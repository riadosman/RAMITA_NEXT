"use client";
import React from "react";
import "./footer.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

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
            <p>.علامتك التجارية، حلمٌ نُحوله إلى حقيقة</p>
            <div className="footer-media">
              <a
                href="https://www.instagram.com/ramita_media/"
                target="_blank"
                className="button instagram"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+905347075309"
                target="_blank"
                rel="noreferrer"
                className="button Whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550307297648"
                target="_blank"
                rel="noreferrer"
                className="button Facebook"
              >
                <FaFacebook />
              </a>
            </div>
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
