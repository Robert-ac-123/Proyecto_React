import '../Style/Tarjeta.css';
import Titulo from '../Componentes/Tarjeta/Titulo';
import Imagen from '../Componentes/Tarjeta/Imagen';
import Descripcion from '../Componentes/Tarjeta/Descripcion';
import Precio from '../Componentes/Tarjeta/Precio';
import Boton from '../Componentes/Formulario/Button'; 

export default function Tarjeta({ tarjeta, onEliminar, onEditar, isPreview = false }) {
    return (
        <div className="tarjeta" style={{ backgroundColor: tarjeta.color || '#f0f0f0' }}>
            <div className="tarjeta-imagen">
                <Imagen img={tarjeta.img} />
            </div>
            
            <div className="tarjeta-info">
                <Titulo title={tarjeta.title} />
                <Descripcion descripcion={tarjeta.descripcion} />
                <Precio precio={tarjeta.precio} />
                
                {!isPreview && (
                <div className="tarjeta-acciones">
                    <Boton text="Editar" onClick={() => onEditar(tarjeta)} type="button" />
                    <Boton text="Eliminar" onClick={() => onEliminar(tarjeta.id)} type="button" />
                </div>
            )}
            </div>
        </div>
    );
}