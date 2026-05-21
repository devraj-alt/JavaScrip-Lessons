//Practice questions:
//Q1
{
let a = "5"
let b = 10
console.log(a + b); //"510" - type coercion.
console.log(typeof (a + b)) //string - when one side is string.
}

{
//Q2
let a = "10"
let b = "5"
console.log(a - b); // 5 - JS automatically converts both sides to numbers.
console.log(typeof (a - b)) // number
}

{
 //Q3
 let a = null //is object type but in math its value is 0
 let b = undefined // undefined is when a variable is decleared but its value is not defined so in math is becomes NaN and NaN type is number
 console.log(a + b); // NaN
 console.log(typeof (a + b)); // number
}

{
 //Q4
 console.log(0 == false); // true - type conversion allowed. 0 is number and false is boolean, loosely equal.
 console.log(0 === false); // false - type conversion is not allowed. 0 is number and false is boolean, strict equal.
 console.log("" == false); // true - type conversion allowed. "" is string and false is boolean, loosely equal.
 console.log("" === false); // false - type conversion is not allowed. "" is string and false is boolean, strict equal.
}

{
//Q5
    let name = "Devraj"
  console.log(name.length) // 6 - total length of a string
  console.log(name.toUpperCase()) // DEVRAJ - converts all characters to upper case.
  console.log(name.slice(0, 3)) // Dev - extracts index 0, 1, 2. Start with 0 and end before 3.
  console.log(name.includes("raj")) // true - it finds whether it includes the characters.
  console.log(name.replace("Devraj", "Dev")) // Dev - it replaces the the string.
}

{
//Q6
    let num = 7.859

  console.log(Math.round(num)) // 8 - rounds to nearest
  console.log(Math.ceil(num)) // 8 - rounds up
  console.log(Math.floor(num)) // 7 - rounds down
  console.log(num.toFixed(2)) // 7.86 - fixes how hown many numbers to show after decimal.
  console.log(Number.isInteger(num)) // false - decimal number are not integers.
}

{
//Q7
  const canVote = (age) => {
    if (age >= 18) {
      return "You can vote"
    } else {
      return "You cannot vote"
    }
  }

  console.log(canVote(20)) // "You can vote" 
  console.log(canVote(15)) // "You cannot vote"
  console.log(canVote(18)) // "You can vote"
  console.log(canVote("20")) // "You can vote" ** apart from + operator all other operators converts string in to number for comparision unless its === strick equal.
}

{
//Q8
  let a = 10
  let b = 3

  console.log(a % b) // 1 - returns the remainder.
  console.log(a ** b) // 1000 - returns the first operand rising to the power of the second operand.
  console.log(Math.sqrt(144)) // 12 - what number multiplied by itself.
  console.log(Math.abs(-50)) // 50 - returns absolute value. If number is negative it returns the absolute positive number.
  console.log(Math.max(10, 3, 99, 45, 2)) // 99 - returns the largest number.
}

{
  //Q9
  const person = {
    name: "Devarj",
    age: 22,
    city: "Guwahati"
  }

  console.log(typeof person) // object
  console.log(person.name); // "Devraj" - . notation allows to access object.
  console.log(person["city"]); // "Guwahati" - [] also allows to access object.
  console.log(person.age === 22); // true
  console.log(person.name + " lives in " + person.city) // Devraj lives in Guwahati
}

{
  //Q10
  const birth = new Date("2003-05-04")
  console.log(birth); // This will give a custome date object.
  
  const today = new Date()
  console.log(today); // This will give the current date object
  
  const diffMs = today - birth
  console.log(today - birth); // Here custome date is getting deducted from current date in millseconds to get diffrence in milliseconds.

  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  console.log(diffDay); // Here we are dividing diffrence in milliseconds with 1 day in milliseconds. To get 1 day in milliseconds we are multiplying 1000 milliseconds i.e. 1 second with 60 seconds with 60 minutes and with 24 hours. We used Math.floor() to round down the decimal value in result.

  const diffYear = Math.floor(diffDay / 365)
  console.log(diffYear) // Here we are dividing diffrence in milliseconds with 365 days (which is days in a full year) to get exact years. Again Math.floor() rounds down the decimal value. 
}

