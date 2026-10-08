import { useNavigate } from "react-router-dom";
import '../Style/Tarjeta.css'
import ABC from '../assets/inicio.jpg'
import Efecto from '../Componentes/Home/Efecto'
import Ini from '../Orquestador/Inicio'
import Inicio from '../Style/inicio.json'

export default function Start(){
    
    const llevame = useNavigate();

    return (
        <div>
            <div className="inicio">
                <h1>Bienvenidos</h1>

                {Inicio.map((productos)=>(
                <Ini
                    title={productos.title}
                    descripcion={productos.descripcion}
                    color={productos.color}
                />
                ))}
            </div>

            <div className="inicio-imagen">
                
                <Efecto 
                src={ABC} 
                onFin={()=>llevame('/Tarjetas')}
                />
            </div>

        </div>
            
            
               
        

        

        

    )

}


