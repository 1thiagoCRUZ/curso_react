## Aula 16
### React Icons
- O React Icons é um pacote de ícones externo
- Precisamos adicionar ao projeto através do npm
- Ele nos permite adicionar ícones ao projeto com uma sintaxe parecida a de componentes
- Além disso há uma grande quantidade de ícones disponíveis 

Importando os ícones
```bash
npm install react-icons
```

Link: https://react-icons.github.io/react-icons/icons/sl/


No arquivo ***🟨Footer.js*** vamos importar a biblioteca de ícones e utilizar em forma de lista não ordenada
```bash
import { FaFacebook } from 'react-icons '
import styles from './Footer.module.css'

function Footer() {
    return <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        <p>Nosso rodapé</p>
        </footer>
}

export default Footer
```


É algo que fica bem legal no projeto visto que dá para alterar as configurações do ícone através do arquivo de 🟦***CSS*** do componente.