{
  const temperature = 37.6

  const checkTemp = (temp) => {
    if (temp < 36) {
      return "Hypothermia - too low"
    } else if (temp >= 36 && temp <= 37.5) {
      return "Normal"
    } else if (temp > 37.5 && temp <= 39) {
      return "Fever"
    } else {
      return "High fever - see a doctor"
    }
  }

  console.log(checkTemp(temperature)); // Fever
  console.log(checkTemp(35)); // Hypothermia - too low
  console.log(checkTemp(36)); // Normal
  console.log(checkTemp(40)); // High fever - see a doctor
}

{
  //Q11
  const username = " Devraj "
  const password = "pass123"

  const login = (user, pass) => {
    const cleanUser = user.trim()

    if (!cleanUser) {
      return "Username cannot be empty"
    } else if (pass.length < 6) {
      return "Password too short"
    } else {
      return`Welcome ${cleanUser}!`
    }
  }

  console.log(login(username, password)); // Welcome Devraj - .trim() removes empty space both sides of a text.
  console.log(login("  ", password)); // Username cannot be empty - ! means not, in this case if string is empty login invald.
  console.log(login(username, "abc")); // Password too short - if password is too short in this case less than 6 character, login invalid.
}

{
  //Q12
  const price = 999.99
  const discount = 10 // 10%
  const quantity = 3

  const finalBill = (price, discount, quantity) => {
    const discountAmount = (price * discount) / 100
    const discountedPrice = price - discountAmount
    const total = discountedPrice * quantity
    return `Total: ₹${total.toFixed(2)}`
  }

  console.log(finalBill(price, discount, quantity));
  console.log(finalBill(500, 20, 2));
  console.log(finalBill(100, 0, 5));
}

{
  //Q14
  const gradeChecker = (grade) => {
    if (grade >= 90) {
      return "A - Excellent"
    } else if (grade >= 80 && grade <= 89) {
      return "B - Good"
    } else if (grade >= 70 && grade <= 79) {
      return "C - Average"
    } else if (grade >= 60 && grade <= 69) {
      return "D - Below Average"
    } else {
      return "F - Fail"
    }
  }

  console.log(gradeChecker(95));
  console.log(gradeChecker(83));
  console.log(gradeChecker(72));
  console.log(gradeChecker(65));
  console.log(gradeChecker(40));
}

{
  //Q15
  const bmi = (weight, height) => {
    const calculateBmi = weight / (height * height)

    if (calculateBmi < 18.5) {
      return `BMI: ${calculateBmi.toFixed(2)} - Underweight`
    } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9 ) {
      return `BMI: ${calculateBmi.toFixed(2)} - Normal`
    } else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
      return `BMI: ${calculateBmi.toFixed(2)} - Overweight`
    } else {
      return `BMI: ${calculateBmi.toFixed(2)} - Obese`
    }
  }

  console.log(bmi(70, 1.75));
  console.log(bmi(50, 1.75));
  console.log(bmi(90, 1.75));
  console.log(bmi(110, 1.75));
}

{
  //Q16
  const passwordChecker = (encription) => {
    const alert = "Password strength:"
    if (!encription) {
      return "Please enter a password"
    } else if (encription.length < 6) {
      return `${alert} Weak`
    } else if (encription.length >= 6 && encription.length <= 9) {
      return `${alert} Medium`
    } else {
      return `${alert} Strong`
    }
  }

  console.log(passwordChecker("abc"));
  console.log(passwordChecker("pass123"));
  console.log(passwordChecker("mypassword123"));
  console.log(passwordChecker(""));
  console.log(passwordChecker(null))
}

{
  //Q17
  const ageCategory = (age) => {
   if (age < 0) {
    return "Invalid age"
   } else if (age <= 12) {
    return "Child"
   } else if (age <= 17) {
    return "Teenager"
   } else if (age <= 59) {
    return "Adult"
   } else {
    return "Senior"
   }
  }

  console.log(ageCategory(5));
  console.log(ageCategory(15));
  console.log(ageCategory(25));
  console.log(ageCategory(65));
  console.log(ageCategory(-1));
}

