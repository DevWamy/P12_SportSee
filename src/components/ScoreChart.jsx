import React from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';
import '../style/components/_scoreChart.scss';

// const userScore = [
//     {
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50,
//         },
//     },
//     {
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120,
//         },
//     },
// ];

const ScoreChart = () => {
    const [scoreDatas, setScoreDatas] = useState(null);
    const url = 'http://localhost:3000/user/18';
    const getDatas = async () => {
        try {
            const response = await fetch(url);

            const myDatas = await response.json();
            setScoreDatas(myDatas);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDatas();
    }, []);

    // const data = userScore[1].score;
    const data = scoreDatas?.data?.score;
    const CustomLegend = ({ payload }) => (
        <div className="chart-legend">
            <div className="chart-legend-1">{payload[0].payload.value * 100}%</div>
            <div className="chart-legend-2">de votre objectif</div>
        </div>
    );

    return (
        <div className="score-chart">
            <PieChart>
                <Pie
                    // data={userScore}
                    data={scoreDatas}
                    // dataKey={userScore[1].score}
                    dataKey={scoreDatas?.data?.score}
                    // nameKey={userScore[1].id}
                    nameKey={scoreDatas?.data?.id}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                />
                <Pie
                    // data={userScore[0].score}
                    data={scoreDatas?.data?.score}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
            </PieChart>
            <h4>Score</h4>
            <ResponsiveContainer>
                <PieChart margin={{ top: 35, right: 35, bottom: 35, left: 35 }}>
                    <Pie
                        dataKey="value"
                        data={[
                            { name: 'score', value: data },
                            { name: 'total', value: 1 - data },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={'90%'}
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={450}
                    >
                        {/* Parametres de la 1ere courbe. */}
                        <Cell fill="#FF0000" stroke="#FF0000" cornerRadius={5} />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie
                        cx={'50%'}
                        cy={'50%'}
                        outerRadius={'90%'}
                        fill="#FFF"
                        data={[{ name: 'shadow-circle', value: 100 }]}
                        dataKey="value"
                    />
                    <Legend verticalAlign="middle" align="center" content={CustomLegend} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScoreChart;
