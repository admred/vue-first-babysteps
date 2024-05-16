//const url2='https://jsonplaceholder.typicode.com'
const url2='http://localhost:8080/api/v1'

const getNombre1=async(idPost) => {
    try{
        const resPost=await axios(`${url2}/posts/${idPost}`)
        if(resPost ===  undefined){
            throw new Error("Error no se encontro el post con idPost="+idPost)
        }
        console.log(resPost)
        console.log(resPost.data)
        console.log(resPost.data.userId)
        const resUser=await axios(`${url2}/users/${resPost.data.userId}`)
        if(resUser ===  undefined){
            throw new Error("Error no se encontro el usuario con resPost.data.userId="+resPost.data.userId)
        }
        console.log(resUser.data.name)
    }catch(error){
        console.error('Ocurrio un error : ',error)
    }
}

getNombre1(99)

