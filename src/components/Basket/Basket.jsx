import { BasketItem } from './BaskeItem';
import classes from './Basket.module.scss';


const Basket = ({products}) => {
    return (
        <>
        {
            products.map(product => <BasketItem key={product.id} product={product}/>)
        }
        </>
    );
};

export {Basket};