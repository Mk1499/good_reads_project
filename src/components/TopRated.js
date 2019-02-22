import React from 'react';
import PropTypes from 'prop-types';

const TopRated = ({property}) => {
    const {picture, name, author} = property;
    return (
        <div className="card">
                <img className="img" src={picture} alt={name} />
                <p className="bookName"> {name}<br/></p>
                <p className="authorName"> By :  {author}<br/></p>
        </div>
    )
}

TopRated.propTypes = {
    property: PropTypes.object.isRequired
}

export default TopRated;