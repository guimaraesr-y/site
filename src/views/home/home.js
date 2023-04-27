import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import config from '../../config';
import './home.css';
import './home.mobile.css';

const Home = () => {
    const { API_BASEURL } = config;
    const [inputs, setInputs] = useState({});
    const [formMessage, setFormMessage] = useState('');
    const [formLoading, setFormLoading] = useState(false);

    const linguagensData = [
        { src: '/site/imgs/technologies/html5.svg', name: 'HTML' },
        { src: '/site/imgs/technologies/python.svg', name: 'Python' },
        { src: '/site/imgs/technologies/nodejs.svg', name: 'Node.JS' },
        { src: '/site/imgs/technologies/c.svg', name: 'C' },
        { src: '/site/imgs/technologies/cpp.svg', name: 'C++' },
        { src: '/site/imgs/technologies/csharp.svg', name: 'C#' },
        { src: '/site/imgs/technologies/php.svg', name: 'PHP' },
        { src: '/site/imgs/technologies/java.svg', name: 'Java' },
        { src: '/site/imgs/technologies/mysql.svg', name: 'MySQL' }
    ]
    
    const frameworksData = [
        { src: '/site/imgs/technologies/bootstrap.svg', name: 'BootStrap' },
        { src: '/site/imgs/technologies/dot-net-core.svg', name: '.NET Core' },
        { src: '/site/imgs/technologies/react.svg', name: 'React.JS' },
        { src: '/site/imgs/technologies/spring.svg', name: 'Spring Boot' },
        { src: '/site/imgs/technologies/next-js.svg', name: 'Next.JS' },
        { src: '/site/imgs/technologies/express.svg', name: 'Express' },
    ]

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

    const handleFormSubmit = (event) => {
        setFormMessage("");
        event.preventDefault();
        setFormLoading(true);

        fetch(API_BASEURL+'/api/v1/contact', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'content-type':'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            setFormLoading(false);
            setFormMessage(data.message)
            setInputs({})
        }).catch(err => {
            setFormLoading(false);
            setFormMessage(err instanceof TypeError 
                ? "Não foi possível enviar sua solicitação no momento! Tente novamente mais tarde o pelo email: ryanguimaraesprofissional@gmail.com"
                : err.message
            )
        })
    }

    const handleType = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <Navbar />
            <Header />
            <section id='sobre' className='container'>
                <h1>SOBRE</h1><hr />
                <h1 style={{textAlign: 'center'}}>RYAN GUIMARÃES</h1>
                <div className='sobre-div'>
                    <div className='sobre-div-content'>
                        <p>
                            Programador, músico e eterno aprendiz.<br/>
                            Sempre gostei de aprender coisas novas, principalmente
                            quando envolvem computação, e isso não mudou — e nem vai. 
                            Focado e comprometido, busco excelência em tudo que faço.
                            Procuro manter ambientes amigáveis e descontraídos, 
                            principalmente quando colaborando com uma equipe, visando 
                            boa comunicação e convivência.
                        </p>
                    </div>
                    <img width={"30%"} src='/site/imgs/ryan.jpg' alt='Foto do desenvolvedor, Ryan' />
                    <div className='sobre-div-content'>
                        <p>
                            Comecei a programar em 2020, ainda no ensino médio, estudando 
                            HTML5, CSS3 e JS e então me aprofundei em diversas outras 
                            linguagens de programação como Python, Node.JS, C/C++/C#, PHP e Java.
                            <br /><br />
                            Desde sempre amante de tecnologia e inovação. Participei de um 
                            projeto de iniciação científica do estado do Rio de Janeiro, Jovens 
                            Talentos para a Ciência, e estive presente na Rio Innovation Week 2022.
                        </p>
                    </div>
                </div>
            </section>

            <section id='skills' className='container'>
                <h1>SKILLS</h1><hr />
                <div className='skills-panel'>
                    <div className='skills--left'>
                        <h2>Linguagens</h2><br/>
                        <div className='tech-skills-divs'>
                            { linguagensData.map(skill => (
                                <div className='tech-skills-item'>
                                    <div className='tech-skills-item--top'>
                                        <img src={skill.src} alt={'Linguagem de programação ' + skill.name} />
                                    </div>
                                    <div className='tech-skills-item--bottom'>
                                        <hr/>
                                        <strong>{skill.name}</strong>    
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                    <div className='skills--right'>
                        <h2>Bibliotecas/Frameworks</h2><br/>
                        <div className='tech-skills-divs'>
                            { frameworksData.map(skill => (
                                <div className='tech-skills-item'>
                                    <div className='tech-skills-item--top'>
                                        <img src={skill.src} alt={'Biblioteca ou Framework ' + skill.name} />
                                    </div>
                                    <div className='tech-skills-item--bottom'>
                                        <hr/>
                                        <strong>{skill.name}</strong>    
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </section>

            <section id='middle' preload="true">
                <div className='container'>
                    <div>
                        <h2>
                            <img width={70} src='/site/imgs/leaf.svg' preload="true" alt='Programando' /><br />
                            Landing Pages e APIs com código limpo e escalável
                        </h2>
                    </div>
                </div>
            </section>

            <section id='contato' className='container'>
                <h1>Contato</h1><hr/>
                <div className='contato--div'>
                    <div className='contato--left'>
                        <h3>
                            Quer discutir algum projeto?<br/>
                            Precisa de um site ou sistema?<br/><br/>
                            Me deixe uma mensagem e podemos conversar!
                        </h3>
                    </div>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label>Nome*</label><br />
                                <input 
                                    type='text' 
                                    name='nome' 
                                    value={inputs.nome || ""} 
                                    onChange={handleType} 
                                    required
                                />
                            </div>
                            <div>
                                <label>Email*</label><br />
                                <input 
                                    type='email' 
                                    name='email' 
                                    value={inputs.email || ""} 
                                    onChange={handleType} 
                                    required
                                />
                            </div>
                            <div>
                                <label>Assunto*</label><br />
                                <input 
                                    type='text' 
                                    name='assunto' 
                                    maxLength={128} value={inputs.assunto || ""} 
                                    onChange={handleType} 
                                    required
                                />
                            </div>
                            <div>
                                <label>Mensagem*</label><br />
                                <textarea 
                                    type='text' 
                                    name='corpo' 
                                    maxLength={512} rows={6} value={inputs.corpo || ""} 
                                    onChange={handleType} 
                                    required
                                />
                            </div>
                            <button className='btn' type='submit'>Contatar</button>
                            { formLoading ? <div class="lds-circle"><div></div></div> : ''}
                            <br/><br/>{ formMessage }
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home