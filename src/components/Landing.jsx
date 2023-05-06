import {Link} from "react-rooter-dom";

const landing = () => {
    return (
        <div>
            <h1> Hace click para ingresar</h1>
            <button>
                <Link to= "/login">subite</Link>
            </button>
        </div>
    )
}

export default Landing;