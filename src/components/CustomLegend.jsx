/**
 *
 * @description Component to customise the legend's score chart.
 * It's use in the score chart component.
 */
const CustomLegend = ({ payload }) => (
    <div className="chart-legend">
        <div className="chart-legend-1">{payload[0].payload.value * 100}%</div>
        <div className="chart-legend-2">de votre objectif</div>
    </div>
);

export default CustomLegend;
