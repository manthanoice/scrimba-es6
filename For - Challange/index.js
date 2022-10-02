const students = [ 
    { name: "Muskan", city: "Manthan's heart"},
    { name: "Manthan", city: "Muskan's heart" },
    { name: "Namsum", city: "Muskan's and Manthan's heart" }
]

for (student of students)
    console.log(`${student.name} lives in ${student.city}`)