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
}

const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
}

const validate =() => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
}
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={form.email} onChange={handleOnchange} />
            <hr/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={form.password} onChange={handleOnchange}/>
            <hr/>
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default Form;