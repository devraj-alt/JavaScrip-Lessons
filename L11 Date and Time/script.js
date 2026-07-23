//Date and Time:

//Declearing date
let myDate = new Date()  //This is a date object
console.log(myDate); //Fri May 01 2026 13:57:54 GMT+0530 (India Standard Time)
console.log(typeof myDate); //Type is an object.

console.log(myDate.toString()); //Fri May 01 2026 14:02:19 GMT+0530 (India Standard Time)
console.log(typeof myDate.toString()); //This method converts date object to string.

//Date Formatting methods: All formatting methods return a string. They convert the Date object into a human readable string.

console.log(myDate.toDateString());       // "Fri May 01 2026"
console.log(myDate.toTimeString());       // "14:02:19 GMT+0530"
console.log(myDate.toISOString());        // "2026-05-01T08:32:19.000Z"
console.log(myDate.toLocaleDateString()); // "1/5/2026"
console.log(myDate.toLocaleTimeString()); // "2:02:19 pm"
console.log(myDate.toLocaleString());     // "1/5/2026, 2:02:19 pm"

//".get" Method: It gets parts of date.
console.log(myDate.getFullYear());  // 2026, its gets year.
console.log(myDate.getMonth());     // 4, in JS month starts with 0 i.e. January is 0, December is 11
console.log(myDate.getDate());      // 1, it gets date of the month.
console.log(myDate.getDay());       // 5, it gets day of the week i.e. Sunday is 0, Friday is 5
console.log(myDate.getHours());     // 14, it gets hour of the day.
console.log(myDate.getMinutes());   // 02, it gets minute of the hour.
console.log(myDate.getSeconds());   // 19, it gets second of the minute.
console.log(myDate.getTime());      // milliseconds since Jan 1 1970

//Declearing specific date
let myCreatedDate = new Date(2026, 4, 1)
console.log(myCreatedDate); //Fri May 01 2026 00:00:00 GMT+0530 (India Standard Time)
//month 4 = May (months start from 0, January = 0)

//With time
let withTime = new Date(2026, 4, 1, 10, 30, 0)
console.log(withTime); //Fri May 01 2026 10:30:00 GMT+0530 (India Standard Time)

//From a string
let fromString = new Date("2026-05-01")
console.log(fromString);

//From a string with time
let fromStringTime = new Date("2026-05-01T03:59:00")
console.log(fromStringTime);

let myTimeStamp = Date.now() //This gives a number i.e. miliseconds running from Jan 1 1970.
let stamp = new Date(myTimeStamp) //Here myTimeStamp which is a number is getting converted to date object.
let hrs = stamp.getHours();   // extracts hours from the date object
let min = stamp.getMinutes(); // extracts minutes from the date object
let sec = stamp.getSeconds(); // extracts seconds from the date object

console.log(`${hrs}:${min}:${sec}`);

console.log(Math.floor(Date.now()/1000)); //This is converting milliseconds to seconds 1 sec = 1000 milliseconds. Math.floor rounds the off the decimal value.

let customDateAndTime = new Date()
//toLocaleDateString(locale, options)
console.log(customDateAndTime.toLocaleDateString('en-IN', {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})); //Friday, 01 May 26 at 05:01:58 pm
//".toLocaleDateString()" lets us customized date and time.