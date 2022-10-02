const player = {
    nameOfPlayer: "Leo Messi",
    club: "PSG",
    address: {
        city: "Paris"
    }
}

const {nameOfPlayer, club, address:{city}} = player;

console.log(city)

const student = {
    name: "Muskan",
    age: 20,
    projects: {
        financialAccounting: "Had to analyze balance sheet and perform data analysis"
    }
}

const {name, age, projects:{financialAccounting}} = student

console.log(financialAccounting)