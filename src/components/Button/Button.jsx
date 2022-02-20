import { Link } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = (props) => {
    const {to, children, parentClass, ...other} = props
    return (
        <Link to={to} className={`${parentClass} ${classes.link}`}>
            {children}
        </Link>
    );
}

export {Button};