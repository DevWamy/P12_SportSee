import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/_card.scss';

const Card = ({ icon, quantity, unity, type }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="content">
                <p className="quantity">
                    {quantity}
                    {unity}
                </p>
                <p className="type">{type}</p>
            </div>
        </div>
    );
};

//Proptypes
Card.propTypes = {
    icon: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

//Je ne sais pas si il faut le mettre ou non.
Card.defaultProps = {
    icon: '',
    quantity: 0,
    unity: '',
    type: '',
};

export default Card;
