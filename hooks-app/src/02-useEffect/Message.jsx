import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {

    const [ cords, setCords ] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const mousemove = ({ x, y }) => {
            setCords({ x, y });
        };

        window.addEventListener('mousemove', mousemove);

        return () => {
            window.removeEventListener('mousemove', mousemove);
        };

    }, []);

    return (
        <div>
            <p>el usuario ya existe</p>
            { `x ${cords.x}, y ${cords.y}` }
        </div>
    );
};