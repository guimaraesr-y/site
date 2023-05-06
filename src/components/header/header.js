import React, { useEffect, useState } from "react";
import { typeWrite } from "../../utils";
import './header.css'

const tecnologias = ["NODE.JS", "REACT.JS", "PHP", "JAVA"]

const Header = () => {
    const [tecnologia, setTecnologia] = useState()

    useEffect(() => {
        let i = 0
        setTecnologia(tecnologias[i])
        setInterval(() => {
            i >= tecnologias.length-1 ? i = 0 : i++
            typeWrite(tecnologias[i], setTecnologia)
        }, 3000)
    }, [])

    return (
        <header id="home">
            <div>
                <h1>FULLSTACK DEVELOPER</h1>
                <h2>FRONTEND & BACKEND</h2>
                <h1 className="tecnologias">
                    { tecnologia }
                    <span className="cursor"></span>
                    <span className="dot">.</span>
                </h1>
            </div>
            <img src="/imgs/computer.svg" width={"30%"} />
        </header>
    )
}

export default Header