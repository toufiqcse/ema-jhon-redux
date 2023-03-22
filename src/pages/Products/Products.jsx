// @ts-nocheck
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/cart/CartSlice';
import { fetchProducts } from '../../redux/store/productSlice';



const Products = () => {
    const dispatch = useDispatch()
    // const [products, setProducts] = useState([]);
    const {data:products, status} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    
   


    const handleAddCart =(product) => {
        dispatch(add(product))
    }

    return (
        <div className='grid grid-cols-5 gap-3'>
            {
                products.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddCart (product)} className='bg-yellow-400 px-4 py-2 rounded'>Add Cart</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;