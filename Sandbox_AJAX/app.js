const http = new easyHTTP;
const http2 = new easyHTTP;

//GET POSTS

http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
    if(error){
        console.log(error)
    } else {
        console.log(response)
    }
})

//create data
const data = [
    {
        title: 'Custom post',
        body: 'this is a custom post body',
    },
]

//create post
http2.post('https://jsonplaceholder.typicode.com/posts',data, myCallBack)


function myCallBack(error, response){
    if(error){
        console.log(`Error ${error}`)
    } else{
        console.log(response)
    }
}

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
//         if(error){
//         console.log(`Error ${error}`)
//     } else{
//         console.log(response)
//     }
// })

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
//     if(error){
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// })

