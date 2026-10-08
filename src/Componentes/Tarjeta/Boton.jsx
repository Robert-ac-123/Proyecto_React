import { Link } from 'react-router-dom'
import B from '../../assets/Adelante.jpg'
import A from '../../assets/Atras.jpg'

export function BotonAdelante(){
    return(
        <Link to="/Formato"><img src={B} alt="" /></Link>
        
    )

}

export function BotonAtras(){
    return(
        <Link to="/Tarjetas"><img src={A} alt="" /></Link>
    
    )
}