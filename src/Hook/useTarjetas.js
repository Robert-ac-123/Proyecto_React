import productosIniciales from '../Style/data.json';
import { useState } from "react";

export default function useTarjetas(){
    const[tarjeta,setTarjeta]=useState(productosIniciales);

    //El '...()' es el operador de propagación, que permite crear un nuevo array con los elementos existentes y agregar uno nuevo al final
    const agregar = (nueva) => setTarjeta([...tarjeta, { ...nueva, id: Date.now() }]) //se crea un nuevo array que contiene todas las tarjetas existentes y se agrega la nueva tarjeta al final del array.

    //El método 'filter' crea un nuevo array con todos los elementos que cumplan la condición especificada en la función de devolución de llamada
    const eliminar=(id)=>setTarjeta(tarjeta.filter((tarjeta)=>tarjeta.id!==id)); //Aqui se filtran las tarjetas cuyo id no sea igual al id proporcionado, eliminando así la tarjeta.

    //.map() recorre el arreglo y devuelve un arreglo nuevo del mismo tamaño
    const editar=(tarjetaEditada)=>setTarjeta(tarjeta.map((tarjeta)=>tarjeta.id===tarjetaEditada.id? tarjetaEditada: tarjeta));

    return {tarjeta,agregar, eliminar, editar}
}