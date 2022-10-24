import React from 'react';
import meditation from '../assets/meditation.svg';
import swimming from '../assets/swimming.svg';
import bike from '../assets/bike.svg';
import pump from '../assets/pump.svg';
import '../style/components/_sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <img src={meditation} alt="meditation" />
                </li>
                <li>
                    <img src={swimming} alt="swimming" />
                </li>
                <li>
                    <img src={bike} alt="bike" />
                </li>
                <li>
                    <img src={pump} alt="pump" />
                </li>
            </ul>
            <div className="copyright">
                <span>Copyright, SportSee 2020</span>
            </div>
        </div>
    );
};

export default Sidebar;
