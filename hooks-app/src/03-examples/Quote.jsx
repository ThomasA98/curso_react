import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ data = [{}] }) => {

    let { quote, author } = data[0];

    const cajaRef = useRef();

    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {

        let { width, height } = cajaRef.current.getBoundingClientRect();

        setBoxSize({
            width,
            height
        });

    }, [quote]);

    return (
        <p
        ref={ cajaRef }
        style={{ display: 'flex' }}
        key={ quote + author }

        >{ quote } - { author }
        </p>
    );
};