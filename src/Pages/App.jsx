import '../Style/Tarjeta.css'; 
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Tar from "./Tar";
import Inicio from "./inicio";
import Logo from '../Componentes/Tarjeta/Logo.jsx';
import FormularioPage from "./FormularioPage.jsx";
import useTarjetas from "../Hook/useTarjetas.js";


export default function App(){

    const { tarjeta, agregar, editar, eliminar } = useTarjetas();
    const [tarjetaEditada, setTarjetaEditada] = useState(null); 


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
            <nav className="navbar">
                <div className="navbar-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/Tarjetas">Elementos</Link>
                    <Link to="/Formulario">Creacion</Link>
                </div>
            </nav>

            <div>
                <Routes>
                    <Route path="/" element={ <Inicio /> } />
                    <Route path="/Tarjetas" element={ <Tar tarjeta={tarjeta} eliminar={eliminar} setTarjetaEditada={setTarjetaEditada}/> } />


                    <Route path="/Formulario" element={
                        <FormularioPage 
                            key={tarjetaEditada ? tarjetaEditada.id : 'nueva'} 
                            agregar={agregar} 
                            editar={editar} 
                            tarjetaEditada={tarjetaEditada}
                            setTarjetaEditada={setTarjetaEditada}
                        />
                    } />
                </Routes>
            </div>
        </div>
        </div>
    );
}

