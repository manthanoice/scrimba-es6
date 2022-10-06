const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true; //false
            if (error)
                reject("Sorry the payment was not successful")
            else
                resolve("Thank you, your payment was a success")
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error))