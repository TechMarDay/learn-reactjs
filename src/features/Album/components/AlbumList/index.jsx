import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Album from '../Album';

AlbumList.propTypes = {
    ablumList: PropTypes.array.isRequired,
};

AlbumList.defaultProps = {
    ablumList: []
}

function AlbumList({ ablumList }) {
    return (
        <ul className="album-list">
            {ablumList.map((
                ablum => (
                    <li key={ablum.id} >
                        <Album album={ablum} />
                    </li>
                )
            ))}
        </ul>
    );
}

export default AlbumList;