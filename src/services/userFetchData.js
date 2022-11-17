import {
    mockedUserInfos,
    mockedSession,
    mockedActivity,
    mockedPerformance,
} from '../services/userMockedDatas';

/**
 * Get datas from API
 * /

/**
 *Retrieve the user's name according to his ID.
 * @returns Promise.
 */
export const getUserInfos = async () => {
    if (process.env.REACT_APP_IS_MOCKED_DATA === '0') {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}`,
        );
        console.log("Ceci sont des données provenant de l'API");
        return await response.json();
    } else {
        console.log('Ceci sont des données mockées');
        return new Promise((resolve, reject) => {
            resolve(mockedUserInfos);
        });
    }
};

/**
 *Retrieve the average session duration of the current user.
 * @returns Promise.
 */
export const getAverageSession = async () => {
    if (process.env.REACT_APP_IS_MOCKED_DATA === '0') {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/average-sessions`,
        );
        console.log("Ceci sont des données provenant de l'API");
        return await response.json();
    } else {
        console.log('Ceci sont des données mockées');
        return new Promise((resolve, reject) => {
            resolve(mockedSession);
        });
    }
};

/**
 * Retrieve current user's daily activity.
 * Needed for the daily activity chart.
 * @returns Promise.
 */
export const getUserActivity = async () => {
    if (process.env.REACT_APP_IS_MOCKED_DATA === '0') {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/activity`,
        );
        console.log("Ceci sont des données provenant de l'API");
        return await response.json();
    } else {
        console.log('Ceci sont des données mockées');
        return new Promise((resolve, reject) => {
            resolve(mockedActivity);
        });
    }
};

/**
 * Retrieve current user's performance data.
 * Needed for performance chart.
 * @returns Promise.
 */
export const getUserPerformance = async () => {
    if (process.env.REACT_APP_IS_MOCKED_DATA === '0') {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/performance`,
        );
        console.log("Ceci sont des données provenant de l'API");
        return await response.json();
    } else {
        console.log('Ceci sont des données mockées');
        return new Promise((resolve, reject) => {
            resolve(mockedPerformance);
        });
    }
};
