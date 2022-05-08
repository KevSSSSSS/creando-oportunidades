import React from "react";

//Estos son los tags de los oficios
const categorias = ["Carpinteria", "Herreria", "Pisos", "Plomeria", "Electricidad", "Campo", "Conductor", "Jardin", "Limpieza"];

function MenuCategories(){
    return(
        <div className="list-group m-1">
            <h5 className="container">Categorías</h5>
            <hr></hr>  
            {categorias.map((cat) => <a href="#" className="list-group-item list-group-item-action">{cat}</a>)}
        </div>
    );
}

export default MenuCategories;