{
  //Q18
  const currencyConverter = (amount, fromCurrency, toCurrency) => {
    const usdToInr = 84
    const usdToEur = 0.92
    const usdToGbp = 0.79

    let converted

    switch (toCurrency) {
      case "INR":
        converted = amount * usdToInr
        break;
      case "EUR":
        converted = amount * usdToEur
        break;
      case "GBP":
        converted = amount * usdToGbp
        break;
      case "USD":
        converted = amount * 1
        break;
      default:
        return "Invalid currency"
    }
    return `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`
  }

  console.log(currencyConverter(100, "USD", "INR"));
  console.log(currencyConverter(100, "USD", "EUR"));
  console.log(currencyConverter(100, "USD", "GBP"));
  console.log(currencyConverter(100, "USD", "USD"));
  console.log(currencyConverter(100, "USD", "xyz"));
}

{
//Q19
const dayType = (day) => {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday"
    default:
      return "Invalid day";
  }
}

console.log(dayType("Monday"));
console.log(dayType("Saturday"));
console.log(dayType("Sunday"));
console.log(dayType("Holiday"));
}

{
  //Q20
  const httpStatus = (code) => {
    switch (code) {
      case 200:
        return "OK - Request successful";
      case 201:
        return "Created - Resource created";
      case 400:
        return "Bad Request - Invalid syntax";
      case 401:
        return "Unauthorized - Login required";
      case 403:
        return "Forbidden - No permission";
      case 404:
        return "Not Found - Resource not found";
      case 500:
        return "Internal Server Error";
      default:
        return "Unknown status code";
    }
  }

  console.log(httpStatus(200));
  console.log(httpStatus(404));
  console.log(httpStatus(500));
  console.log(httpStatus(999));
}

{
  //Q21
  const season = (month) => {
    switch (month) {
      case 12:
        case 1:
          case 2:
            return "Winter";
      case 3:
        case 4:
          case 5:
            return "Spring"
      case 6:
        case 7:
          case 8:
            return "Summer"
      case 9:
        case 10:
          case 11:
            return "Autumn"
      default:
        return "Invalid month";
    }
  }

  console.log(season(1));
  console.log(season(4));
  console.log(season(7));
  console.log(season(10));
  console.log(season(13));
}

{
  //Q22
  const tipCalculator = (billAmount, rating) => {
    const clearRating = rating.toLowerCase()
     let percentage

     switch (clearRating) {
      case "excellent":
        percentage = 20
          break;
      case "good":
        percentage = 15
          break;
      case "average":
        percentage = 10
          break;
      case "poor":
        percentage = 5
          break;
      default:
          return "Invalid rating";
     }

     const tip = billAmount * percentage / 100

     const totalBill = billAmount + tip

     return `Tip: ₹${tip.toFixed(2)} | Total: ₹${totalBill.toFixed(2)} | Tip%: ${percentage}%`
  }
  console.log(tipCalculator(200, "Excellent"));
  console.log(tipCalculator(200, "GOOD"));
  console.log(tipCalculator(200, "average"));
  console.log(tipCalculator(200, "Poor"));
  console.log(tipCalculator(200, "xyz"));
}

{
  //Q23
  const greeting = () => {
    const currentDate = new Date()

    const hrs = currentDate.getHours()
    const min = currentDate.getMinutes()
    
    const ampm = hrs >=12 ? 'PM' : 'AM'
    let displayHrs = hrs % 12
    displayHrs = displayHrs ? displayHrs : 12
    displayHrs = displayHrs < 10 ? "0" + displayHrs : displayHrs
    const displayMin = min < 10 ? "0" + min : min
    

    if (hrs >= 5 && hrs <= 11) {
      return `Good Morning | Current time: ${displayHrs}:${displayMin} ${ampm}`
    } else if (hrs >=12 && hrs <= 16) {
      return `Good Afternoon | Current time: ${displayHrs}:${displayMin} ${ampm}`
    } else if (hrs >= 17 && hrs <= 20) {
      return `Good Evening | Current time: ${displayHrs}:${displayMin} ${ampm}`
    } else {
      return `Good Night | Current time: ${displayHrs}:${displayMin} ${ampm}`
    }
  }
  console.log(greeting());
}

