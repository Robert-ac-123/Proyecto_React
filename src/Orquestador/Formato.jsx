import '../Style/Tarjeta.css'
import Campos from '../Componentes/Formulario/Campos'
import Button from '../Componentes/Formulario/Button'
import { BotonAtras } from '../Componentes/Tarjeta/Boton'

const Entradas=[
  {type:"text", name:"Tu nombre", placeholder:"Nombre", obligatorio:true},
  {type:"email", name:"Correo", placeholder:"ejemplo@correo.com", obligatorio:true},
  {type:"password", name:"Contraseña", placeholder:"Contraseña Aqui", obligatorio:true},
  {type: "textarea", name: "Mensaje", placeholder: "Dejanos un mensaje aquí...", obligatorio: false }

]

export default function Formulario(){
  return(
    <>
    <div className='formulario'>
      <div className='Encabezado-formulario'>
        <img src = "/Logo/LogoSonarStyle.png" alt="" className='logo-formulario-area'/>
        <h1 className='titulo-formulario'>Crear Cuenta</h1>
        <p className='subtitulo-formulario'>Ingresa tus datos para crear tu cuenta</p>

        <form action='' >   
          <div className='form-group'>
            {Entradas.map((Campo)=>(
              <Campos
                key={Campo.name}
                etiqueta={Campo.name}
                name={Campo.name}
                type={Campo.type}
                placeholder={Campo.placeholder}
                required={Campo.obligatorio}
          />
          ))}
          </div>
        </form>
        <Button submit="submit" text="Enviar"/>
        <Button submit="submit" text="Limpiar"/>
        <Button submit="submit" text="Volver"/>
      </div>
    </div>
     
      <div className='mi-boton-atras'>
        <BotonAtras />
      </div>
    </>

    
  
  )
}