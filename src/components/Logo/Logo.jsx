import { classes } from './Logo.scss';
import logoImage from '../../assets/images/Hekto.png';
import {Link} from 'react-router-dom';

const Logo = (props) => {
    const {className} = props;
    return (
        <Link className={`${className} logo`} to="/">
            <img src={logoImage} alt="logotip"/>
        </Link>

    );
}

export default Logo;