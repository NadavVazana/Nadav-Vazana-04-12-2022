export const utilService = {
    getTime,
    convertToCelsius,
    getDayName,
    makeId
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;}

    
export function getTime(date) {
    const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()

    return `${hours}:${mins}`}


export function convertToCelsius(fahrenheit) {
    return Math.floor((fahrenheit - 32) / 1.8)}


export function getDayName(date) {
    const day = new Date(date).getDay() + 1
    switch (day) {
        case 1:
            return 'Sunday'
        case 2:
            return 'Monday'
        case 3:
            return 'Tuesday'
        case 4:
            return 'Wednesday'
        case 5:
            return 'Thursday'
        case 6:
            return 'Friday'
        default:
            return 'Saturday'}}