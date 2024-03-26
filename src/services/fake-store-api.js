const FakeStoreApi = {
    fetchAllProducts : async ()=>{
        res = await fetch('https://fakestoreapi.tech/products')
        result = res.json()
        return result
    },
    fetchProductById : async (productId)=>{
        res = await fetch(`https://fakestoreapi.tech/products/${productId}`)
        result = res.json()
        return result

    },
    fetchProductBySearchQuery : async (query) => {
        res = await fetch(`https://fakestoreapi.tech/products`)
        result = res.json()
        return  result.filter((product)=>product.title.toLowerCase().includes(query))
    }
}
export default FakeStoreApi
