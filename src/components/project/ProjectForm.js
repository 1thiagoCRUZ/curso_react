import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    // Vai começar como um array vazio esperando a resposta que vai vir da API
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || []) // Vai receber os dados do projeto ou um objeto vazio

    useEffect(() => {

        // Request para a API na URL categories
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            // Determinando o tipo da comunicação
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((resp) => resp.json()) // Pegando os dados da resposta e transformando em JSON
            .then((data) => {
                setCategories(data) // Pegando os dados em JSON e colocamos no hook de setCategories
            }).catch(err => console.log(err))
        // o catch vai imprimir os possíveis erros que podem dar na nossa request
    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({ 
            ...project, category: {
            id: e.target.value,
            /* A partir desse cara aqui abaixo vamos conesguir acessar qual opção 
            está selecionada por meio do indice, na linha de cima temos a opção
            e nessa daqui vamos pegar o text dela */
            name: e.target.options[e.target.selectedIndex].text
        },
    })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange} 
            value={project.name ? project.name : ''}
            />

            <Input 
            type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange} 
            value={project.budget ? project.budget : ''}
             />

            <Select 
            name="category_id" 
            text="Selecione a categoria" 
            options={categories}
            handleOnChange={handleCategory} 
            // Se a categoria estiver preenchida passa o valor dela
            // Se não passa espaço em branco
            value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm