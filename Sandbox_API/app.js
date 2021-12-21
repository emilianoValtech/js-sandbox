const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
]


// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }


// function getPosts(){
//     setTimeout(() => {
//         let output = '';

//         posts.forEach(post => {
//             output += 
//             `
//               <li>${post.title}</li>  
//             `
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }


function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error){
                resolve()
            } else {
                reject('Error: something went wrong')
            }

            resolve()
        }, 2000);
    });


}


function getPosts(){
    setTimeout(() => {
        let output = '';

        posts.forEach(post => {
            output += 
            `
              <li>${post.title}</li>  
            `
        });

        document.body.innerHTML = output;
    }, 1000);
}


createPost({
    title: 'Post three', body: 'This is post three'
}).then(getPosts)
.catch(function(error){
    console.log(error)
})
































// //get button 

// document.querySelector('.get-jokes').addEventListener('click', getJokes)

// function getJokes(e){
//     e.preventDefault()
//     const number = document.querySelector('input[type=number]').value
    
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

//     xhr.onload = function(){
//         if(this.status === 200){
//             const response = JSON.parse(this.responseText);
//            console.log(response)
//             let output = '';

//             if(response.type === 'success'){
//                response.value.forEach(function(joke){
//                     output += 
//                     `
//                         <li>${joke.joke}</li>
//                     `
//                })
//             }else {
//                 output += 
//                 `
//                   <li>Something went wrong</li>  
//                 `
//             }
//             document.querySelector('.jokes').innerHTML = output;
//         }
//     }

//     xhr.send();
// }