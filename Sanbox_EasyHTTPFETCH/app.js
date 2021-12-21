const http = new EasyHTTP;
const http2 = new EasyHTTP;
const http3 = new EasyHTTP;
const http4 = new EasyHTTP;

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(error))

//create data
const data =
{
    name: 'John doe',
    email: 'jdoe@gmail.com'
}


//create post
http2.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error))

//update post
http2.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error))

http2.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error))


// async function getUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()

//     return data;
// }

// getUsers()
// .then(users => console.log(users))
