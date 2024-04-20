function dayOfWeek(day: string): number | string {
    enum weekDay {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    const selectedDay: number = weekDay[day];

    return selectedDay ? selectedDay : "error"
}

console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("Invalid"));
