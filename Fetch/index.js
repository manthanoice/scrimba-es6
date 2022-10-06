import fetch from "node-fetch";

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments',{
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: "Manthan",
            email: "mvbosamiya20@gmail.com",
            body: "That was dope"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))