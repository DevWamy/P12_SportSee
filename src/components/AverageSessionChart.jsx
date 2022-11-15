import React from 'react';
import { useState, useEffect } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { formatDayWeek } from '../services/chartUtils';
import { getAverageSession } from '../services/userFetchData';
import '../style/components/_averageChart.scss';

/**
 * This component describes the user's average session data.
 * In this component, a function is written that returns a component with a title, a responsive container, a line graph, a line, an abscissa, ordinates and a custom tooltip.
 *
 * @returns {JSX.Element}   A line chart.
 */

const AverageSessionChart = () => {
    const [sessionDatas, setSessionDatas] = useState(null);

    useEffect(() => {
        getAverageSession().then((data) => {
            setSessionDatas(data);
        });
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

    return (
        <div className="average-sessions-chart">
            <h4>Durée moyenne des sessions</h4>
            {sessionDatas && (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sessionDatas.data.sessions}>
                        <XAxis
                            dataKey="day"
                            tickFormatter={formatDayWeek}
                            //Espacement entre la courbe et les jours.
                            tickSize={8}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.6)', dx: -5 }}
                            style={{ transform: 'scale(0.90)', transformOrigin: 'bottom' }}
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
                            activeDot={{
                                background: '#FFFFFF',
                                stroke: 'rgba(255, 255, 255, 0.3)',
                                strokeWidth: 10,
                                r: 4,
                            }}
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

export default AverageSessionChart;
