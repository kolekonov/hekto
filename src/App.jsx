import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux'

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Blog } from "./pages/Blog/Blog";
import { Contact } from "./pages/Contact/Contact";
import { Pages } from "./pages/Pages/Pages";
import { Page } from "./pages/Page/Page";
import { Shop } from "./pages/Shop/Shop";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { NotFound } from "./pages/NotFound/NotFound";


import { Layout } from "./containers/Layout/Layout";

const  App = () => {
    return(
        <div>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="pages/" element={<Pages/>} />
                        {/* <Route path="pages/:title/" element={<Page/>} /> */}
                        <Route path="products" element={<Products/>} />
                        <Route path="blog" element={<Blog/>} />
                        <Route path="shop" element={<Shop/>} />
                        <Route path="contact" element={<Contact/>} />
                        <Route path="basket" element={<BasketPage/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;