import React from 'react';
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

export default Card;
