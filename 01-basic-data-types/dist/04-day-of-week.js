function dayOfWeek(day) {
    let weekDay;
    (function (weekDay) {
        weekDay[weekDay["Monday"] = 1] = "Monday";
        weekDay[weekDay["Tuesday"] = 2] = "Tuesday";
        weekDay[weekDay["Wednesday"] = 3] = "Wednesday";
        weekDay[weekDay["Thursday"] = 4] = "Thursday";
        weekDay[weekDay["Friday"] = 5] = "Friday";
        weekDay[weekDay["Saturday"] = 6] = "Saturday";
        weekDay[weekDay["Sunday"] = 7] = "Sunday";
    })(weekDay || (weekDay = {}));
    const selectedDay = weekDay[day];
    return selectedDay ? selectedDay : "error";
}
console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("Invalid"));
//# sourceMappingURL=04-day-of-week.js.map