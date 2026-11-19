export default function Imagen({img}){
    if (!img) return null;
    
    return(
        <img src={img} alt="" />
    )
}