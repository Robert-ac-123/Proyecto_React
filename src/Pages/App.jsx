import { Routes, Route, Link } from "react-router-dom";
import Tar from "./Tar";
import Inicio from "./inicio";
import Logo from '../Componentes/Tarjeta/Logo.jsx';
import Formulario from "../Orquestador/Formato";
import productos from '../Style/data.json';
import { useState } from "react";


export default function App(){
    const[tarjeta,setTarjeta]=useState(productos)
    const agregar=(nueva)=>setTarjeta([...tarjeta,nueva])


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
                    <Route path="/Tarjetas" element={ <Tar tarjeta={tarjeta}/>} />
                    <Route path="/Formato" element={ <Formulario agregar={agregar}/> } />
                </Routes>
            </div>
        </div>
        </div>
    );
}

