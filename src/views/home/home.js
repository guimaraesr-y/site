import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import config from '../../config';
import './home.css';
import './home.mobile.css';

const Home = () => {
    const { API_BASEURL } = config;
    const [inputs, setInputs] = useState({});
    const [contactMessageSent, setContactMessageSent] = useState(undefined);
    const [contactErrorMessage, setContactErrorMessage] = useState(undefined);

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
        if(window.scrollY > 1040) {
            let imgs = document.querySelectorAll("#skills > div > img");
            imgs.forEach(async(img, i) => {
                setTimeout(() => {
                    img.classList.add("showOn")
                }, (i * 400))
            });
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        fetch(API_BASEURL+'/api/contact', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'content-type':'application/json'
            }
        })
            .then(data => data.json())
            .then(data => {
                if(!data.ok) setContactErrorMessage(data.message);
                setContactMessageSent(data.ok || false);
            })
            .catch(err => {
                setContactMessageSent(false);
                setContactErrorMessage('Ocorreu um erro ao enviar sua solicitação! Tente novamente mais tarde');
            })
            .finally(() => {
                document.querySelector('#contato form').scrollIntoView();
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
            <section id='sobre' className='app-container'>
                <h1>SOBRE</h1><hr />
                <div className='sobre-div'>
                    <div className='sobre-div-name'>
                        <div>
                            <p className='sobre-name'>RYAN</p>
                            <p className='sobre-role'>FULL-STACK DEVELOPER</p>
                        </div>
                        <h1 className='sobre-title'>GUIMARÃES</h1>
                    </div>
                    <div className='sobre-div-content'>
                        <img src='/imgs/ryan.webp' alt='Desenvolvedor e dono do website, Ryan' />
                        <p>
                            Programador, músico e aprendiz.<br/>
                            Focado e comprometido, desenvolvo aplicações web, como websites e APIs.
                            Minha especialidade atual Javascript e Typescript, utilizando React.js
                            e Node.js em boa parte dos meus projetos. Pessoalmente acredito que um
                            negócio precisa de uma identidade digital para se conectar com os clientes.
                            Seja bem vindo ao meu mundo.<br/><br/>
                            <code>hello, world!<span className="cursor"></span></code>
                        </p>
                    </div>
                    <p>
                        <strong>Um pouco mais...</strong><br/>
                        Comecei a estudar programação e computação em 2020, ainda no ensino médio, 
                        com HTML5, CSS3 e JS. Com o tempo, fui me aprofundando em outras áreas e 
                        linguagens de programação, como Python, Node.JS, C/C++/C#, PHP e Java.
                        Além dessas linguagens, também tenho desenvolvido aplicações utilizando 
                        MySQL como SGBD, Java Spring e ASP.NET Core. Desde então, sempre estive em 
                        busca de tecnologia e inovação. Participei de um projeto de iniciação científica 
                        do estado do Rio de Janeiro, chamado Jovens Talentos para a Ciência, e tive 
                        a oportunidade de participar da Rio Innovation Week 2022.<br/>
                    </p>
                </div>
            </section>

            <section id='skills' className='app-container'>
                <h1>SKILLS</h1><hr />
                <div className='skills-panel'>
                    <div className='skills--left'>
                        <h2>Linguagens</h2><br/>
                        <div className='tech-skills-divs'>
                            { linguagensData.map(skill => (
                                <div className='tech-skills-item' key={skill.name}>
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
                                <div className='tech-skills-item' key={skill.name}>
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

            <section id='middle'>
                <div className='middle-item'>
                    <img src='/imgs/coding.png' alt='Coding background' />
                    <div className='app-container'>
                        <hr/>
                        <h2>
                            Soluções inovadoras e eficientes
                        </h2>
                    </div>
                </div>
                <div className='middle-item middle-item-reverse'>
                    <img src='/imgs/coding-2.webp' alt='Coding background 2' />
                    <div className='app-container'>
                        <hr/>
                        <h2>
                            Foco no código e na experiência do usuário
                        </h2>
                    </div>
                </div>
            </section>

            <section id='contato' className='app-container'>
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
                        <form className='form p-5' onSubmit={handleFormSubmit}>
                            <h1 className='mb-3'>Deixe-me uma mensagem!</h1>
                            {
                                contactMessageSent === true
                                    ? <div id='successMessage' className='alert alert-primary d-flex align-items-center' role='alert'>
                                            <i className='bi bi-check-circle-fill' role='img' aria-label='Success:'></i>
                                            <div>
                                                Obrigado! Sua mensagem foi enviada, assim que possível entrarei em contato.
                                            </div>
                                        </div>
                                    : contactMessageSent === false 
                                        ? <div id='errorMessage' className='alert alert-danger d-flex align-items-center' role='alert'>
                                                <i className='bi bi-exclamation-triangle-fill' role='img' aria-label='Warning:'></i>
                                                <div>
                                                    {contactErrorMessage}
                                                </div>
                                            </div>
                                        : ''
                            }
                            
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Nome<span className='text-danger'>*</span></label>
                                <div className="input-group mb-3" id="nameInput" >
                                    <input 
                                        name="firstName" 
                                        className="form-control w-25" 
                                        placeholder="Nome"
                                        type="text" 
                                        aria-label="Nome" 
                                        value={inputs.firstName || ""}
                                        onChange={handleType}  
                                        required
                                    />
                                    <input 
                                        name="lastName" 
                                        className="form-control w-50" 
                                        placeholder="Sobrenome"
                                        type="text" 
                                        aria-label="Sobrenome" 
                                        value={inputs.lastName || ""}
                                        onChange={handleType} 
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email<span className='text-danger'>*</span></label>
                                <input 
                                    name="email" 
                                    type="email" 
                                    className="form-control" 
                                    id="emailInput" 
                                    aria-describedby="emailHelp" 
                                    value={inputs.email || ""} 
                                    onChange={handleType} 
                                    required
                                />
                                <div id="emailHelp" className="form-text">Nunca compartilharemos seus dados com terceiros.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneInput" className="form-label">Celular</label>
                                <input 
                                    name="phone" 
                                    type="tel" 
                                    className="form-control" 
                                    id="phoneInput" 
                                    placeholder="(99) 9 9999-9999" 
                                    value={inputs.phone || ""} 
                                    onChange={handleType} 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subjectInput" className="form-label">Assunto<span className='text-danger'>*</span></label>
                                <input 
                                    name="subject" 
                                    type="text" 
                                    className="form-control" 
                                    id="subjectInput" 
                                    placeholder="Digite o assunto de sua mensagem" 
                                    value={inputs.subject || ""} 
                                    onChange={handleType}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageInput" className="form-label">Mensagem<span className='text-danger'>*</span></label>
                                <textarea 
                                    name="message" 
                                    className="form-control" 
                                    id="messageInput" 
                                    rows="3" 
                                    placeholder="Digite sua mensagem aqui"
                                    value={inputs.message || ""} 
                                    onChange={handleType}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home