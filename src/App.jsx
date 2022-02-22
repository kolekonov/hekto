import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import { Home } from "pages";
import { Products } from "pages";
import { Blog } from "pages";
import { Contact } from "pages";
import { Pages } from "pages";
import { Page } from "pages";
import { Shop } from "pages";
import { BasketPage } from "pages";
import { NotFound } from "pages";

import { Layout } from "components";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pages/" element={<Pages />} />
            {/* <Route path="pages/:title/" element={<Page/>} /> */}
            <Route path="products" element={<Products />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
