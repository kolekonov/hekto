import { Basket } from '../../components/Basket/Basket';
import { useSelector } from 'react-redux';

const BasketPage = () => {

    const products = useSelector(state => state.basket.products);

    return (
        <>
            <div className='container'>
                <Basket products={products}/>
            </div>
            {
        }
            
        </>
    );
};

export {BasketPage};
