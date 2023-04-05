import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = ({ target: { name, value} }) => {
        setFormState(prevValue => ({...prevValue, [name]: value}));
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
};