{
  const monthName = (num) => {

    const month = ['', 'January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return month[num] || "Please enter a month!"

    /*switch (month) {
      case 1:
        return "January";  
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Please enter a month!";
    }*/
  }

  console.log(monthName(1));
  console.log(monthName(12));
  console.log(monthName(13));
  console.log(monthName(0));
}

{
  const kmph = (speed) => {
    if (speed <= 0) {
      return "Invalid speed"
    } else if (speed > 0 && speed <= 30) {
      return "Slow"
    } else if (speed <=60) {
      return "Moderate"
    } else if (speed <= 100){
      return "Fast"
    } else{
      return "Dangerous"
    }
  }
  
  console.log(kmph(26));
  console.log(kmph(115));
  console.log(kmph(70));
  console.log(kmph(45));
  console.log(kmph(0));
  console.log(kmph(-36));
}

{
  const leapYear = (year) => {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? `${year} is a leap year` : `${year} is not a leap year`
  }

  console.log(leapYear(2000))
  console.log(leapYear(1900))
  console.log(leapYear(2024))
  console.log(leapYear(2023))
}

{
  const calculate = (numOne , numTwo, operator) => {
    const ops = {
      "+": (numOne, numTwo) => numOne + numTwo,
      "-": (numOne, numTwo) => numOne - numTwo,
      "*": (numOne, numTwo) => numOne * numTwo,
      "/": (numOne, numTwo) => numTwo === 0 ? "Cannot divide by zero" : numOne / numTwo
    } // This method is called lookup table - storing logic in an object.
    return ops[operator] ? ops[operator] (numOne, numTwo) : "Invalid operator"
  }

  console.log(calculate(10, 5, '+'));
  console.log(calculate(10, 5, '-'));
  console.log(calculate(10, 5, '*'));
  console.log(calculate(10, 5, '/'));
  console.log(calculate(10, 0, '/'));
  console.log(calculate(10, 5, '%'));
}

{
  const kmToMiles = (km) => {
    let miles = km * 0.621371
    return miles < 0 ? "Invalid distance" : `${km} km = ${miles.toFixed(2)} miles`
  }

  console.log(kmToMiles(10));
  console.log(kmToMiles(100));
  console.log(kmToMiles(0));
  console.log(kmToMiles(-5)); 
}

{
  const kgToLbs = (kg) => {
    let lbs = kg * 2.20462
    return lbs < 0 ? "Invalid weight" : `${kg} kg = ${lbs.toFixed(2)} lbs`
  }

  console.log(kgToLbs(70));
  console.log(kgToLbs(100));
  console.log(kgToLbs(0));
  console.log(kgToLbs(-10));
}

{
  const celsiusToFahrenhit = (celsius) => {
    let fahrenhit = (celsius * 9 / 5) + 32
    return `${celsius}°C = ${fahrenhit.toFixed(1)}°F`
  }

  console.log(celsiusToFahrenhit(0));
  console.log(celsiusToFahrenhit(100));
  console.log(celsiusToFahrenhit(37));
  console.log(celsiusToFahrenhit(-40));
}

{
  const stringReverse = (str) => {
    if (!str) return "Invalid input"
    const reversed = str.split("").reverse().join("")
  //split() - converts string in to array as indivisual elements, recerse() - reverses the elements within the array, join() - joins the elements in to single element.
  return`Reversed: ${reversed}`
  }

  console.log(stringReverse("Devraj"));
  console.log(stringReverse("Hello"));
  console.log(stringReverse(""));
  console.log(stringReverse(null));
}

{
  const vowelsChecker = (str) => {
    if (!str) return "Invalid input"

    const vowels = ["a", "e", "i", "o", "u"]
    let splitStr = str.toLowerCase().split("")
   // before converting string to array we need to format input.
    const filterVowels = splitStr.filter(char => vowels.includes(char))

    return `Vowels in ${str}: ${filterVowels.length} `
  }

 console.log( vowelsChecker("Devraj"));
 console.log( vowelsChecker("Hello"));
 console.log( vowelsChecker("rhythm"));
 console.log( vowelsChecker(""));
}

{
  const getEvens = (arr) => {
    if (!arr) return "Invalid input"
    return arr.filter(even => even % 2 === 0)
  }

  console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8]))
  console.log(getEvens([1, 3, 5, 7]));
  console.log(getEvens())
}

