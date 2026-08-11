{
    let a = 3
    let b = a + 2
    console.log(b); // 5 ~ b value is locked in. It will not change if value of a is changed.
    a = 10 // variables store value at the time of assignment, not live formula.
    console.log(b); // 5 ~ b value is unaffected!
}

{
    let count = 1
    let double = count * 2 // 1 * 2
    count = 5 // value is re-assigned
    double = double + count // 2 + 5 // value is re-assigned
    console.log(double); // #7
}

{
    {
    let total = 0
    for (let i = 1; i <= 4; i++) {
        total = total + i
    }
    console.log(total); // #10
}

{
    let result = 10
    for (let i = 1; i <= 3; i++) {
        result = result - i
    }
    console.log(result); // #4
}

{
    total = 0
    for (let i = 1; i <= 5; i += 2) {
        total = total + i
    }
    console.log(total); //#9
}

{
    let count = 0
    for (let i = 1; i <= 5; i++) {
        if (i > 2) {
            count = count + 1
        }
    }
    console.log(count); //#3
}
}

