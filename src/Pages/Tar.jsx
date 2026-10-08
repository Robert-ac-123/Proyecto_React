import Tarjeta from '../Orquestador/Tarjeta'
import Robert from '../Style/data.json'
import { BotonAdelante } from '../Componentes/Tarjeta/Boton'

export default function Tar(){
    return(
        <div>
        {Robert.map((productos)=>(
          <Tarjeta
            title={productos.title}
            descripcion={productos.descripcion}
            color={productos.color}
            img={productos.img}
            precio={productos.precio}
          />
        ))}
         
          <div className='mi-boton-adelante'>
            <BotonAdelante />
          </div>


        </div>
    )
}