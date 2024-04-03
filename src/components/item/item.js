import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

const Item = ({ data, addToCart }) => {

    const { id, image, title, price } = data
    const handleAddToCart = () => {
        addToCart();
        toast.success("Successfully Added to cart");
    }

    const handleBuyNow = () => {
        // Handle the action when "Buy Now" is clicked
        toast.info("Nice choice");

    }

    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="title">
                    <Link to={`/product/${id}`} className="link titleLink">
                        {title}
                    </Link>
                </div>
                <div className="flex">
                    <div>
                    <span className="price" style={{ marginRight: 15 }}>
                        ₹{price}
                    </span>
                    </div>
                    <div className="buttons flex no-wrap">
                        <div className="cart" onClick={handleAddToCart}>
                            <img className="cartImg" src="/cart.svg" alt="" />
                        </div>
                        <Link to = "/buynow" state={data} ><button className="buyNowBtn" onClick={ handleBuyNow }>Buy Now</button></Link>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}

export { Item }
