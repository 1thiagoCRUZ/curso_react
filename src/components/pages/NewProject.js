import { useHistory } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'


function NewProjetct() {

  /* Esse hook permite redirecionar o usuário quando for necessário
  Nesse caso quando o usuário fizer uma requisição POST podemos redirecioná-lo
  para outra página */

  const history = useHistory()

  // Função responsável por inserir o projeto no sistema
  function createPost(project) {

    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project)
    }).then(
      ((resp) => resp.json())
        .then((data) => {
          console.log(data)

          // espaço para o redirect
        })
    ).catch(err => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1> Criar Projeto</h1>
      <p> Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProjetct