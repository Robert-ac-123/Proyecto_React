export default function Campos({ title, img, descripcion, color, valor, onCambio}) {
    return(
        <div>
            <label> 
                title={title}
                img={img}
                descripcion={descripcion}
                color={color}
                value={valor}
                onChange={onCambio}
            
            </label>
        </div>
    ) 
}

