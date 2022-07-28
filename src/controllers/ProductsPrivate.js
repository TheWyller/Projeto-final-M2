class ProductsPrivate {
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com/my'

    static async getMyProducts(){
        let answer = await fetch(`${this.BASE_URL}/products`,{
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

    static async createMyProducts(objectItem){
        let answer = await fetch(`${this.BASE_URL}/products`,{
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

    static async editMyProducts(objectIten,itemId){
        let answer = await fetch(`${this.BASE_URL}/products/${itemId}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(objectIten)

        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

    static async deleteMyProducts(itemId){
        let answer = await fetch(`${this.BASE_URL}/products/${itemId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        })
        return answer
    }
}
export{ProductsPrivate}