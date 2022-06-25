const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (people) {

    const oldest = people.reduce((previous, current) => {
        //if no year of death, use current date
        if (!('yearOfDeath' in previous)){
            previous.yearOfDeath = new Date().getFullYear();
        }
        if (!('yearOfDeath' in current)){
            current.yearOfDeath = new Date().getFullYear();
        }
        const previousAge = previous.yearOfDeath
            - previous.yearOfBirth;
        const currentAge = current.yearOfDeath
            - current.yearOfBirth;
        return (previousAge > currentAge) ? previous : current;
    });
    return oldest;
}
console.log(findTheOldest(people));
//looks like after the first iteration, oldest is no
//longer accessible
//I can hard-code a fix, but I think true understanding of the
//reduce function and how it's supposed to be used would help

//reduce:
//go over each array element
//pass it to callback
//pass callback's return to the next function
//should I have an "older" variable that keeps changing?
//wouldn't that be more of a .sort() thing?
//maybe I should return either "oldest" or "person"



// Do not edit below this line
module.exports = findTheOldest;
