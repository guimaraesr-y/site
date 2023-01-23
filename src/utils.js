

export const randomRange = (min, max)  => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export const typeWrite = (text, setFunction) => {
    let i = 0;
    let write = "";
    let speed = randomRange(100,200)
    
    function typeWriter() {
        if (i < text.length) {
            speed = randomRange(100,200)
            write += text.charAt(i)
            setFunction(write)
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()
}