import { useState,useEffect } from "react"
import { Item } from  '../../components/item/item'
import { FakeStoreApi } from "../../services/fake-store-api"
import { useSearchParams } from "react-router-dom"
import { useCart } from "../../context/cart"
const Products =()=>{
    const [loading ,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const [query,setQuery] = useSearchParams();
    const searchQuery= query.get("q");
    const { addToCart } = useCart()
    useEffect(()=>{
        const fetchProducts = async () =>{
            setLoading(true)
            const products = searchQuery ? await FakeStoreApi.fetchProductBySearchQuery(searchQuery):await FakeStoreApi.fetchAllProducts();
            setProducts(products)
            setLoading(false)
        }
        fetchProducts().catch(console.error);
    },[searchQuery]) 
    if (!loading && searchQuery && !products.length){
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details">
                        no products found of matching search
                    </div>

                </div>
            </div>
        )
    }
    return (
        <>
        <div className="container">
            <div className="products my-5">
                <div className="grid">
                    {
                        loading ? (<div className="loading"></div>) :(
                            products.map((product)=>(
                                <Item key={product.id} data={product} addToCart={()=>addToCart(product)}/>
                            ))
                        )
                    }

                </div>
            </div>
        </div>
        </>
    )

}
export default Products