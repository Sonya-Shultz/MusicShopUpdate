//import regeneratorRuntime from 'regenerator-runtime';
//const fetch = require('node-fetch');
async function fetchMyData() {
    return  fetch('https://my-json-server.typicode.com/Sonya-Shultz/sonya-shultz.github.io/db', 
        {method: 'GET',  headers: {'content-type': 'application/json'}})
        .then(result => result.json())
        .then(data => {return data;});
}
async function postOrder(Order) {
    return fetch('https://my-json-server.typicode.com/Sonya-Shultz/sonya-shultz.github.io/posts', {
        method: 'POST',
        body: JSON.stringify(Order),
        headers: {
            'Content-type': 'application/json'
        }}).then(result => result.json())
        .then(data => {return data;});
}
export {fetchMyData,postOrder};