import { useLocation } from "react-router-dom" // hook //

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import styles from "./Projects.module.css"

function Projects() {
  /* Constante que vai ser o useLocation */
  const location = useLocation()

  /* Declaramos a variável de message, inicialmente vazia */
  let message = ''

  /* Se possuir algum conteúdo no state location eu vou ver se a message existe
  e ai eu vou acessar message que é o location.state.message. Veio o location state?  
  Então eu vou acessar o message que eu sei que tá lá e eu vou atribuir o valor a variável
  message */
  if(location.state) {
    message = location.state.message
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

        <Container customClass="start">
          <p>Projetos...</p>
        </Container>
     
      </div>
    )
  }
  
  export default Projects