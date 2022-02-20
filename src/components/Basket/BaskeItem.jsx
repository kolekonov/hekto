import classes from './BasketItem.module.scss';

const BasketItem = ({ product }) => {
    const { image, title, scu, article, price } = product;
    return (
        <>
            <img src={image} alt="" /> <br />
            {title} <br />
            {article} <br />
            {price} <br />
        </>
    );
};

export {BasketItem};
