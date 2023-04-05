import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select()
    };

    return(
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
            ref={ inputRef }
            className="form-control m-2"
            type="text" 
            placeholder="Ingrese su nombre" />

            <button className="btn btn-primary m-2" onClick={ onClick } >Set Focus</button>
        </div>
    );
};
