import {parse, v4 as uuidv4 } from 'uuid' // Cria um id único para a gente e é responsável por renderizar as listas no React

import styles from './Project.module.css'
// Biblioteca que nos permite utilizar parâmetros na URL
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import Message from '../layout/Message'


function Project() {
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {
        setTimeout(() => {
            // Usando id como parâmetro na URL
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => resp.json())
                .then((data) => {
                    // Pegando os dados do projeto
                    setProject(data)
                })
                .catch(err => console.log(err))
        }, 300)
    }, [id])

    function editPost(project) {
        // Usado para corrigir o bug da mensagem só aparecer uma vez mediante a mais de uma edição
        setMessage('')
        // budget validation
        if (project.budget < project.cost) {
            // mensagem
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            // Return false para parar essa função aqui, dessa maneira o projeto não atualiza
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
            .then((data) => {
                // Pegando os dados atualizados do projeto
                setProject(data)
                setShowProjectForm(false)
                // mensagem
                setMessage('Projeto atualizado com sucesso!')
                setType('success')
            })
            .catch(err => console.log(err))



    }

    function createService(project) {
        // Usado para corrigir o bug da mensagem só aparecer uma vez mediante a mais de uma edição
        setMessage('')

        // last service
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // Validação para caso passe do máximo valor permitido
        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }

        // Adicionando o valor de serviço ao valor total do projeto
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            // Exibir serviços
        }).catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ?
                (
                    <div className={styles.project_details}>
                        <Container customClass="column">
                            {/* Se tem algo preenchido no setMessage eu vou exibir o componente de mensagem e mandar o tipo e o conteúdo da mensagem */}
                            {message && <Message type={type} msg={message}/>}
                            <div className={styles.details_container}>
                                <h1> Projeto: {project.name}</h1>
                                <button className={styles.btn} onClick={toggleProjectForm}>
                                    {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                                </button>
                                {!showProjectForm ? (
                                    <div className={styles.project_info}>
                                        <p>
                                            <span>Categoria: </span> {project.category.name}
                                        </p>

                                        <p>
                                            <span>Total de Orçamento: </span> R${project.budget}
                                        </p>

                                        <p>
                                            <span>Total Utilizado: </span> R${project.cost}
                                        </p>
                                    </div>
                                ) : (
                                    <div className={styles.project_info}>
                                        <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                                    </div>
                                )}
                            </div>
                            <div className={styles.service_form_container}>
                                <h2>Adicione um serviço: </h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                                </button>
                                <div className={styles.project_info}>
                                    {showServiceForm && (
                                        <ServiceForm 
                                        handleSubmit={createService}
                                        btnText="Adicionar Serviço"
                                        projectData={project}
                                        />
                                    )}
                                </div>
                            </div>
                            <h2>Serviços</h2>
                            <Container customClass="start">
                                <p>Itens de serviços</p>
                            </Container>
                        </Container>
                    </div>
                )

                : (
                    <Loading />
                )}
        </>
    )
}

export default Project