//function declaration
function breakfastMenu() {
    return "Gonna eat Muskan for breakfast. Tq"
}

//anonymous function
const lunchMenu = function() {
    return "Gonna eat Muskan for Lunch. Tq"
}

//arrow function
const dinnerMenu = (food) => `Gonna eat ${food} for Dinner. Tq`

console.log(dinnerMenu("Muskan"))

const add = (n1, n2) => `Sum of two number is ${n1+n2}`

console.log(add(2, 3))