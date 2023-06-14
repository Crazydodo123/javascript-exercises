const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        const ageA = (personA.yearOfDeath || 2023) - personA.yearOfBirth;
        const ageB = (personB.yearOfDeath || 2023) - personB.yearOfBirth;

        return (ageB - ageA)
    });
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
