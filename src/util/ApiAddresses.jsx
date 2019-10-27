import moment from 'moment';
import apiAddress from './apiPath';
import monthArray from './month';

// monthly fetch
const inputMonth = monthArray[moment().month()];
export const MonthlyBatasan = `${apiAddress}/batasan/monthly?q=${inputMonth}`;
export const MonthlyLabo = `${apiAddress}/labo/monthly?q=${inputMonth}`;

// getall fetch
export const getAllBatasan = `${apiAddress}/batasan/getall`;
export const getAllLabo = `${apiAddress}/labo/getall`;
