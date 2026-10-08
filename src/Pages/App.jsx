import { Routes, Route, Link } from "react-router-dom";
import Tar from "./Tar";
import Inicio from "./inicio";
import Logo from '../Componentes/Tarjeta/Logo.jsx';
import Formulario from "../Orquestador/Formato";


export default function App(){
    return(

        <div className="pagina">

        <header className="header">
            <div className="logo-area">
            <Logo logo="/Logo/LogoSonarStyle.png" />

            <div className='nombre-empresa'>
                <h1>SonarStyle</h1>
            </div>
          
        </div>
      </header>

      <h1 className="titulo-principal">La mejor tecnologia</h1>

        <div>
            <nav className="menu ul">
                <Link to="/">Inicio</Link>
                <Link to="/Tarjetas">Tarjetas</Link>
                <Link to="/Formato">Formulario</Link>
            </nav>

            <div>
                <Routes>
                    <Route path="/" element={ <Inicio /> } />
                    <Route path="/Tarjetas" element={ <Tar />} />
                    <Route path="/Formato" element={ <Formulario /> } />
                </Routes>
            </div>
        </div>
        </div>
    );
}

