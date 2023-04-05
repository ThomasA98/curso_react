import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {

    console.log("renderizado");
    return (
        <button
        className="btn btn-primary"
        onClick={ () => increment(10) }>
            incrementar
        </button>
    );
});
