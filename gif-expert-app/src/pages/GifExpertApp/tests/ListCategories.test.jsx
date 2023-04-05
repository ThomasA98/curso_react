import { render, screen } from '@testing-library/react';
import { ListCategories } from '../components';
import { useGifFetch } from "../hooks/useGifFetch";

jest.mock("../hooks/useGifFetch");

describe("pruebas en <listCategories />", () => {

    const gifToSerch = "";

    test("debe de mostrar el loading inicialmente", () => {

        useGifFetch.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        render( <ListCategories gifToSerch={ gifToSerch } /> );
        
        expect(screen.getByText("Loading..."));
    });

    test("debe mostrar items cuando carga las imagenes del hook", () => {

        const gifs = [
            { 
                id: '123',
                img_ref: "https://localhost/imagen1.jpg",
                title: "imagen1"
            }
            ,{ 
                id: '456',
                img_ref: "https://localhost/imagen2.jpg",
                title: "imagen2"
            }
            ,{ 
                id: '789',
                img_ref: "https://localhost/imagen3.jpg",
                title: "imagen3"
            }
        ];

        useGifFetch.mockReturnValue({
            gifs: gifs,
            isLoading: false,
        });

        render( <ListCategories gifToSerch={ gifToSerch } /> );

        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });

});