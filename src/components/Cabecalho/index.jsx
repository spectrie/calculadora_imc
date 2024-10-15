import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return(
    <header className={styles.header}>
        <img className={styles.avatar} src="https://cdn-icons-png.flaticon.com/512/1668/1668490.png" alt="" />
        <h1>
            Calculadora IMC
            </h1>
    </header>
    )
}

export default Cabecalho;