import { render, screen } from '@testing-library/react';

import { ListItemGifs } from '../components';

describe("Pruebas al componente <ListItemGifs />", () => {

    let initialValues = {
        title: "google",
        img_ref: "https://google.com/"
    };

    test("snapshot <ListItemGif />", () => {

        let { container } = render(
        <ListItemGifs 
            title={ initialValues.title } 
            img_ref={ initialValues.img_ref } />
        );

        expect(container).toMatchSnapshot();

    });

    test("debe mostrar la imagen con el url y el alt indicado", () => {

        render(
            <ListItemGifs 
                title={ initialValues.title } 
                img_ref={ initialValues.img_ref } />
        );

        let { src, alt } = screen.getByRole("img");

        expect({ src, alt }).toStrictEqual({ src: initialValues.img_ref, alt: initialValues.title });

    });

    test("debo mostar titulo en el componente", () => {
        
        render(
            <ListItemGifs 
                title={ initialValues.title } 
                img_ref={ initialValues.img_ref } />
        );

        screen.getByText(initialValues.title)

    });

});