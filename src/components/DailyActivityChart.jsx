import React from 'react';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { formatDay } from '../services/chartUtils';
import { getUserActivity } from '../services/userFetchData';
import '../style/components/_activityChart.scss';

/**
 * @description Component to display the weight and the calories burned by the user.
 * In this component, the function returns a component with a title, responsive container, double bar chart, x-axis, right y-axis, legend, and custom tooltip.
 * @return  {JSX.Element}   A customized bar chart.
 */

const DailyActivityChart = () => {
    const [dailyDatas, setDailyDatas] = useState(null);

    useEffect(() => {
        getUserActivity().then((data) => {
            setDailyDatas(data);
        });
    }, []);

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

    return (
        <div className="activity-chart">
            <h4>Activité quotidienne</h4>
            {/* Taille du graph et quelles données on affiche. */}
            {dailyDatas && (
                <BarChart width={785} height={300} data={dailyDatas.data.sessions}>
                    {/* Pas d'affichage des lignes verticales et taille des pointillés. */}
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    {/* marge entre graph et jours, pas de graduation, et format de jour specifique. */}
                    <XAxis dataKey="day" tickMargin={16} tickSize={0} tickFormatter={formatDay} />
                    {/* affiché à droite, normalement tous les kg, pas d'axe de base, pas de graduation. */}
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
                    {/* Ici c'est l'infobulle. outline evite la ligne de contour par défaut. */}
                    <Tooltip
                        content={<CustomTooltip />}
                        wrapperStyle={{
                            outline: 'none',
                        }}
                    />
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
            )}
        </div>
    );
};

export default DailyActivityChart;
