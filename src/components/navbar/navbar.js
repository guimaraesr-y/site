import React, { useEffect } from "react";
import './navbar.css'

const Navbar = () => {
    const handleScroll = (e) => {
        let y = window.scrollY
        let nav = document.querySelector(".navbar");
        let navbarHeight = nav.offsetHeight;
        let nextSectionY = document.querySelector("#sobre").offsetTop;

        if(y >= nextSectionY - navbarHeight * 2) {
            nav.style.position = "fixed";
            nav.style.backgroundColor = '#1c1c1c'
        } else {
            nav.style.position = "absolute";
            nav.style.backgroundColor = 'transparent'
        }
    }

    const handleMenu = () => {
        document.querySelector('.menu-icon').classList.toggle('change');
        document.querySelector('.navbar-btns').classList.toggle('show-btns');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className="navbar">
            <a href="#home" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <img src="/imgs/logo-1x-compressed.gif" alt="Logo" />
            </a>
            <div className="menu-icon" onClick={handleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="navbar-btns">
                <a href="#sobre" onClick={handleMenu}>SOBRE</a>
                <a href="#skills" onClick={handleMenu}>SKILLS</a>
                {/* <a href="#">BLOG</a> */}
                {/* <Link to="/askmeanything">A.M.A</Link> */}
                <a href="#contato" onClick={handleMenu}>CONTATO</a>
            </div>
        </nav>
    )
}

export default Navbar