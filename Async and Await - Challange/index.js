import fetch from "node-fetch";

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getResponse(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
}

getResponse()