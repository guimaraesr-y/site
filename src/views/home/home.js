import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './home.css';
import './home.mobile.css';
import StarsParallax from '../../components/starsParallax/starsParallax';
import LoadingWheel from '../../components/loadingWheel/loadingWheel';
import { req } from '../../utils';

const Home = () => {
    
    const [inputs, setInputs] = useState({});
    const [contactMessageSent, setContactMessageSent] = useState(undefined);
    const [contactErrorMessage, setContactErrorMessage] = useState(undefined);
    const [formLoading, setFormLoading] = useState(false);

    const tecnologiasData = [
        { src: '/imgs/technologies/python.svg', name: 'Python' },
        { src: '/imgs/technologies/nodejs.svg', name: 'Node' },
        { src: '/imgs/technologies/php.svg', name: 'PHP' },
        { src: '/imgs/technologies/java.svg', name: 'Java' },
        { src: '/imgs/technologies/mysql.svg', name: 'SQL' },
        { src: '/imgs/technologies/react.svg', name: 'React' },
        { src: '/imgs/technologies/spring.svg', name: 'Spring' },
        { src: '/imgs/technologies/next-js.svg', name: 'Next.JS' },
    ]

    const handleScroll = () => {
        if(window.scrollY > 1500) {
            let imgs = document.querySelectorAll(".skills-item");
            imgs.forEach(async(img, i) => {
                setTimeout(() => {
                    img.classList.remove("opacity-0")
                }, (i * 400))
            });
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setFormLoading(true);
        req('/api/contact', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'content-type':'application/json'
            }
        })
            .then(async(data) => {
                if(data.status !== 200 && data.status !== 201) {
                    let json = await data.json()
                    throw new Error(json.message)
                }

                data.json();
            })
            .then(data => {
                setFormLoading(false);
                setContactMessageSent(true);
            })
            .catch(err => {
                console.log(err)
                setFormLoading(false);
                setContactMessageSent(false);
                setContactErrorMessage(err.message);
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
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])

    return (
        <>
            <Navbar />
            <div>
                <StarsParallax />
                <Header />
            </div>
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
                    <div className='social-links'>
                        <a href='https://github.com/guimaraesr-y' target='_blank' rel='noreferrer'>
                            <img src='/imgs/social/github.svg' alt='Github' width={36} />
                        </a>
                        <a href='https://www.instagram.com/guimaraesr.y/' target='_blank' rel='noreferrer'>
                            <img src='/imgs/social/instagram.svg' alt='Instagram' width={36} />
                        </a>
                        <a href='https://www.linkedin.com/in/guimaraesry/' target='_blank' rel='noreferrer'>
                            <img src='/imgs/social/linkedin.svg' alt='Linkedin' width={36} />
                        </a>
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
                </div>
            </section>

            <section id='skills' className='app-container'>
                <h1>SKILLS</h1><hr />
                <div className='skills-panel animate__animated animate__fadeIn animate__delay-1s'>
                    <div className='skills-divs'>
                        { tecnologiasData.map(skill => (
                            <div className='skills-item opacity-0' key={skill.name}>
                                <div className='skills-item--top'>
                                    <img src={skill.src} alt={'Linguagem de programação ' + skill.name} />
                                </div>
                                <div className='skills-item--bottom'>
                                    <hr/>
                                    <strong>{skill.name}</strong>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            <section id='contato' className=''>
                <StarsParallax />
                <div className='contato--div'>
                    <div>
                        <form className='form p-5' onSubmit={handleFormSubmit}>
                            <h1 className='mb-4 text-center'>Deixe-me uma mensagem!</h1>
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
                                <div className="input-group mb-3">
                                    <div className='form-floating'>
                                        <input 
                                            name="firstName" 
                                            className="form-control w-75" 
                                            placeholder="Nome"
                                            id='nameInput'
                                            type="text" 
                                            aria-label="Nome" 
                                            value={inputs.firstName || ""}
                                            onChange={handleType}  
                                            required
                                        />
                                        <label htmlFor="nameInput" className="form-label">Nome <span className='text-danger'>*</span></label>
                                    </div>
                                    <div className='form-floating'>
                                        <input 
                                            name="lastName" 
                                            className="form-control" 
                                            id='surnameInput'
                                            placeholder="Sobrenome"
                                            type="text" 
                                            aria-label="Sobrenome" 
                                            value={inputs.lastName || ""}
                                            onChange={handleType} 
                                            required
                                        />
                                        <label htmlFor="surnameInput" className="form-label">Sobrenome <span className='text-danger'>*</span></label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    name="email" 
                                    type="email" 
                                    className="form-control" 
                                    id="emailInput" 
                                    value={inputs.email || ""} 
                                    onChange={handleType} 
                                    placeholder="name@example.com" 
                                    autoComplete="true"
                                    required
                                />
                                <label htmlFor="emailInput" className="form-label">Email <span className='text-danger'>*</span></label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    name="phone" 
                                    type="tel" 
                                    className="form-control" 
                                    id="phoneInput" 
                                    value={inputs.phone || ""} 
                                    onChange={handleType} 
                                    placeholder="(99) 9 9999-9999" 
                                    autoComplete="true"
                                />
                                <label htmlFor="phoneInput" className="form-label">Celular</label>
                            </div>

                            <div className="form-text">Nunca compartilharemos seus dados com terceiros.</div>

                            <div className="form-floating mb-3">
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
                                <label htmlFor="subjectInput" className="form-label">Assunto <span className='text-danger'>*</span></label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea 
                                    name="message" 
                                    className="form-control border rounded" 
                                    id="messageInput" 
                                    style={{height: "150px"}}
                                    placeholder="Digite sua mensagem aqui"
                                    value={inputs.message || ""} 
                                    onChange={handleType}
                                    required
                                />
                                <label htmlFor="messageInput">Mensagem <span className='text-danger'>*</span></label>
                            </div>

                            <div className='d-flex align-items-center mt-3 gap-5'>
                                <button type="submit" className="btn submit-btn">Enviar Mensagem</button>
                                { formLoading ? <LoadingWheel width="50px" /> : '' }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home