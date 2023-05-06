import {Link} from "react-router-dom";

const Character = ({image, id, name}) => {
    const imageSliced= image?.split("revision")[0]
    return (
        <div>
            <Link to={`/detail/${id}`} >
                    <h2>{name}</h2>
            </Link>
        
            <img style={{borderRadius: "100%"}} src={imageSliced} alt={name} />
        </div>
    )
}
export default Character;
//1 character
//especificamente con esta api, la direccion de la imagen no la toma
//por lo que se genera una const imageSliced, que "corta" la direccion de la 
//imagen, en img src, ahora es esa constante
//tener en cuenta que pueden haber varias formas de resolver lo de tarea imagenes
//para llegar a esta, probaron varias antes con slice, indexOf, etc
//analizando el link de cada imagen, en la api, se vio que todos tienen la palabra
//revision, entonces, si existe la imagen, cortalos en la revision, entonces
//corta y deja revision en una posicion