function calculateAge(person) {
    const dateToday = new Date();
    if (!person.yearOfDeath) {
        return dateToday.getFullYear() - person.yearOfBirth; 
    }
    else return person.yearOfDeath - person.yearOfBirth; 
}

const findTheOldest = function(people) {
 let peopleSorted =  people.sort((a,b) => calculateAge(a) - calculateAge(b));
 return peopleSorted[peopleSorted.length-1]; 
};

// Do not edit below this line
module.exports = findTheOldest;
