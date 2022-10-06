import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then(response => response.json())
    .then(data => console.log(data))

fetch("https://jsonplaceholder.typicode.com/comments",{
        method: "POST",
        body: JSON.stringify({
            name: "Well",
            email: "well",
            body: "Well",
            postId: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))