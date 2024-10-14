import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"
import Rodape from "./components/Rodape"
import styles from "./components/Container/container.module.css"

function App() {
  return(
    <div className={styles.container}> 
      <Cabecalho/>
      <Formulario/>
      <Rodape/>
    </div>
  )
}

export default App
