import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWhitCustomHook = () => {

    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
        <div>
            <h1>Formulario</h1>
            <hr />

            <input 
            type="text" 
            className="form-control m-2" 
            placeholder="UserName" 
            name="username" 
            value={ username }
            onChange={ onInputChange } />

            <input 
            type="password" 
            className="form-control  m-2" 
            placeholder="contraseña" 
            name="password" 
            value={ password }
            onChange={ onInputChange } />
            
            <input 
            type="email" 
            className="form-control m-2" 
            placeholder="email@gmail.com" 
            name="email" 
            value={ email }
            onChange={ onInputChange } />

            <button className="btn btn-warning m-2" onClick={ onResetForm }>Reset</button>

            { username === 'strider2' && <Message /> }
        </div>
    );
};