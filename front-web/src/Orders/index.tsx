import { useEffect, useState } from 'react';
import './styles.css'
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationdata, Product } from './types';
import { fecthProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLoctation] = useState<OrderLocationdata>();
    
    useEffect(() => {
        fecthProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);
    
    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLoctation(location)} />
        </div>
    )
}

export default Orders;