import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar=({onSearch,cartItemCount})=>{
    const [searchQuery, setSearchQuery] = useState("");
    const handleSubmit =() => {
        if (searchQuery.trim().length){
            onSearch(searchQuery.trim());  //send the search query to parent component for further processing
        }
        setSearchQuery("")
    }
    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to ="/" className="link">
                            <h1 className="brand"> E@cart</h1>
                        </Link>
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input value ={searchQuery} onChange ={e =>setSearchQuery(e.target.value)}type="text" placeholder="Search products....." />
                                </div>
                                <button onClick ={ handleSubmit } type="button" className="search-btn"> Search
                                </button> 
                            </form>
                        </div>
                        <Link to ="/cart" className="Link headerCart">
                            <img  className="cartImg" src="/cart.svg" alt="" />
                            {cartItemCount > 0 && (<div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>)}
                        </Link>
                    </div>

                </div>

            </header>
        </div>
    )

}
export default Navbar;