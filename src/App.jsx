import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"
import styles from "./components/Container/container.module.css"
import Rodape from "./components/rodape/rodape"

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
