//For Average Session Chart

export const dayWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

export const formatDayWeek = (item) => dayWeek[item];

//For Daily activity chart

export const formatDay = (item) => new Date(item).getDate();

//For Performance Chart

export const kindTitle = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
};
