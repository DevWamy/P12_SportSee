import React from 'react';
import { useState, useEffect } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import '../style/components/_averageChart.scss';

// const sessionActivity = [
//     {
//         userId: 12,
//         sessions: [
//             {
//                 day: 1,
//                 sessionLength: 30,
//             },
//             {
//                 day: 2,
//                 sessionLength: 23,
//             },
//             {
//                 day: 3,
//                 sessionLength: 45,
//             },
//             {
//                 day: 4,
//                 sessionLength: 50,
//             },
//             {
//                 day: 5,
//                 sessionLength: 0,
//             },
//             {
//                 day: 6,
//                 sessionLength: 0,
//             },
//             {
//                 day: 7,
//                 sessionLength: 60,
//             },
//         ],
//     },
//     {
//         userId: 18,
//         sessions: [
//             {
//                 day: 1,
//                 sessionLength: 30,
//             },
//             {
//                 day: 2,
//                 sessionLength: 40,
//             },
//             {
//                 day: 3,
//                 sessionLength: 50,
//             },
//             {
//                 day: 4,
//                 sessionLength: 30,
//             },
//             {
//                 day: 5,
//                 sessionLength: 30,
//             },
//             {
//                 day: 6,
//                 sessionLength: 50,
//             },
//             {
//                 day: 7,
//                 sessionLength: 50,
//             },
//         ],
//     },
// ];

// console.log(sessionActivity);

const AverageSessionChart = () => {
    const [sessionDatas, setSessionDatas] = useState(null);
    const url = 'http://localhost:3000/user/18/average-sessions';
    const getDatas = async () => {
        try {
            const response = await fetch(url);

            const myDatas = await response.json();
            setSessionDatas(myDatas);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDatas();
    }, []);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length > 0) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomHover = ({ points }) => {
        return <rect x={points[0].x} y={0} height="100%" width="100%" fill="rgba(0, 0, 0, 0.1)" />;
    };

    const dayWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    const formatDay = (item) => dayWeek[item];

    return (
        <div className="average-sessions-chart">
            <h4>Durée moyenne des sessions</h4>
            {sessionDatas && (
                <ResponsiveContainer height="70%">
                    <LineChart data={sessionDatas.data.sessions}>
                        {/* <LineChart data={sessionActivity[0].sessions}> */}
                        <XAxis
                            dataKey="day"
                            tickFormatter={formatDay}
                            //Adaptation du contenu à l'element parent.
                            padding={{ left: 10, right: 10 }}
                            //Espacement entre la courbe et les jours.
                            tickSize={23}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 500 }}
                        />
                        <YAxis hide type="number" domain={[(dataMin) => 0, (dataMax) => dataMax + 10]} />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={<CustomHover />}
                            fill={'rgba(0,0,0,.1'}
                        />

                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="#fff"
                            //Largeur de la courbe
                            strokeWidth={2}
                            //Taille du point actif (au hover)
                            activeDot={{ r: 4 }}
                            //Taille des points inactifs
                            dot={{ r: 0 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default AverageSessionChart;
