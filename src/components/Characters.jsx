/*import { useEffect } from "react";
import  {useDispatch, useSelector} from "react-redux";
import { getCharacters } from "../redux/actions";
import Character from "./Character";

const Characters = () => {
    const dispatch = useDispatch ();
    const characters = useSelector (state =>state.characters)
    useEffect (() => {
        dispatch (getCharacters())
    }, [])

    return (
        <div>
            <h1>Characters</h1>
            {
                characters.mpa(char=>{
                    return (
                        <Character
                        //saco las propiedades id, name de la API
                            key={char.id}
                            name= {char.name}
                            image= {char.images[0]}
                            id={char.id}
                        //images es porque en la api lo dice asi (enla de naruto je, y la imagen esta en
                        //un array, por eso pone posicion cero)
                        />
                    )
                    })
                }
        </div>
    )
}
export default Characters;
//tiene todos los characters, renderiza a cada uno de lso character
*/

import React from "react";
import {connect} from "react-redux";
import {getCharacters} from "../redux/actions";
import Character from "./Character";

class Characters extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCharacters()
    }

    render () {
        return (
            <div> 
                <h1>Characters</h1>
                {
                    this.props.characters.map (char=>{
                        return (
                            <Character 
                            key={char.id}
                            name= {char.name}
                            image= {char.images[0]}
                            id={char.id}
                            />
                           
                        )
                    } )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
 }

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: () => {dispatch(getCharacters())}
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Characters);