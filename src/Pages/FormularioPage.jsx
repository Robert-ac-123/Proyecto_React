import useFormulario from "../Hook/useFormulario";
import { useEffect } from "react";
import Formulario from '../Orquestador/Formulario';

export default function FormularioPage({ agregar,editar, tarjetaEditada, setTarjetaEditada }) {

    const props = useFormulario(agregar, editar, tarjetaEditada); 
    
    useEffect(() => {
        return () => setTarjetaEditada(null); // Resetea la tarjeta editada al montar el componente
    }, [setTarjetaEditada]);

    return ( <Formulario {...props} /> );
}