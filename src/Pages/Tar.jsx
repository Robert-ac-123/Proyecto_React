import '../Style/Tarjeta.css'; 
import { useNavigate } from 'react-router-dom';
import Tarjeta from '../Orquestador/Tarjeta'; // Importamos el componente de arriba

// Recibe el arreglo "tarjeta", la función "eliminar" y "setTarjetaAEditar" de App.jsx
export default function Tar({ tarjeta, eliminar, setTarjetaEditada }) {
    const navigate = useNavigate();

    // Función que se ejecuta cuando alguien hace clic en "Editar" en la tarjeta
    const handleEditar = (t) => {
        setTarjetaEditada(t); // Guardamos la tarjeta seleccionada en el estado de App.jsx
        navigate('/Formulario'); // Lo enviamos a la página del formulario
    };

    // Se Filtra las tarjetas por categoría 
    const graficas = tarjeta.filter((t) => t.categoria === 'Grafica');
    const procesadores = tarjeta.filter((t) => t.categoria === 'Procesador');
    const ssd = tarjeta.filter((t) => t.categoria === 'SSD');
    const ram = tarjeta.filter((t) => t.categoria === 'RAM');
    // Si no todas tienen categoría, puedes hacer un filtro de "otros"
    const otros = tarjeta.filter((t) => t.categoria !== 'Grafica' && t.categoria !== 'Procesador' && t.categoria !== 'SSD' && t.categoria !== 'RAM');

    return (
        <div className="titulo-seccion">
            {/* SECCIÓN DE GRÁFICAS */}
            <h2>Tarjetas Gráficas</h2>
            <div className="contenedor-tarjetas">
                {/* .map recorre las gráficas y dibuja una <Tarjeta /> por cada una */}
                {graficas.map((t) => (
                    <Tarjeta 
                        key={t.id} 
                        tarjeta={t} // Le pasamos el objeto completo
                        onEliminar={eliminar} // Le pasamos la función para borrar
                        onEditar={handleEditar} // Le pasamos la función para editar
                    />
                ))}
            </div>

            {/* SECCIÓN DE PROCESADORES */}
            <h2>Procesadores</h2>
            <div className="contenedor-tarjetas">
                {procesadores.map((t) => (
                    <Tarjeta 
                        key={t.id} 
                        tarjeta={t} 
                        onEliminar={eliminar} 
                        onEditar={handleEditar} 
                    />
                ))}
            </div>

            {/* SECCIÓN DE RAM */}
            <h2>Memorias RAM</h2>
            <div className="contenedor-tarjetas">
                {ram.map((t) => (
                    <Tarjeta 
                        key={t.id} 
                        tarjeta={t} 
                        onEliminar={eliminar} 
                        onEditar={handleEditar} 
                    />
                ))}
            </div>

            {/* SECCIÓN DE DISCOS SSD */}
            <h2>Tarjetas SSD</h2>
            <div className="contenedor-tarjetas">
                {ssd.map((t) => (
                    <Tarjeta 
                        key={t.id} 
                        tarjeta={t} 
                        onEliminar={eliminar} 
                        onEditar={handleEditar} 
                    />
                ))}
            </div>

            {/* SECCIÓN DE OTROS */}
            <h2>Otros Componentes</h2>
            <div className="contenedor-tarjetas">
                {otros.map((t) => (
                    <Tarjeta 
                        key={t.id} 
                        tarjeta={t} 
                        onEliminar={eliminar} 
                        onEditar={handleEditar} 
                    />
                ))}
            </div>
        </div>
    );
}