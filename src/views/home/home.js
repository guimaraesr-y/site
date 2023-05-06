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
        { src: '/imgs/technologies/html5.svg', name: 'HTML' },
        { src: '/imgs/technologies/python.svg', name: 'Python' },
        { src: '/imgs/technologies/nodejs.svg', name: 'Node.JS' },
        { src: '/imgs/technologies/c.svg', name: 'C' },
        { src: '/imgs/technologies/cpp.svg', name: 'C++' },
        { src: '/imgs/technologies/csharp.svg', name: 'C#' },
        { src: '/imgs/technologies/php.svg', name: 'PHP' },
        { src: '/imgs/technologies/java.svg', name: 'Java' },
        { src: '/imgs/technologies/mysql.svg', name: 'MySQL' }
    ]
    
    const frameworksData = [
        { src: '/imgs/technologies/bootstrap.svg', name: 'BootStrap' },
        { src: '/imgs/technologies/dot-net-core.svg', name: '.NET Core' },
        { src: '/imgs/technologies/react.svg', name: 'React.JS' },
        { src: '/imgs/technologies/spring.svg', name: 'Spring Boot' },
        { src: '/imgs/technologies/next-js.svg', name: 'Next.JS' },
        { src: '/imgs/technologies/express.svg', name: 'Express' },
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
                            Programador, músico e aprendiz.<br/>
                            Desde sempre, tenho um grande interesse em aprender coisas novas, 
                            especialmente na área da computação. Sou uma pessoa focada e 
                            comprometida, sempre em busca da excelência em tudo o que faço. 
                            Valorizo a criação de ambientes amigáveis e descontraídos, principalmente 
                            quando colaborando com equipes com equipes, pois acredito que isso 
                            favorece uma boa comunicação e convivência.
                        </p>
                    </div>
                    <img width={"30%"} src='/imgs/ryan.webp' alt='Foto do desenvolvedor, Ryan' />
                    <div className='sobre-div-content'>
                        <p>
                            Comecei a programar em 2020, ainda no ensino médio, quando comecei a estudar 
                            HTML5, CSS3 e JS. Com o tempo, fui me aprofundando em outras linguagens de 
                            programação, como Python, Node.JS, C/C++/C#, PHP e Java. Desde então, sempre 
                            estive em busca de tecnologia e inovação. Participei de um projeto de iniciação 
                            científica do estado do Rio de Janeiro, chamado Jovens Talentos para a Ciência, 
                            e tive a oportunidade de participar da Rio Innovation Week 2022.
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
                            <img width={70} src='/imgs/leaf.svg' preload="true" alt='Programando' /><br />
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