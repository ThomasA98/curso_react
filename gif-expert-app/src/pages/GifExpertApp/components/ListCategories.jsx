import { useGifFetch } from "../hooks/useGifFetch";
import { ListItemGifs } from "./ListItemGif";
import PropTypes from 'prop-types';

export const ListCategories = ({ gifToSerch }) => {

    const { gifs, isLoading } = useGifFetch(gifToSerch);

    return (
        <div>
            { isLoading && <p>Loading...</p> }
            <div className="card-grid" >
            {
                gifs?.map(({ id, img_ref, title }) =>
                    <ListItemGifs
                    key={ id }
                    img_ref={ img_ref }
                    title={ title }
                    />)
            }
            </div>

        </div>
    );
};

ListCategories.propTypes = {
    gifToSerch: PropTypes.string.isRequired,
}