const userData = new Promise((resolve, reject) => {
    const error = false
    if(error)
        reject("Hehe oops")
    else{
        resolve({
            firstName: "Manthan",
            lastName: "Agarwal Bosamiya",
            age: 20,
            location: "Muskan's Heart"
        })
    }
})

userData
    .then((success)=>console.log(success))
    .catch((error)=>console.log(error))