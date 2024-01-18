import React, { useEffect } from "react";
import "./starsParallax.css"

const StarsParallax = () => {
    const starsParallax = React.createRef();

    const resizeHandler = () => {
        starsParallax.current.style.height = `${starsParallax.current.parentElement.offsetHeight}px`;
    }

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    })

    return (
        <div ref={starsParallax} className="stars-parallax">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    )

}

export default StarsParallax;