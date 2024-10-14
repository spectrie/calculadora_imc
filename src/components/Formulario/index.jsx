import { useState , useEffect} from "react"
import styles from './Formulario.module.css'

const Formulario = () =>{
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultadoImc, setResultadoImc] = useState(null);

    useEffect(()=> {
        if(altura > 0 && peso > 0){
            calculaImc();
        }
    },[altura, peso])

    const calculaImc = () =>{
        const alturaQuadrado = altura * altura;
        const IMC = peso / alturaQuadrado;

        if(IMC < 18.5){
            setResultadoImc(
            <p>Seu IMC é de: {IMC.toFixed(2)} e está abaixo do peso normal</p>
            )
        }else if(IMC>= 18.5 && IMC <= 24.9){
            setResultadoImc(
                <p>Seu IMC é de: {IMC.toFixed(2)} e o seu Peso é normal</p>
            )
        }else if(IMC >= 25.0 && IMC <= 29.9){
            setResultadoImc(
                <p>Seu IMC é de: {IMC.toFixed(2)} e está com excesso de peso</p>
            )
        }else if(IMC >= 30.0 && IMC <= 34.9){
            setResultadoImc(
                <p>Seu IMC é de: {IMC.toFixed(2)} Obesidade classe 1</p>
            )
        }else if(IMC >= 35.0 && IMC <= 39.0){
            setResultadoImc(
                <p>Seu IMC é de: {IMC.toFixed(2)} Obesidade classe 2</p>
            )
        }else{
            setResultadoImc(
                <p>Seu IMC é de: {IMC.toFixed(2)} Obesidade classe 3</p>
            )
        }
    }

    return(
        <section className={styles.formulario}>
            <h4>Por favor, insira seus atributos:</h4> <br/>
            <form className={styles.formContent}>
                <input className={styles.formItens} type="text" placeholder="Altura (Metros)" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
                <input className={styles.formItens} type="text" placeholder="Peso (Kg)" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
                <span className={styles.span}>{resultadoImc}</span> <br/>
                <p className={styles.font}>Classificação segundo a OMS a partir do IMC</p> <br/>
            </form>
        </section>
        
    )
}

export default Formulario