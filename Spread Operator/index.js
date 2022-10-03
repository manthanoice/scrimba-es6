let contacts = ["Muskan", "Manthan", "Namsum"]

let personalContats = ["LMAO", ...contacts]

contacts.push("hehe")

console.log(personalContats)

let person = {
    name: "Muskan",
    age: 20,
    city: "Manthan's heart"
}

let employee = {
    ...person,
    salary: 89000,
    position: 69
}

console.log(employee)