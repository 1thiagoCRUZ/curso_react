## Aula 6
### Adicionando CSS

- O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo 🟦***index.css*** por exemplo;
- Porém, é possível estilizar a nível de componentes;
- Utilizamos o CSS modules para isso;
- Basta criar um arquivo com o seguinte nome: 📁 -> ```Componente.module.css``` - (NomeDoComponente.module.css);
- E chamar este CSS no componente em questão.


Nos arquivos de CSS dos componentes temos que nos atentar a nomenclatura, pois, não podemos criar classes com o hífen pois não vai reconhecer.


❌ ***Exemplo errado***
```bash
frase-container
```


✅ ***Exemplos corretos***
```bash
.fraseContainer
```
```bash
.frase_container
```

### Importando CSS modules no arquivo do componente
Para importar o processo é bem semelhante a todos os outros, a única diferença é que para esse tipo de arquivo 🟦***CSS*** precisamos colocar o ```styles``` após o ```import```.

O ```styles``` é semelhante a ```props```, é um cara que condensou todo o conteúdo presente no seu arquivo em propriedades.


Passamos tudo isso por meio de um ```className``` na tag em questão.
Desse jeito aqui
```bash
<div className={styles.fraseContainer}>
```

Basicamente o arquivo de 🟦***index.css*** vai servir para definir o 🟦***CSS*** geral do projeto, margins, padding e etc.
Enquanto o CSS modules é para uma estilização mais específica.
