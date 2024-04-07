function dayOfWeek(day) {
    // switch (day) {
    //     case "Monday":
    //         return "1";
    //     case "Tuesday":
    //         return "2";
    //     case "Wednesday":
    //         return "3";
    //     case "Thursday":
    //         return "4";
    //     case "Friday":
    //         return "5";
    //     case "Saturday":
    //         return "6";
    //     case "Sunday":
    //         return "7";
    //     default:
    //         return "error";
    // }
    let weekArray = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    let dayNum = weekArray.indexOf(day) + 1;
    if (dayNum >= 1 && dayNum <= 7) {
        return String(dayNum);
    }
    else {
        return "error";
    }
}
console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("Invalid"));
//# sourceMappingURL=index.js.map