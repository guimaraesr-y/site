import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './home.css';
import './home.mobile.css';

const Home = () => {
    const handleScroll = () => {
        if(window.pageYOffset > 1040) {
            let imgs = document.querySelectorAll("#skills > div > img");
            imgs.forEach(async(img, i) => {
                setTimeout(() => {
                    img.classList.add("showOn")
                }, (i * 400))
            });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <Navbar />
            <Header />
            <section id='sobre' className='container'>
                <h1>SOBRE</h1><hr />
                <div className='sobre-div'>
                    <img width={"40%"} src='/site/imgs/ryan.jpg' />
                    <div className='sobre-div-content'>
                        <h1>RYAN GUIMARÃES</h1>
                        <p>
                            Programador e músico. Uma combinação curiosa, porém muito comum.
                            Desenvolvendo desde 2020, ainda no ensino médio, quando comecei 
                            os estudos de HTML5, CSS3 e JS e então me aprofundei em diversas
                            linguagens de progração.
                            <br /><br />
                            Desde sempre amante de tecnologia e inovação, participei de um 
                            projeto de iniciação científica do Rio de Janeiro, Jovens Talentos, 
                            e estive presente na Rio Innovation Week 2022 visitando os grandes 
                            projetos tecnológicos apresentados.
                        </p>
                    </div>
                </div>
            </section>

            <section id='skills' className='container'>
                <h1>SKILLS</h1><hr />
                <div>
                    <img className='container' src="/site/imgs/technologies/html5.svg" />
                    <img className='container' src="/site/imgs/technologies/python.svg" />
                    <img className='container' src="/site/imgs/technologies/nodejs.svg" />
                    <img className='container' src="/site/imgs/technologies/react.svg" />
                    <img className='container' src="/site/imgs/technologies/c.svg" />
                    <img className='container' src="/site/imgs/technologies/cpp.svg" />
                    <img className='container' src="/site/imgs/technologies/php.svg" />
                    <img className='container' src="/site/imgs/technologies/java.svg" />
                    <img className='container' src="/site/imgs/technologies/spring.svg" />
                    <img className='container' src="/site/imgs/technologies/bootstrap.svg" />
                    <img className='container' src="/site/imgs/technologies/mysql.svg" />
                </div>
            </section>

            <section id='middle' preload="true">
                <div className='container'>
                    <div>
                        <h2>
                            <img width={70} src='/site/imgs/leaf.svg' preload="true" /><br />
                            Landing Pages e APIs com código limpo e escalável
                        </h2>
                    </div>
                </div>
            </section>

            <section id='contato' className='container'>
                <h1>Contato</h1><hr/>
                <div>
                    <img width={"30%"} src='/site/imgs/connections.svg' />
                    <div className='container'>
                        <h3>
                            Você pode me contatar via e-mail ou telefone, ou pode encontrar minhas
                            redes sociais na página de links.
                        </h3>

                        <div className='social-div container'>
                            <div onClick={() => window.location.href='mailto:guimaraesryan26@gmail.com'}>
                                <img width={50} src="/site/imgs/social/mail.svg" />
                                <p>guimaraesryan26@gmail.com</p>
                            </div>

                            <div onClick={() => window.open('https://api.whatsapp.com/send?phone=21996570056')}>
                                <img width={50} src="/site/imgs/social/whatsapp.svg" />
                                <p>(21) 9 9657-0056</p>
                            </div>
                        </div>

                        <Link to='/links'><p className='links-btn'>Acesse a página de links</p></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home