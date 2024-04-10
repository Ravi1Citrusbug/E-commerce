import { useState, useEffect } from "react";
import { Item } from  '../../components/item/item';
import { FakeStoreApi } from "../../services/fake-store-api";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../context/cart";
import Advertisement from '../../components/advertisement/advertisement';

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [productsPerPage] = useState(6); // Change this value according to preference
    const [query] = useSearchParams();
    const searchQuery = query.get("q");
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const fetchedProducts = searchQuery ? 
                await FakeStoreApi.fetchProductBySearchQuery(searchQuery) :
                await FakeStoreApi.fetchAllProducts();
            setProducts(fetchedProducts);
            setLoading(false);
        };
        fetchProducts().catch(console.error);
    }, [searchQuery]);
     
    // logic for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details">
                        No products found matching the search query.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {!searchQuery && <Advertisement />}
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loading"></div>
                        ) : (
                            currentProducts.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
                <Pagination
                    currentPage={currentPage}
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
        </>
    );
};

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#!" className={`page-link ${currentPage === number ? 'active' : ''}`}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Products;
