import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const onInputChange = ({ target: { name, value} }) => {
        setFormState(prevValue => ({...prevValue, [name]: value}));
    };
/*
    useEffect(() => {
        console.log("use effect");
    }, []);

    useEffect(() => {
        console.log("form state");
    }, [formState]);

    useEffect(() => {
        console.log("email state");
    }, [formState.email]);
*/
    return (
        <div>
            <h1>Formulario</h1>
            <hr />

            <input 
            type="text" 
            className="form-control" 
            placeholder="UserName" 
            name="username" 
            value={ formState.username }
            onChange={ onInputChange } />
            
            <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="email@gmail.com" 
            name="email" 
            value={ formState.email }
            onChange={ onInputChange } />

            { formState.username === 'strider2' && <Message /> }
        </div>
    );
};