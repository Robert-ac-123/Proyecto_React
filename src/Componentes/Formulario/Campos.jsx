export default function Campos({ etiqueta, title, img, descripcion, color, valor, onCambio}) {
    return(
        <div>
            <label> {etiqueta}: </label>
            <input 
                title={title}
                img={img}
                descripcion={descripcion}
                color={color}
                value={valor}
                onChange={onCambio}
            />
        </div>
    ) 
}

