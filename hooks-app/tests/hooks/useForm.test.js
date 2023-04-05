import { act, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {

    const initialForm = {
        name: 'Tamiel',
        email: 'tamiel@g.com'
    };

    test("Debe regresar la informacion por defecto", () => {

        const { result } = renderHook(() => useForm());

        const { formState } = result.current;

        expect(formState).toEqual({});
    });

    test("Debe regresar la informacion por un valor inicial", () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test("Debe de cambiar el nombre del formulario", () => {
        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));

        act(() => {
            result.current.onInputChange({target : { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test("Debe dar reset del formulario", () => {
        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));

        act(() => {
            result.current.onInputChange({target : { name: 'name', value: newValue } });
            
            result.current.onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});