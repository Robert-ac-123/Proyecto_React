import '../Style/Tarjeta.css'
import Campos from '../Componentes/Formulario/Campos'
import Button from '../Componentes/Formulario/Button'
import { BotonAtras } from '../Componentes/Tarjeta/Boton'
import Tarjeta from '../Orquestador/Tarjeta'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Entradas=[
  {type:"text", titulo:" ", descripcion:"", color:''},
  {type:"text", titulo:" ", descripcion:"", color:''},
  {type:"text", titulo:" ", descripcion:"", color:''},
  {type:"text", titulo:" ", descripcion:"", color:''},

]

const inicial ={titulo:'', img:'', descripcion:'', color:''}

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
      title:datos.titulo,
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
                title={Campo.titulo}
                descripcion={Campo.descripcion}
                color={Campo.Color}
                valor={datos[Campo.title]}
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
      title={datos.titulo}
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