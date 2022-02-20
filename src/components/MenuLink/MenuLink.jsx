import { Link, useMatch } from 'react-router-dom';

const MenuLink = (props) => {
    const {children, activeClass, to, ...other} = props;
    const math = useMatch(to);
    return (
        <Link
            to={to}
            className={math ? activeClass : ''}
            {...other}
        >
            {children}
        </Link>
    );
};

export {MenuLink};