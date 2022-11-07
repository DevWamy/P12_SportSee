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
import '../style/_home.scss';

// const userDatas = [
//     // {
//     //     id: 12,
//     //     userInfos: {
//     //         firstName: 'Karl',
//     //         lastName: 'Dovineau',
//     //         age: 31,
//     //     },
//     //     todayScore: 0.12,
//     //     keyData: {
//     //         calorieCount: 1930,
//     //         proteinCount: 155,
//     //         carbohydrateCount: 290,
//     //         lipidCount: 50,
//     //     },
//     // },
//     // {
//     //     id: 18,
//     //     userInfos: {
//     //         firstName: 'Cecilia',
//     //         lastName: 'Ratorez',
//     //         age: 34,
//     //     },
//     //     score: 0.3,
//     //     keyData: {
//     //         calorieCount: 2500,
//     //         proteinCount: 90,
//     //         carbohydrateCount: 150,
//     //         lipidCount: 120,
//     //     },
//     // },
// ];

const Home = () => {
    // const [fetchDatas, setFetchDatas] = useState(false);
    const [userDatas, setUserDatas] = useState(null);
    const url = 'http://localhost:3000/user/18';
    const getDatas = async () => {
        try {
            const response = await fetch(url);

            const myDatas = await response.json();
            setUserDatas(myDatas);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // let data;
        // if (!fetchDatas) {
        //     setFetchDatas(true);
        //     fetch('http://localhost:3000/user/18')
        //         .then((response) => {
        //             data = response.json();
        //         })
        //         .then((datas) => {
        //             setUserDatas(datas?.data);
        //             console.log(datas);
        //             // setFetchDatas(false);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             setFetchDatas(true);
        //         });
        //     console.log(data);
        // }

        getDatas();
    }, []);
    return (
        <div className="home">
            <Header />
            <Sidebar />
            <div className="home-content">
                {userDatas && (
                    <div className="home-content-header">
                        <h1>
                            Bonjour <span className="firstname">{userDatas.data.userInfos.firstName}</span>
                        </h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                )}
            </div>
            {userDatas && (
                <div className="home-content-body">
                    <div className="home-content-body-chart">
                        <DailyActivityChart />
                        <AverageSessionsChart />
                        <PerfChart />
                        <ScoreChart />
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
                        <Card icon={lipidsIcon} quantity={userDatas.data.keyData.lipidCount} type="Lipides" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
