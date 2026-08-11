

{
    const calculateCartPrice = (...price) => {
        let total = 0
        for (let i = 0; i < price.length; i++) {
            total = total + price[i]
        }
        return total
    }
    console.log(calculateCartPrice(200, 400, 500, 900, 1000, 1278, 75, 96, 7, 21));

    //Note: Spread and Rest operator use the exact same syntax (...) but perform complete opposite actions depending on where they are used.

    //Spread Operator: Unpacks an array or object into individual elements.
    //Rest Operator: Packs multiple individual elements into a single array or object.
}

{
    const user = {
        name: "Devraj",
        price: 199
    }

    const handleObject = (anyObject) => {
        console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    }

    handleObject(user)
}

{
    const myArr = [200, 400, 100, 600]

    const returnSecVal = (getArr) => {
        return getArr[1]
    }
    console.log(returnSecVal(myArr));
}