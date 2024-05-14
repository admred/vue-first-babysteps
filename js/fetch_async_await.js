//const url1='https://jsonplaceholder.typicode.com'
const url1='http://localhost:8080/api/v1'

const getNombre=async(idPost) => {
    try{
        const resPost=await fetch(`${url1}/posts/${idPost}`)
        if(resPost ===  undefined){
            throw new Error("Error no se encontro el post con idPost="+idPost)
        }
        const post=await resPost.json()
        console.log(post.userId)

        const resUser=await fetch(`${url1}/users/${post.userId}`)
        if(resUser ===  undefined){
            throw new Error("Error no se encontro el usuario con post.userId="+post.userId)
        }
        const user=await resUser.json()
        console.log(user)
    }catch(error){
        console.error('Ocurrio un error : ',error)
    }
}

getNombre(99)
