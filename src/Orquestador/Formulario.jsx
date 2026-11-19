import '../Style/Tarjeta.css'; 
import Campos from '../Componentes/Formulario/Campos';
import Button from '../Componentes/Formulario/Button';
import Tarjeta from './Tarjeta';

const Entradas = [
    { name: "title", label: "Título", type: "text", placeholder: "Ingrese el título" },
    { name: "categoria", label: "Categoria", type: "text", placeholder: "Ej: Grafica" },
    { name: "precio", label: "Precio", type: "text", placeholder: "Digite el precio" },
    { name: "img", label: "imagen", type: "text", placeholder: "Ingrese la URL de la imagen" },
    { name: "descripcion", label: "Descripción", type: "text", placeholder: "Ingrese la descripción" },
    { name: "color", label: "Color", type: "color" },
];

export default function Formulario({datos,onCambio,onEnviar,onReset,onVolver}){
  
  const Botones = [
    { type: 'submit', text: 'enviar', onClick: onEnviar },
    { type: 'button', text: 'limpiar', onClick: onReset },
    { type: 'button', text: 'volver', onClick: onVolver }
  ];

  return(
    <>
    <div className='formulario'>
      <div>
    
        <form onSubmit={onEnviar} onReset={onReset}>   
          <div className='form-group'>
            {Entradas.map((Campo)=>(
              <Campos
                key={Campo.name}
                name={Campo.name}
                label={Campo.label}
                type={Campo.type}
                valor={datos[Campo.name]}
                placeholder={Campo.placeholder}
                onCambio={onCambio}
          />
          ))}
          </div>

          <div className='botones'>
            {Botones.map((boton)=>(
              <Button
                key={boton.text}
                type={boton.type}
                text={boton.text}
                onClick={boton.onClick}

              />
            ))}
          </div>
        </form>
      </div>
    </div>

    <Tarjeta tarjeta={datos} isPreview={true} />
  
    </>
  )
}