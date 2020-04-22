//variable for human age 
const myAge = 25
//variable for first two year of dog age
let earlyYears = 2 
//multiply first two years 
earlyYears *= 10.5
//subtract 2 from my age since we accounted 2 for dog years 
let laterYears = myAge - 2
//multiply by 4 to calculate age in dog years
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

//adding my age to ealyYears  
//21 + (25 - 2) * 4
//only first two years the dog years is 10.5, every other year multiply 4 to get the exact number for your age
const myAgeInDogYears = earlyYears + laterYears

 //my name stored in a variable using lowercase method 

const myName = "Val".toLowerCase()

//a string interpolation used to input variables into sentence to determine my age in dog years

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
