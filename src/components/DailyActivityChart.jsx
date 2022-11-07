import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import '../style/components/_activityChart.scss';

const userActivity = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240,
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220,
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280,
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290,
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160,
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162,
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240,
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220,
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280,
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500,
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160,
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162,
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390,
            },
        ],
    },
];

console.log(userActivity);

const DailyActivityChart = () => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length > 0) {
            return (
                <div className="custom-tooltip">
                    <div> {`${payload[0].value}kg`}</div>
                    <div> {`${payload[1].value}kCal`}</div>
                </div>
            );
        }
        return null;
    };

    const formatDay = (item) => new Date(item).getDate();

    return (
        <div className="activity-chart">
            <h4>Activité quotidienne</h4>
            {/* Taille du graph et quelles données on affiche. */}
            <BarChart width={785} height={320} data={userActivity[0].sessions}>
                {/* Pas d'affichage des lignes verticales et taille des pointillés. */}
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                {/* Absysse: marge entre graph et jours, pas de graduation, et format de jour specifique. */}
                <XAxis dataKey="day" tickMargin={16} tickSize={0} tickFormatter={formatDay} />
                {/* Ordonnée: affiché à droite, normalement tous les kg, pas d'axe de base, pas de graduation. */}
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    orientation="right"
                    domain={['dataMin -1', 'dataMax 0']}
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                />
                {/* On a besoin d'afficher le rendu des calories aussi mais sans les parametres. */}
                <YAxis
                    yAxisId="cal"
                    datakey="calories"
                    orientation="false"
                    domain={['dataMin-100', 'dataMax+0']}
                    axisLine={false}
                    tickLine={false}
                    hide={true}
                />
                {/* Ici c'est l'infobulle. */}
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    marginBottom={10}
                    align="right"
                    verticalAlign="top"
                    iconType="circle"
                    iconSize={10}
                    height={95}
                />
                {/* Barre de poids avec couleur epaisseur et arrondi en haut. */}
                <Bar
                    yAxisId="kg"
                    dataKey="kilogram"
                    name="Poids(kg)"
                    fill="#282D30"
                    barSize={7}
                    radius={[50, 50, 0, 0]}
                />
                {/* Barre de calories avec les bons parametres. */}
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    name="Calories brûlées (kCal)"
                    fill="#E60000"
                    barSize={7}
                    radius={[50, 50, 0, 0]}
                />
            </BarChart>
        </div>
    );
};

export default DailyActivityChart;
