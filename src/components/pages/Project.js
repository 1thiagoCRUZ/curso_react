import styles from './Project.module.css'
// Bblioteca que nos permite utilizar parâmetros na URL
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {
    const { id } = useParams()


    const [project, setProject] = useState([])

    useEffect(() => {
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
    }, [id])

    return (
        <div>{project.name}</div>
    )
}

export default Project