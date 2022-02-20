import { FeaturedItem } from './FeaturedItem'

import { Swiper, SwiperSlide} from 'swiper/react';

// import classes from './FeaturedProducts.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';


const products = [
    {
        id: 1,
        image: require('../../assets/images/product1.png'),
        title: 'Cantilever chair',
        scu: ['green', 'pink', 'blue'],
        article: 'Y523201',
        price: 42.00,
    },
    {
        id: 2,
        image: require('../../assets/images/product2.png'),
        title: 'Cantilever chair',
        scu: ['green', 'pink', 'blue'],
        article: 'Y523201',
        price: 43.00,
    },
    {
        id: 3,
        image: require('../../assets/images/product3.png'),
        title: 'Cantilever chair',
        scu: ['blue', 'green', 'pink'],
        article: 'Y523201',
        price: 47.00,
    },
    {
        id: 4,
        image: require('../../assets/images/product4.png'),
        title: 'Cantilever chair',
        scu: ['pink', 'blue', 'green'],
        article: 'Y523201',
        price: 48.00,
    },

];


const FeaturedProducts = () => {
    return(
        <>
            <div>
                <Swiper
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        products.map(product => <SwiperSlide key={product.id}> <FeaturedItem product={product}/> </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default FeaturedProducts;