import Tarjeta from '../Orquestador/Tarjeta'

import { BotonAdelante } from '../Componentes/Tarjeta/Boton'

export default function Tar({tarjeta}){
    return(
        <div>
        {tarjeta.map((productos)=>(
          <Tarjeta
            title={productos.titulo}
            descripcion={productos.descripcion}
            color={productos.color}
            img={productos.img}
            
          />
        ))}
         
          <div className='mi-boton-adelante'>
            <BotonAdelante />
          </div>


        </div>
    )
}