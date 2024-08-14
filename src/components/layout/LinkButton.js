import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

/* Vamos passar duas propriedades para esse cara o 'to' para dizer para onde que esse link vai e o texto
para alterar o texto dependendo da onde vamos utilizar ele*/
function LinkButton({ to, text }) {
    return (
        /* Envolvemos os valores das props em chaves pois são valores dinâmicos, ou seja, que
        podem mudar */
        <Link className={styles.btn} to={to}>
            {text} 
        </Link>
    )
}

export default LinkButton