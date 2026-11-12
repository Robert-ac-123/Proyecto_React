export default function Campos({ etiqueta,title, img, descripcion, color, valor,name, onCambio}) {
    return(
        <div>
            <label>{etiqueta} </label>
            <input> 

                title={title}
                name={name}
                img={img}
                placeholder={descripcion}
                color={color}
                value={valor}
                onChange={onCambio}

            </input>  
        </div>
    ) 
}

