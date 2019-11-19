import moment from 'moment';
import monthArray from './month';
// heroku api
export const apiAddress = 'https://floodmap-backend.herokuapp.com';

// localhost
//export const apiAddress = "http://localhost:8080";


// monthly fetch
const inputMonth = monthArray[moment().subtract(1, 'month').month()];
export const monthlyBatasan = `${apiAddress}/batasan/monthly/q=${inputMonth}`;
export const monthlyLabo = `${apiAddress}/labo/monthly/q=${inputMonth}`;

// getall fetch
export const getAllBatasan = `${apiAddress}/batasan/getall`;
export const getAllLabo = `${apiAddress}/labo/getall`;

// weekly fetch
export const weeklyBatasan = `${apiAddress}/batasan/weekly`;
export const weeklyLabo = `${apiAddress}/labo/weekly`;

// current fetch
export const currentBatasan = `${apiAddress}/batasan/current`
export const currentLabo = `${apiAddress}/labo/current`