{
  const getLongWords = (arr) => {
    if (!arr) return "Invalid input"
    return arr.filter(words => words.length > 5)
  }

  console.log(getLongWords(["cat", "elephant", "dog", "butterfly", "ant"]));
}

{
  const getPositives = (arr) => {
    if (!arr) return "Invalid input"
    return arr.filter(positiveNumbers => positiveNumbers > 0)
  }
  console.log(getPositives([1, -2, 3, -4, 5, -6]));
  console.log(getPositives([-1, -2, -3]));
}

{
  const palindromeChecker = (str) => {
    if (!str) return "Invalid input"
    
    const reversed = str.toLowerCase().split("").reverse().join("")
   return reversed === str.toLowerCase() ? `${str} is a palindrome` : `${str} is not a palindrome`
  }

  console.log(palindromeChecker("Racecar"));
  console.log(palindromeChecker("Hello"));
  console.log(palindromeChecker("Madam"));
  console.log(palindromeChecker("Devraj"));
  console.log(palindromeChecker(""));
}

{
  const truncateString = (str, num) => {
    if (!str) return "Invalid input"
    return str.length > num ? str.slice(0, num) + "..." : str
  }

  console.log(truncateString("Hello World", 5));
  console.log(truncateString("Hi", 5));
  console.log(truncateString("JavaScript", 10));
  console.log(truncateString("", 5));
}

{
  const titleCase = (str) => {
    if (!str) return "Invalid Input"

    const sliceStr = str.split(" ")
    const upperCase = sliceStr.map(word => word[0].toUpperCase() + word.slice(1))

    return upperCase.join(" ")
  }

  console.log(titleCase("hello world"));
  console.log(titleCase("my name is devraj"));
  console.log(titleCase("javaScript is awesome"));
  console.log(titleCase(""));
  console.log(titleCase(null));
}

{
  const removeDuplicates = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    return [...new Set(arr)] // new Set() object only allows unique values. It dosen't allow duplicate values. ... - spread operator unpacks values out of an array, Set, or object.
  }

  console.log(removeDuplicates([1,2,2,3,4,4,5]));
  console.log(removeDuplicates([1,1,1,1]));
  console.log(removeDuplicates([1, 2, 3]));
  console.log(removeDuplicates([]));
}

{
  const sumArray = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const clearArr = arr.filter(num => num !== null)
    const sum =  clearArr.reduce((acc, cur) => acc + cur , 0)
    return `Sum: ${sum}`
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
  console.log(sumArray([10, 20, 30]));
  console.log(sumArray([-1, -2, -3]));
  console.log(sumArray([]));
  console.log(sumArray([null]));
}

{
  const findMax = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const clearArr = arr.filter(num => num !== null)
    const maxNum = Math.max(...clearArr)
    return `Max: ${maxNum}`
  }

  console.log(findMax([1, 5, 3, 9, 2]));
  console.log(findMax([-1, -5, -3]));
  console.log(findMax([42]));
  console.log(findMax([]));
}

{
  const findMin = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const clearArr = arr.filter(num => num !== null)
    const minNum = Math.min(...clearArr)
    return `Min: ${minNum}`
  }

  console.log(findMin([1, 2, 3, 9, 2]));
  console.log(findMin([-1, -5, -3]));
  console.log(findMin([42]));
  console.log(findMin([]));
}

{
  const averageArray = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const clearArr = arr.filter(num => num !== null)
    const sumOfArr = clearArr.reduce((acc, cur) => acc + cur, 0)
    const averageOfArr = sumOfArr / clearArr.length
    return `Average: ${averageOfArr.toFixed(2)}`
  }
  
  console.log(averageArray([1, 2, 3, 4, 5]));
  console.log(averageArray([10, 20, 30]));
  console.log(averageArray([5]));
  console.log(averageArray([]));
}

