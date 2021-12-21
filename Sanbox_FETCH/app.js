document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getExternal)


function getText(){
    fetch('text.txt')
    .then(res => {
        return res.text()
    })
    .then((data) =>{
        console.log(data)
        document.getElementById('output').innerHTML = data;
    })
    .catch((error) =>{
        console.log('failed to load')
    })
}

function getJson(){
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
       output = '';

       data.forEach(post =>{
            output += 
            `
                <li>${post.title}</li>
            `
       })

       document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}

function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data =>{
       output = '';

       data.forEach(user =>{
            output += 
            `
                <li>${user.login}</li>
            `
       })

       document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}



