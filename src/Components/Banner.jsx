
import React from "react";
import "/src/App.css"; 
import { Header } from "../Components/Header";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export function Banner() {
  return (
    <>
    <main className="hero">
      {/* <header className="nav">
        <div className="logo">MetCube</div>
        <nav className="nav-right">
          <a href="#" aria-label="language">EN</a>
          <a href="#" aria-label="docs">ENG</a>
          <button className="menu-dot" aria-label="menu" />
        </nav>
      </header> */}
      <section className="hero-inner">
        <div className="headline">
          {/* <div className="kicker">Cyber of x</div> */}
          <div className="loop">
            <img src="src/assets/cyber-pro1.png" alt="main-img" />
          </div>
          <h1>
            <span className="light">ME</span>
            <span className="dark">T</span>
            <span className="light">AVERSE</span>
          </h1>
          <p className="sub">" The future in our hand "</p>
        </div>
        {/* <div className="center-circle">
          <span>5s</span>
        </div> */}
        <div className="hero-image" role="img" aria-label="Futuristic portrait" />
        <div className="stats">
          <div className="card">
            <div className="metric">+15</div>
            <div className="meta">
              <div className="title">system env</div>
              <p>
              "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins." 
              </p>
            </div>
          </div>
          <div className="card">
            <div className="metric">+25</div>
            <div className="meta">
            <p className="title">coder</p>
            </div>
          </div>
        </div>
        <ul className="socials">
          <li><a href="https://linkedin.com" aria-label="linkedin"><FaLinkedinIn /></a></li>
          <li><a href="https://instagram.com" aria-label="instagram"><FaInstagram /></a></li>
          <li><a href="https://facebook.com" aria-label="facebook"><FaFacebookF /></a></li>
        </ul>
      </section>
      <footer className="edge" />
    </main>
    </>
  )
}
