export default function Campos({ name, valor, onCambio, type, label, placeholder }) {
    return(
        <div>
            <label> {label}: </label>
            <input 
                type={type}
                name={name}
                value={valor}
                onChange={onCambio}
                placeholder={placeholder}
            />
        </div>
    ) 
}

