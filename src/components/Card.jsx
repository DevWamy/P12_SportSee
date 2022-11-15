import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/_card.scss';

/**
 * @description Component to display the amount of calories burned, proteins, fats, carbohydrates.
 * @return  {JSX.Element}   A descriptive card component.
 */

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

/**
 * @defaultProps quantity: default value= 0
 * @defaultProps unity: default value= ' '
 */
Card.defaultProps = {
    quantity: 0,
    unity: '',
};

export default Card;
