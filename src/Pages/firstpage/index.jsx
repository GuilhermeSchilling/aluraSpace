import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from '../../assets/banner.png'
import styles from './PaginaInicial.module.scss'
import Rodape from "../../componentes/Rodape";
import Galeria from "../../componentes/Galeria";
import Populares from "../../componentes/Populares";
function Mainpage(){
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço.</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            
            <Rodape/>
        </>
    )
}

export default Mainpage;
