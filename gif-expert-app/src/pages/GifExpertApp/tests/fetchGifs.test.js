import { fetchGifs } from "./fetchGifs";

describe("pruebas al fetch de gifs", () => {

    const gifToSerch = "neko";

    test("debe de retornar una arreglo de gifs", async () => {

        const arrayGifs = await fetchGifs(gifToSerch);

        expect(arrayGifs.length).toBeGreaterThan(0);

        expect(arrayGifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            img_ref: expect.any(String)
        });

    });

});