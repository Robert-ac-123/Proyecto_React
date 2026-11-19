import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const inicial = { title: '', descripcion: '', img: '', color: ' #f0f0f0', categoria: '', precio: '' };

export default function useFormulario(agregar,editar,tarjetaEditada) {
    
  const navigate=useNavigate()

      //valiable - Funcion
  const [datos, setDatos]=useState(tarjetaEditada || inicial); //Inicializa los datos en estado vacio, y setDatos es la funcion que actualiza el estado de datos
    
  
  const cambiar=(e)=>{ 
    //[e.target.name] es una propiedad que usa el name para usarlo como llave y e.target.value es el valor que se le asigna a esa llave
    setDatos({...datos,[e.target.name]:e.target.value})
  }

  const enviar=(e)=>{
      e.preventDefault()//Previene que la pagina se recargue 

      if(tarjetaEditada){
        editar(datos)

      } else {
        agregar(datos)
      }
      navigate('/Tarjetas')
  }

  return{
    datos,
    onCambio:cambiar,
    onEnviar:enviar,
    onReset:()=>setDatos(inicial),
    onVolver:()=>navigate('/Tarjetas')
  }
}