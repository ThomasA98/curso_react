import { renderHook, waitFor } from '@testing-library/react';
import { useGifFetch } from '../hooks/useGifFetch';

describe("Pruebas en el custom hook useGifFetch", () => {

    test("debe regresar el estado inicial", () => {

        const { gifs, isLoading } = renderHook(() => useGifFetch("One Punch")).result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test("debe regresar el un arreglo de imagenes y isLoading en false", async () => {

        const { gifs, isLoading } = renderHook(() => useGifFetch("One Punch")).result.current;

        await waitFor(() => expect(gifs.length).toBeGreaterThan(0));

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

});