//const url='https://jsonplaceholder.typicode.com/posts/1'
const url='http://localhost:8080/api/v1/users/10'
//const headers = new Headers()
//headers.set('content-type','application/json')
const options={
    method:'GET',
    headers:{'content-type':'application/json'}
}

fetch(url,options)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.err(error))
