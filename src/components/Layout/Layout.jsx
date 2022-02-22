import { Header } from '../Header/Header';




import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>

            <Header/>

            <Outlet/>
            <footer>
                <div className='container'>footer</div>
            </footer>
        </div>
    );
}

export {Layout};