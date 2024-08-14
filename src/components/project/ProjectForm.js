import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Project.module.css'
import { PiRocket } from 'react-icons/pi'

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
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange} 
            />

            <Input 
            type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange} 
             />

            <Select 
            name="category_id" 
            text="Selecione a categoria" 
            options={categories} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm