import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import DailyActivityChart from '../components/DailyActivityChart';
import AverageSessionsChart from '../components/AverageSessionChart';
import PerfChart from '../components/PerfChart';
import ScoreChart from '../components/ScoreChart';
import caloriesIcon from '../assets/calories-icon.svg';
import carbosIcon from '../assets/carbos-icon.svg';
import lipidsIcon from '../assets/lipids-icon.svg';
import proteinsIcon from '../assets/proteins-icon.svg';
import { getUserInfos } from '../services/userFetchData';
import '../style/_home.scss';

// /**
//  * Display customized home page.
//  *
//  * @returns {JSX.Element} Home, charts and cards customized components.
//  */

const Home = () => {
    const [userDatas, setUserDatas] = useState(null);

    useEffect(() => {
        getUserInfos().then((data) => {
            setUserDatas(data);
        });
    }, []);
    return (
        <div className="home">
            <Header />
            <Sidebar />
            {userDatas && (
                <div className="home-content">
                    <div className="home-content-header">
                        <h1>
                            Bonjour <span className="firstname">{userDatas.data.userInfos.firstName}</span>
                        </h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="home-content-body">
                        <div className="home-content-body-chart">
                            <DailyActivityChart />
                            <AverageSessionsChart />
                            <PerfChart />
                            <ScoreChart score={userDatas} />
                        </div>
                        <div className="results">
                            <Card
                                icon={caloriesIcon}
                                quantity={userDatas.data.keyData.calorieCount}
                                unity="kCal"
                                type="Calories"
                            />
                            <Card
                                icon={proteinsIcon}
                                quantity={userDatas.data.keyData.proteinCount}
                                unity="g"
                                type="Proteines"
                            />
                            <Card
                                icon={carbosIcon}
                                quantity={userDatas.data.keyData.carbohydrateCount}
                                unity="g"
                                type="Glucides"
                            />
                            <Card
                                icon={lipidsIcon}
                                quantity={userDatas.data.keyData.lipidCount}
                                type="Lipides"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
