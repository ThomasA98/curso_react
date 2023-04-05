import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe("Pruebas en useCounter", () => {

    test("Debe de retornar los valores por defecto", () => {

        const { result } = renderHook(() => useCounter());        

        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any( Function ));
        expect(increment).toEqual(expect.any( Function ));
        expect(reset).toEqual(expect.any( Function ));

    });

    test("Debe generar un counter con el valor de 100", () => {

        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test("Debe incrementar el contador", () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act(() => {
            increment();/* Incremento en 1 */
            increment(2);
        });

        const { counter } = result.current;

        expect(counter).toBe(103);

    });

    test("Debe decrementar el contador", () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act(() => {
            decrement();/* Decremento en 1 */
            decrement(2);
        });

        const { counter } = result.current;

        expect(counter).toBe(97);

    });

    test("Debe decrementar el contador", () => {

        const { result } = renderHook(() => useCounter(100));

        const { reset, increment } = result.current;

        act(() => {
            increment();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(100);

    });

});