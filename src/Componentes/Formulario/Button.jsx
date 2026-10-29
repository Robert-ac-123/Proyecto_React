export default function Button({submit, text, onClick}){
    return(
        <div>
            <button type={submit}
                onClick={onClick}
                >   
                {text}
            </button>
        </div>
        
    )
}