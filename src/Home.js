import React from 'react';
import Header from './components/Header';
import './style/_home.scss';

const Home = () => {
    //Datas en variable
    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <div className="home-content-header">
                    <h1>
                        Bonjour <span className="firstname">PRENOM UTILISATEUR</span>
                    </h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="home-content-body">
                    <div className="results">{/* Ici j'integrerai les cards. */}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
