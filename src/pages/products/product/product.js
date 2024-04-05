import './product.css'

import { useState,useEffect } from "react"
import { FakeStoreApi } from "../../../services/fake-store-api"
import { Link ,useParams } from "react-router-dom"
import { useCart } from '../../../context/cart'
import { toast } from 'react-toastify';
import { Item } from '../../../components/item/item'



const Product =()=>{
    const [loading ,setLoading] = useState(true);
    const [product,setProduct] = useState([]);
    const { addToCart } = useCart()
    const { productId }  = useParams();
     useEffect(()=>{
        const fetchProduct = async ()=>{
            setLoading(true)
            const product = await FakeStoreApi.fetchProductById(productId);
            setProduct(product)
            setLoading(false)

        }
        fetchProduct().catch(console.error);
     },[productId])
     const handleAddToCart = () => {
        addToCart(product);
        toast.success("Successfully Added to cart");
    }
     if(!loading && !product){
        return (  
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">product not found.please vist <Link to ='/'>home</Link> to see all product

                    </div>
                </div>
            </div>
        )
     }

    //  logic for similar products
    const all = async() =>{
        const allProduct = await FakeStoreApi.fetchAllProducts()
    }

    
    
    const searchedProduct = product.title
    console.log(searchedProduct)



    return (
       <>
        <div className="container mar-res">
            {
                loading ? (<div className={'loader'}></div>) : 
                (
                  <div className="product py-2">
                    <div className="details grid p-3">
                        <div className="product-image">
                            <img src={product.image} alt="img" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3>{product.title}</h3>
                                <p className="my-2">{product.description}</p>
                            </div>
                            <div className="flex">
                                <span className="price">₹{product.price}</span>
                                <span className="cart"  onClick={handleAddToCart}>
                                    <img src="/cart.svg" alt="img" />
                                </span>
                            </div>
                        </div>
                        <Link to = "/buynow" state={product} ><button className="buyNowBtn">Buy Now</button></Link>
                    </div>
                  </div>
                )
            }
        </div>
        {/* <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loading"></div>
                        ) : (
                            similarProducts.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div> */}
       </>
    )

}
export default Product