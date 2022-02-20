import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '../Button/Button';

import classes from './Slider.module.scss';
import lamp from '../../assets/images/lamp.png'
import armchair from '../../assets/images/armchair.png'

function Slider() {
  return (
        <div className={classes.slider_wrapper}>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.left_image} src={lamp} alt="lamp"/>
                    <div className='container'>
                        <div className={classes.content}>
                            <div className={classes.subtitle}>Best Furniture For Your  ....</div>
                            <h1 className={classes.title}>New Furniture Collection Trends in 2020</h1>
                            <div className={classes.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.
                            </div>
                            <div>
                                
                            </div>
                            <Button parentClass={classes.slider_link} to="/">Shop Now</Button>
                        </div>
                    </div>
                    <div className={classes.image_block}>
                        <div className={`${classes.circle} ${classes.circle_1}`}></div>
                        <div className={`${classes.circle} ${classes.circle_2}`}></div>
                        <img src={armchair}/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img src={lamp} alt="lamp"/>
                </div>
            </SwiperSlide>
            
        </Swiper>
        
        </div>




    );
}

export default Slider;

