class ProductsPublic {
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com'

    static async getProducts(){
        let answer = await fetch(`${this.BASE_URL}/products`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>res)
        .catch((error)=>error)
        return answer
    }

}
export{ProductsPublic}