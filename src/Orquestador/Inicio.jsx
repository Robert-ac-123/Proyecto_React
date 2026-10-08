import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Tarjeta/Titulo'
import Descripcion from '../Componentes/Tarjeta/Descripcion'

export default function Ini({title, descripcion, color}){
  return(
    <div className="CentrarC">         
      <div className="Centrar" style={{backgroundColor: color}}>
        
        <div className="order">        
          <Titulo title={title} />
          <Descripcion descripcion={descripcion} />
          
        </div>
      </div>
    </div>
  )
}