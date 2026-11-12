import '../Style/Tarjeta.css'
import Campos from '../Componentes/Formulario/Campos'
import Button from '../Componentes/Formulario/Button'
import { BotonAtras } from '../Componentes/Tarjeta/Boton'
import Tarjeta from '../Orquestador/Tarjeta'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Entradas=[
    { name: "title", label: "Título", type: "text" },
    { name: "descripcion", label: "Descripción", type: "text" },
    { name: "img", label: "Imagen", type: "text" },
    { name: "color", label: "Color", type: "color" }


]

const inicial ={title:'', img:'', descripcion:'', color:''}

export default function Formulario(agregar){
  const navigate=useNavigate()
      //valiable - Funcion
  const [datos, setDatos]=useState(inicial) 
  const cambiar=(e)=>{ //(e) -> Atributo/parametro, al usarlo invocamos un evento
    setDatos({...datos,[e.target.name]:e.target.value})
  }

  const enviar=(e)=>{
    e.preventDefault()
    agregar({
      title:datos.title,
      img:datos.img,
      descripcion:datos.descripcion,
      color:datos.color
    })
    navigate('/Tarjetas')
  }
  const Botones=[
  {type:'submit', text:'enviar'},
  {type:'submit', text:'limpiar'},
  {type:'submit', text:'volver', onClick:()=>navigate('/Tarjetas')}   
]

  return(
    <>
    <div className='formulario'>
      <div>
    

        <form action='' onSubmit={enviar} onReset={()=>setDatos(inicial)}>   
          <div className='form-group'>
            {Entradas.map((Campo)=>(
              <Campos
                key={Campo.name}
                title={Campo.label}
                descripcion={Campo.descripcion}
                color={Campo.color}
                valor={datos[Campo.name]}
                onCambio={cambiar}
          />
          ))}
          </div>

          <div className='botones'>
            {Botones.map((boton)=>(
              <Button
                key={boton.type}
                type={boton.type}
                text={boton.text}
                onClick={boton.onClick}

              />
            ))}
          </div>
        </form>
      </div>
    </div>

    <Tarjeta
      title={datos.title}
      img={datos.Imagen}
      descripcion={datos.descripcion}
      color={datos.color}

    />
     
      <div className='mi-boton-atras'>
        <BotonAtras />
      </div>
    </>

    
  
  )
}