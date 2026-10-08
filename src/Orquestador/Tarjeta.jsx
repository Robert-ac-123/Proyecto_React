import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Tarjeta/Titulo'
import Imagen from '../Componentes/Tarjeta/Imagen'
import Descripcion from '../Componentes/Tarjeta/Descripcion'
import Precio from '../Componentes/Tarjeta/Precio'

export default function Tarjeta({title, descripcion, img, color, precio}){
  return(
    <div className="CentrarC">         
      <div className="Centrar" style={{backgroundColor: color}}>
        <div className="img">          
           <Imagen img={img} />
        </div>
        
        <div className="order">        
          <Titulo title={title} />
          <Descripcion descripcion={descripcion} />
          <Precio precio={precio} />
        </div>
      </div>
    </div>
  )
}