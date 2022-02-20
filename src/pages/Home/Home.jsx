import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import classes from './Home.module.scss';
const Home = () => {
    return (
        <>
            <section className={classes.main_slider}>
                <Slider/>
            </section>
            
            <section className={classes.featured_products}>
                <div className='container'>
                    <h2>Featured Products</h2>
                    <FeaturedProducts/>
                </div>
            </section>
        </>

    );
};

export {Home};