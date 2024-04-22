interface PersonDetails {
    firstName: string;
    lastName: string;
    age: number;
}

function personalInfo(a: string, b: string, c: string): PersonDetails {
    const person: PersonDetails = {
        firstName: a,
        lastName: b,
        age: Number(c),
    };

    return person;
}

console.log(personalInfo("Peter", "Pan", "20"));
console.log(personalInfo("George", "Smith", "18"));
