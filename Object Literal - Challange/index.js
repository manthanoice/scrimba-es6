function addressMaker(country) {
    const {city, state} = newAddress
    const newAddress = {
        city,
        state,
        country: 'USA'
    };
    console.log(`${city} is ${state} which is in ${country}`)
}

addressMaker('Austin', 'Texas', 'USA');