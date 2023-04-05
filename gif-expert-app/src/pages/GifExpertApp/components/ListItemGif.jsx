import PropTypes from 'prop-types';

export const ListItemGifs = ({ title, img_ref }) => {
    return (
        <div className="card" >
            <p>{ title }</p>
            <img src={ img_ref } alt={ title } />
        </div>
    );
};

ListItemGifs.propTypes = {
    title: PropTypes.string.isRequired,
    img_ref: PropTypes.string.isRequired
};