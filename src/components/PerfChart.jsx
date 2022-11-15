import React from 'react';
import { useState, useEffect } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { kindTitle } from '../services/chartUtils';
import { getUserPerformance } from '../services/userFetchData';
import '../style/components/_perfChart.scss';

const PerfChart = () => {
    const [perfDatas, setPerfDatas] = useState(null);

    useEffect(() => {
        getUserPerformance().then((data) => {
            setPerfDatas(data);
        });
    }, []);

    // const kind = mockedPerformance[0].kind;
    // const data = mockedPerformance[0].data;

    return (
        <div className="perf-chart">
            {/* On a besoin que le graphique s'adapte à l'écran. Et je me tiens à la maquette. */}
            {perfDatas && (
                <ResponsiveContainer>
                    <RadarChart
                        data={perfDatas?.data?.data}
                        // data={data}
                        //Je centre l'affichage dans l'encart prévu.
                        cx="50%"
                        cy="50%"
                        //J'ajuste au mieux par rapport à la taille de base.
                        outerRadius="70%"
                        //Ici je modifie l'ordre d'affichage des termes par rapport à celui des données.
                        startAngle={210}
                        endAngle={570}
                    >
                        {/* On ne veux aucun trait à l'interieur du graphique. */}
                        <PolarGrid radialLines={false} />

                        <PolarAngleAxis
                            //J'ai besoin ici d'afficher le type de donnée selon son numero.
                            dataKey="kind"
                            // tickFormatter={kindTitle[perfDatas?.data?.kind]}
                            tickFormatter={(id) => kindTitle[perfDatas?.data?.kind[id]]}
                            //Paramètres de la police.
                            tick={{ fill: '#FFF', fontSize: 12 }}
                            //Positionnement des mots par rapport au graphique.
                            dy={4}
                            tickLine={false}
                            //Marge entre les mots et le graphique.
                            tickSize={12}
                        />
                        {/* Parametrage de la courbe des données. */}
                        <Radar dataKey="value" fill={`#ff0000`} fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default PerfChart;
