import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text} </label>
            {/* No value vai pegar o valor que vier de value ou vazio */}
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => ( // Nomeando o item que essas options vão virar
                    <option value={option.id} key={option.id}>{option.name}</option>
                ) // No JSX temos que retornar um parentêses
                )}
            </select>
        </div>
    )
}

export default Select