class User {
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com/auth'

    static async userRegister(objectUser){
        let answer = await fetch(`${this.BASE_URL}/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(objectUser)
        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

    static async userLogin(objectUser){
        let answer = await fetch(`${this.BASE_URL}/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(objectUser)
        })
        .then((res)=>res.json())
        .then((res)=>{
            localStorage.setItem('token',res)
            return res
        })
        .catch((error)=> error)
        return answer
    }

}
export{User}