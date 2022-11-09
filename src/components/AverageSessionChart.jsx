import React from 'react';
import { useState, useEffect } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
// import PropTypes from 'prop-types';
import '../style/components/_averageChart.scss';

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
    // const sessionRequired = sessionDatas.data.sessions;

    return (
        <div className="average-sessions-chart">
            <h4>Durée moyenne des sessions</h4>
            {sessionDatas && (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sessionDatas.data.sessions}>
                        {/* <LineChart data={sessionRequired}> */}
                        <XAxis
                            dataKey="day"
                            tickFormatter={formatDay}
                            //Adaptation du contenu à l'element parent.
                            padding={{ left: 10, right: 10 }}
                            //Espacement entre la courbe et les jours.
                            tickSize={5}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.6)' }}
                        />

                        <YAxis hide domain={['dataMin-6', 'dataMax+12']} />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={<CustomHover />}
                            fill={'rgba(0,0,0,.1'}
                            wrapperStyle={{
                                outline: 'none',
                            }}
                        />

                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="#fff"
                            //Largeur de la courbe
                            strokeWidth={2}
                            //Taille du point actif (au hover)
                            activeDot={{ r: 4 }}
                            unit={'min'}
                            //Taille des points inactifs
                            dot={{ r: 0 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

// AverageSessionChart.propTypes = {
//     sessionRequired: PropTypes.array.isRequired,
// };

export default AverageSessionChart;
