import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import DailyActivityChart from '../components/DailyActivityChart';
import caloriesIcon from '../assets/calories-icon.svg';
import carbosIcon from '../assets/carbos-icon.svg';
import lipidsIcon from '../assets/lipids-icon.svg';
import proteinsIcon from '../assets/proteins-icon.svg';
import '../style/_home.scss';

const userDatas = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
        },
    },
];

console.log(userDatas);

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Sidebar />
            <div className="home-content">
                <div className="home-content-header">
                    <h1>
                        Bonjour <span className="firstname">{userDatas[0].userInfos.firstName}</span>
                    </h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="home-content-body">
                    <div className="home-content-body-chart">
                        <DailyActivityChart />
                    </div>
                    <div className="results">
                        <Card
                            icon={caloriesIcon}
                            quantity={userDatas[0].keyData.calorieCount}
                            unity="kCal"
                            type="Calories"
                        />
                        <Card
                            icon={proteinsIcon}
                            quantity={userDatas[0].keyData.proteinCount}
                            unity="g"
                            type="Proteines"
                        />
                        <Card
                            icon={carbosIcon}
                            quantity={userDatas[0].keyData.carbohydrateCount}
                            unity="g"
                            type="Glucides"
                        />
                        <Card icon={lipidsIcon} quantity={userDatas[0].keyData.lipidCount} type="Lipides" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
