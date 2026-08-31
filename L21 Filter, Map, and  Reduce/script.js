// Filter, Map, and Reduce:
// Filter:

{
    {
        const num = [1,2,3,4,5,6,7,8,9,10]

        const myNum = num.filter(ele => ele > 4)
        console.log(myNum);
    }

    {
        const myNum = [1,2,3,4,5,6,7,8,9,10]
        const newNum = []

        myNum.forEach((num) => {
            if (num > 4) {
                newNum.push(num)
            }
        });

        console.log(newNum);
    }

    {
        const books = [
            { title: 'To Kill a Mockingbird', genre: 'Fiction', publish: 1960, edition: '1st', author: 'Harper Lee' },
            { title: '1984', genre: 'Fiction', publish: 1949, edition: '60th Anniversary', author: 'George Orwell' },
            { title: 'Sapiens', genre: 'Non-Fiction', publish: 2011, edition: 'Revised', author: 'Yuval Noah Harari' },
            { title: 'A Brief History of Time', genre: 'Science', publish: 1988, edition: '10th Anniversary', author: 'Stephen Hawking' },
            { title: 'Guns, Germs, and Steel', genre: 'History', publish: 1997, edition: '20th Anniversary', author: 'Jared Diamond' },
            { title: 'The Great Gatsby', genre: 'Fiction', publish: 1925, edition: '1st', author: 'F. Scott Fitzgerald' },
            { title: 'Thinking, Fast and Slow', genre: 'Non-Fiction', publish: 2011, edition: '1st', author: 'Daniel Kahneman' },
            { title: 'The Selfish Gene', genre: 'Science', publish: 1976, edition: '30th Anniversary', author: 'Richard Dawkins' },
            { title: 'The Diary of a Young Girl', genre: 'History', publish: 1947, edition: 'Definitive', author: 'Anne Frank' }
            ];

         let userBooks = books.filter(bk => bk.genre === "History")

         userBooks = books.filter(bk => bk.publish >= 1947 && bk.genre === "Science" )
         
         console.log(userBooks);
    }
}

// Map:

{
    {
        const myNumber = [1,2,3,4,5,6,7,8,9,10]

        const newNum = myNumber.map(num => num + 10 )

        console.log(newNum);
    }

    {
        //using forEach on previous Example.

        const myNumber = [1,2,3,4,5,6,7,8,9,10]
        let newNum = []

        myNumber.forEach(element => {
            newNum.push(element + 10)
        });

        console.log(newNum);
    }

    {
        const myNumber = [1,2,3,4,5,6,7,8,9,10]

        const addTen = (ele) => {
            let newNum = []

            ele.forEach(element => {
               newNum.push(element + 20) 
            });
            return newNum
        }

        console.log(addTen(myNumber));
    }
}

// Chaining higher-order methods:

{
    {
        const myNumber = [1,2,3,4,5,6,7,8,9,10]

        const newNum = myNumber
        .map(num => num * 9)
        .map(num => num + 2)
        .filter(num => num % 2 === 0)

        console.log(newNum);
    }
}

// Reduce:

{
    {
        const myNumber = [1,2,3,4,5,6,7,8,9,10]

        const newNum = myNumber.reduce((acc, cur) => {
            console.log(`acc: ${acc} and cur: ${cur}`);return acc + cur
        }, 0)

        console.log(newNum);
    }

    {
        const shoppingCart = [
            {itemName: "js course", price: 2999},
            {itemName: "py course", price: 999},
            {itemName: "mobile dev course", price: 5999},
            {itemName: "data science course", price: 12999},
        ];

        const priceToPay = shoppingCart.reduce((acc, item) => {
            return acc + item.price
        }, 0)

        console.log(priceToPay);
    }
}