/**
 *
 * @description Component to customise days of week .
 * It's use in  the average session chart component.
 */

export const dayWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

export const formatDayWeek = (item) => dayWeek[item];

/**
 *
 * @description Component to transform date in a single number.
 * It's use in  the daily chart component.
 */

export const formatDay = (item) => new Date(item).getDate();

//For Performance Chart
/**
 *
 * @description Component to display words in french ones.
 * It's use in  the performance chart component.
 */

export const kindTitle = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
};
