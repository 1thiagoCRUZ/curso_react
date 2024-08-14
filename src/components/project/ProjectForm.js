import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Project.module.css'

function ProjectForm({ btnText }) {
    // Vai começar como um array vazio esperando a resposta que vai vir da API
    const [categories, setCategories] = useState([])

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

    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a categoria" options={categories} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm