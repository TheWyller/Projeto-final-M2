class Cart {
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com/cart'

    static async getMyCartProducts(){
        let answer = await fetch(`${this.BASE_URL}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

    static async addProductsMyCart (objectItem){
        let answer = await fetch(`${this.BASE_URL}/add`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(objectItem)

        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

    static async deleteMyProductFromCart(itemId){
        let answer = await fetch(`${this.BASE_URL}/remove/${itemId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

}

export{Cart}