import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [form, setForm]= useState ({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })


const handleOnchange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })

    setErrors(validate())
}

const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
}

const validate =() => {
    const error = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        error.email = "no es un email valido"
    }
    if (form.password.length > 6) {
        error.password= "debe tener minimo 6 caracteres"
    }
    return error
}
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={form.email} onChange={handleOnchange} />
            {errors.email && <span style={(color = "red")}>{errors.email}</span>}
            <hr/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={form.password} onChange={handleOnchange}/>
            {errors.password && <span style={(color="red")}>{errors.password}</span>}
            <hr/>
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default Form;

/*import React from "react";

class Form extends React.Component {
    constructor (props) {
        super (props)
        this.state={
            email: "",
            password: ""
        }
    }
    render () {
        return (
            <form> 
            
            </form>
        )
     }
    }

    //ejn comp de clase solo se puede tener un estado