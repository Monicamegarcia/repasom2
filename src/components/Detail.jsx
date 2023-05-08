import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const Detail = () => {
    const dispatch= useDispatch();
    const characterDetail = useSelector (state =>state.characterDetail)
    const {id} = useParams();
    const imageSliced= characterDetail?.images?.[0].split("revision")[0];
    useEffect(()=>{
        dispatch(getCharacterDetail(id))
        
        return () => dispatch (cleanDetail())
    }, [id])
    return (
        <div>
            <h1>{characterDetail.name}</h1>
            <img src={imageSliced} />
            {characterDetail.jutsu && <p>Jutsu: {characterDetail.jutsu [0] }</p>}
            
        </div>
    )
}

export default Detail;

//usando el renderizado condicional, no se rompe la App si alguno de los personajes
//no tiene jutsu, si la tiene mostrala sino no