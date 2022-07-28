class Filters{
    static categoryFilter(array, category){
        if(category === 'Todos'){
            return array
        }
        let arrayFilter = array.filter( elem => elem.categoria === category)
        return arrayFilter
    }

    static filterBySearch (array , text){
        let arrayFilter = array.filter( elem => elem.nome.toLowerCase().includes(text.toLowerCase()))
        return arrayFilter
    }
    static filterById (array , id){
        let arrayFilter = array.filter( elem => elem.id === id)
        return arrayFilter
    }
}
export{Filters}