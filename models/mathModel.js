function isWeekend(){
    return new Date().getDay() == 6 || new Date().getDay() == 0
}

function isLeapYear() {
    return new Date().getFullYear() % 4 == 0
}

module.exports = {
    isWeekend,
    isLeapYear
};