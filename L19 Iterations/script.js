// Iterations:
// for loop:
/*
    for (let index = 0; index < array.length; index++) {
        const element = array[index];   
    }
*/

{
    for (i = 0; i <= 10; i++) {
        const element = i
        if (element === 7) {
            console.log("7 is best number");
        }
        console.log(element);
    }

    {
        for (let i = 1; i <= 10; i++) {
            console.log(`Multiplication Table of: ${i}`);
            for (let j = 1; j <= 10; j++) {
                //console.log(`Inner loop value ${j} and Outer loop ${i}`);
                console.log(i + ' x ' + j + ' = ' + i*j);
            }
        }
    }

    {
        let myArr = ["flash", "superman", "batman", "x-man", "deadpool"]

        for (let i = 0; i < myArr.length; i++) {
            const element = myArr[i];
            console.log(element);
        }
    }
}

// Break and Continue:

{
    {
        for (let i = 1; i <= 20; i++) {
        if (i == 5) {
            console.log(`Detected 5`);
            break
        }
     console.log(`Value of i is ${i}`);
    }
    }

    {
        for (let i = 1; i <= 10; i++) {
        if (i == 7) {
            console.log(`Detected 7`);
            continue
        }
     console.log(`Value of i is ${i}`);
    }
    }
}

//While & do while loop:
// while loop: 
/*
    while (condition) {  
    }
*/

{
    {
        let index = 0
        while (index <= 10) {
            console.log(`Value of index is ${index}`);
            index = index += 2
        }
    }

    {
         let myArr = ["flash", "superman", "batman", "x-man", "deadpool"]

         let arr = 0
         while (arr < myArr.length) {
            console.log(`Value of myArr is ${myArr[arr]}`);
            arr = arr += 1
         }
    }
}

// do while loop:
/*
    do {
    
    } while (condition);
*/

{
    {
        let score = 1
        do {
            console.log(`Score is: ${score}`);
            score++
        } while (score <= 10);
    }
}