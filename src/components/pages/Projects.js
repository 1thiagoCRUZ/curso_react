import { useLocation } from "react-router-dom" // hook //

import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import styles from "./Projects.module.css"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"

function Projects() {

  const [projects, setProjects] = useState([])
  /* Começa com false pois o loader sempre inicia, o true vai servir para remover o loader */
  const [removeLoading, setRemoveLoading] = useState(false)

  const [projectMessage, setProjectMessage] = useState('')

  /* Constante que vai ser o useLocation */
  const location = useLocation()

  /* Declaramos a variável de message, inicialmente vazia */
  let message = ''

  /* Se possuir algum conteúdo no state location eu vou ver se a message existe
  e ai eu vou acessar message que é o location.state.message. Veio o location state?  
  Então eu vou acessar o message que eu sei que tá lá e eu vou atribuir o valor a variável
  message */
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    /* Como o nosso backend é local, ou seja, as requisições são basicamente instantâneas
    a gente está utilizando o setTimeout para poder ver o loader */
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(resp => resp.json())
        .then(data => {
          console.log(data)
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 500)
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE', // Dessa forma ele entende que é uma rota para remover
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(resp => resp.json()).then(data => {
      setProjects(projects.filter((project) => project.id !== id))
      // Espaço para a mensagem de remoção
      setProjectMessage('Projeto removido com sucesso!')
    }).catch(err => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {/* Se o messagem ta preenchido então vamos imprimir o componente de Mensagem.
        Passamos o type succes porque sabemos que quando ele vem desse jeito sempre 
        vai ser sucesso */}
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados :(</p>
        )}
      </Container>

    </div>
  )
}

export default Projects