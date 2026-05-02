//Stack Memory: Primitive data types are stored in stack memory. In stack memory we get a copy of original data data. Here when we update any data the original data is untouched only copied data is updated.

let lessonName = 'Stack Memory'
let changeLesson = lessonName
changeLesson = 'JavaScript Memory'

console.log(lessonName);
console.log(changeLesson);

//Heap Memory: Non-primitive data types are stored in heap memory. In heap memory we get a reference of the original data. Here the original data get updated because both the variables are refering to the same data.

let userOne = {
    email: 'jhon@goole.com',
    upi: 'jhon@oksbi'
}

let userTwo = userOne
userTwo.email = 'clark@outlook.com'

console.log(userOne.email);
console.log(userTwo.email);