export default function Campos({ etiqueta, type, name, placeholder, required}) {
    return(
        <div>
            <label> {etiqueta}: </label>
            <input 
                type={type} 
                id={name} 
                name={name} 
                placeholder={placeholder} 
                required={required} 
            />
        </div>
    ) 
}

