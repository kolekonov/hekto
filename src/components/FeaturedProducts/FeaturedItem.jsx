import { useDispatch, useSelector } from 'react-redux';
import { addProductInBasket, testAction } from '../../redux/basket/reducer'
import { BasketButton } from '../BasketButton/BasketButton';
import { WishButton } from '../WishButton/WishButton';
import classes from './FeaturedItem.module.scss';



// import image from '../../assets/images/image_1168.png';

const FeaturedItem = ({ product }) => {
    // console.log(product);
    const { image, title, scu, article, price } = product;

    const dispatch = useDispatch();

    const selector = useSelector(state => state.basket.products);

    // console.log(selector)



    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(addProductInBasket(product));
    // console.log(selector)

    }

    const handleTest = (e) => {
        e.stopPropagation();
        dispatch(testAction(product));
    }


    return(
        <>
            <div className={classes.item}>
                <div className={classes.image_box}>
                    <div className={classes.image_box_buttons}>
                        <BasketButton
                            onClick={ handleClick }
                        />
                        <WishButton
                            onClick={ handleTest }
                        />
                    </div>
                    <img src={image} alt="" />
                </div>
                <div className={classes.info_box}>
                    <div className={classes.info_box_title}>
                        Cantilever chair
                    </div>
                    <div className={classes.info_box_scu}>
                        
                    </div>
                    <div className={classes.info_box_article}>
                        Code - Y523201
                    </div>
                    <div className={classes.info_box_price}>
                        $42.00
                    </div>
                </div>
            </div>
        </>
    );
};

export {FeaturedItem};