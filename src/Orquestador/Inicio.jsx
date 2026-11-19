import { Link } from 'react-router-dom';
import '../Style/Tarjeta.css'; 


// Recibimos la prop 'info' desde App.jsx
export default function Inicio({ title, descripcion }) {
    // Si por alguna razón info viene vacío, usamos valores por defecto para que no explote
    if (!title || !descripcion) return <p>Cargando información...</p>;

    return (
        <div className="inicio-contenedor">
            
            {/* Usamos info.title */}
            <h2 className="inicio-titulo">{title}</h2>
            
            {/* Usamos info.descripcion */}
            <p className="inicio-descripcion">
                {descripcion}
            </p>

            <img className="inicio-imagen"
                src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop" 
                alt="Componentes de PC" 
            />

            <div className="inicio-acciones">
                <Link to="/Tarjetas" className="btn-ir-productos">
                    Explorar Componentes
                </Link>
            </div>
        </div>
    );
}