{
  const countOccurrences = (arr, val) => {
    if(!arr || arr.length ===0) return "Invalid input"
    const clearArr = arr.filter(checkNull => checkNull !== null)
    const count = clearArr.filter(checkCount => checkCount === val)
    return `${val} appears ${count.length} times`
  }
  
  console.log(countOccurrences([1,2,3,2,2,4], 2));
  console.log(countOccurrences(["a","b","a","c"], "a"));
  console.log(countOccurrences([1,2,3], 5));
  console.log(countOccurrences([], 2));
}

{
  const flattenArray = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const clearArr = arr.filter(checkNull => checkNull !== null)
    return clearArr.flat()
  }

  console.log(flattenArray([1, [2, 3], [4, 5]]));
  console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
  console.log(flattenArray([1, 2, 3]));
  console.log(flattenArray([]));
}

{
  const uniqueSorted = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"
    const smallestToLargest = arr.toSorted((a, b) => a - b)
    return [...new Set(smallestToLargest)]
  }

  console.log(uniqueSorted([3,1,2,3,1,4]));
  console.log(uniqueSorted([5,5,5,5,]));
  console.log(uniqueSorted([3,1,2]));
  console.log(uniqueSorted([]));
}
  //Sorting question practice -
{
  const words = ["banana", "apple", "kiwi", "mango"]

  console.log(words.toSorted());
  console.log(words.toSorted((a, b) => b.localeCompare(a)));
  console.log(words.toSorted((a, b) => a.length - b.length));
  console.log(words.toSorted((a, b) => b.length - a.length)); 
}

{
const chunkArray = (arr, size) => {
  if (!arr || arr.length === 0) return "Invalid input"

  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

console.log(chunkArray([1,2,3,4,5], 2));
console.log(chunkArray([1,2,3,4,5,6], 2));
console.log(chunkArray([1,2,3], 1));
console.log(chunkArray([], 2));
}

{
  const reverseWords = (str) => {
    if (!str || str.length === 0) return "Invalid input"
    return str.split(" ").toReversed().join(" ");
  }
  console.log(reverseWords("Hello World"));
  console.log(reverseWords("My name is Devraj"));
  console.log(reverseWords("JS is awesome"));
  console.log(reverseWords(""));
}

{
  const countWords = (str) => {
    if (!str.trim()) return "Invalid input"
    return `Words: ${str.split(" ").filter(word => word !== "").length}`

  }
  console.log(countWords("Hello World"));
  console.log(countWords("My name is Devraj"));
  console.log(countWords("JS"));
  console.log(countWords(""));
  console.log(countWords(" "));
}

{
  const isPrime = (num) => {
    if (num < 0) return "Invalid input"
    if (num <= 1) return `${num} is not a prime number`
    for (let i = 2; i < num; i++) {
      if (num % i === 0) 
        return `${num} is not a prime number`
    }
    return `${num} is a prime number`
  }
  
  console.log(isPrime(2));
  console.log(isPrime(9));
  console.log(isPrime(13));
  console.log(isPrime(1));
  console.log(isPrime(-5));
}

{
  const nums = [5,8,3,9,2]

  for (let i = 0; i < nums.length; i++) {
    console.log(`Index ${i} - Value: ${nums[i]}`);
  }   
}

{
  const nums = [5,8,3,9,2]
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    console.log(`After adding ${nums[i]} -> sum is ${sum}`); 
  }
  console.log(`Final sum: ${sum}`);
}

{
  const sumOfPrimes = (arr) => {
    if (!arr || arr.length === 0) return "Invalid input"

    const isPrime = (num) => {
      if (num < 2) return false
      for (let j = 2; j < num; j++) {
        if (num % j === 0) return false
      }
      return true
    }

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if(isPrime(arr[i])) sum += arr[i]
    }
    return `Sum of prime: ${sum}`
  }
  console.log(sumOfPrimes([1,2,3,4,5,6,7]));
  console.log(sumOfPrimes([4,6,8,10]));
  console.log(sumOfPrimes([2,3,5,7,11]));
  console.log(sumOfPrimes());
}

{
  const longestWord = (str) => {
    if (!str || str.trim().length === 0) return "Invalid input"

    let strSplit = str.split(" ")
    let longestWord = ""

    for (i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i]
    }
    }
    return longestWord
  }
  console.log(longestWord("I love JavaScript"));
  console.log(longestWord("Hello World"));
  console.log(longestWord(" "));
}