import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import '../style/components/_charts.scss';

const sessionActivity = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 23,
            },
            {
                day: 3,
                sessionLength: 45,
            },
            {
                day: 4,
                sessionLength: 50,
            },
            {
                day: 5,
                sessionLength: 0,
            },
            {
                day: 6,
                sessionLength: 0,
            },
            {
                day: 7,
                sessionLength: 60,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 40,
            },
            {
                day: 3,
                sessionLength: 50,
            },
            {
                day: 4,
                sessionLength: 30,
            },
            {
                day: 5,
                sessionLength: 30,
            },
            {
                day: 6,
                sessionLength: 50,
            },
            {
                day: 7,
                sessionLength: 50,
            },
        ],
    },
];

console.log(sessionActivity);

const AverageSessionChart = () => {
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

    const dayWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    const formatDay = (item) => dayWeek[item];

    return (
        <div className="average-sessions-chart">
            <h4>Durée moyenne des sessions</h4>
            <LineChart width={258} height={143} data={sessionActivity[0].sessions}>
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
                <Tooltip content={<CustomTooltip />} fill={'rgba(0,0,0,.1'} />
                {/* <Line type="natural" dataKey="sessionLength" dot={false} stroke="#FFFFFF" strokeWidth={2} /> */}
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
        </div>
    );
};

export default AverageSessionChart;
