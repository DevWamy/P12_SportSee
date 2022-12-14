import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';
import PropTypes from 'prop-types';
import CustomLegend from './CustomLegend';
import '../style/components/_scoreChart.scss';

/**
 * @description Component to display the current percentage of the user's objectives
 * This component shows the user's progress with percentage.
 * @return {JSX.Element}    A customized pie chart.
 */

const ScoreChart = ({ score }) => {
    const data = score?.data?.score;

    return (
        <div className="score-chart">
            <PieChart>
                <Pie
                    data={score}
                    dataKey={score?.data?.score}
                    nameKey={score?.data?.id}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                />
                <Pie
                    data={score?.data?.score}
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
            <ResponsiveContainer width="100%" height="100%">
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

ScoreChart.propTypes = {
    score: PropTypes.object.isRequired,
};

export default ScoreChart;
