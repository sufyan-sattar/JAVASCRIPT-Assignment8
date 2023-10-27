// Chapter 38 to 42

// Question 1:-
// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     }
//     if (b < 0) {
//         return 1 / (a * power(a, Math.abs(b) - 1));
//     }
//     return a * power(a, b - 1);
// }
// document.write(power(2,5))

// Question 2:-
// function leapyear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0){
//                 return true;
//             }else{
//                 return false
//             }
//         }else{
//             return true
//         }
//     }else{
//         return false
//     }
// }

// document.write(leapyear(2024))

// Question 3:-
// function semiperimeter(a, b, c) {
//     return (a + b + c) / 2
// }

// function calculateArea(a, b, c) {
//     var semi = semiperimeter(a, b, c)
//     return Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c))
// }

// document.write(calculateArea(3,4,5))

// Question 4:-


// Question 5:-
// function customIndexof(str, char) {
//     for (var i = 0; i < str.length; i++){
//         if(str[i]===char){
//             return i
//         }
//     }
//     return -1
// }

// document.write(customIndexof("sufyan","f"))

// Question 6:-
// function deleteAllvowels(sentence) {
//     var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     var result = ''

//     for (var i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i]
//         }
//     }

//     return result
// }

// document.write(deleteAllvowels("sufyan"))

// Question 7:-
// function findOccurrences() {
//     var str = "Please read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// console.log(findOccurrences());

// Question 8:-
// function distanceConverter(km){
//     var meters=km*1000;
//     var feet=km*3280.84;
//     var inches=km*39370.08;
//     var centimeters=km*100000;

//     return {meters,feet,inches,centimeters}
// }

// function distnaceInMeters(km){
//     var convertDistance= distanceConverter(km)
//     document.write("Distance in Meters: " +convertDistance.meters)
// }

// function distnaceInFeet(km){
//     var convertDistance= distanceConverter(km)
//     document.write("Distance in Meters: " +convertDistance.feet)
// }

// function distnaceInInches(km){
//     var convertDistance= distanceConverter(km)
//     document.write("Distance in Meters: " +convertDistance.inches)
// }

// function distnaceInCentimeters(km){
//     var convertDistance= distanceConverter(km)
//     document.write("Distance in Meters: " +convertDistance.centimeters)
// }

// var km=prompt("Enter Distance (in km.):")

// document.write(distnaceInMeters(km) +"<br>")
// document.write(distnaceInFeet(km) +"<br>")
// document.write(distnaceInInches(km) +"<br>")
// document.write(distnaceInCentimeters(km) +"<br>")

// Question 10:-
// function calculateCurrencyNotes(withdrawalAmount) {
//     var notes = {
//         "100": 0,
//         "50": 0,
//         "10": 0
//     }

//     if (withdrawalAmount < 10 || withdrawalAmount % 10 !== 0) {
//         console.log("Withdrawal amount can not be processed")
//         return notes;
//     }

//     var currentAmount = withdrawalAmount;

//     notes["100"] = Math.floor(currentAmount / 100)
//     currentAmount %= 100

//     notes["50"] = Math.floor(currentAmount / 50)
//     currentAmount %= 50

//     notes["10"] = Math.floor(currentAmount / 10)
//     currentAmount %= 10

//     return notes;

// }

// var withdrawalAmount=parseInt(prompt("Enter Amount to Withdrawn."))
// var notes=calculateCurrencyNotes(withdrawalAmount)

// console.log(`Number of 100 notes: ${notes["100"]}`);
// console.log(`Number of 50 notes: ${notes["50"]}`);
// console.log(`Number of 10 notes: ${notes["10"]}`);