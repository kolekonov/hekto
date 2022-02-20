import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
/**
 * TODO:
 * Чтобы не писать относительные пути по типу ./pages/Home/Home до файла.
 * Чтобы не прописывать относительные пути до файлов нужно:
 * 1) Завести в корне проекта файл jsconfig.json(tsconfig.json) и использовать внутри конфиг описанный здесь
 *    @see https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d
 * 2) Компоненты страниц, кнопок, инпутов и т.д. можно экспортировать с помощью index.jsx в папке компонента.
 *    В таком случае не придется писать путь до конкретного файла. Просто указать название папки, например:
 *    "pages/Home"
 * 3) Хорошей практикой считается завести файл index.js(ts) в папке components(в pages не обязательно) и в нём сделать export компонентов
 *    из каждой папки в components, например: export * from './Home' и так далее; Тогда импортировать компоненты можно так:
 *    import {Home} from 'components'
 */
import { Home } from "pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Blog } from "./pages/Blog/Blog";
import { Contact } from "./pages/Contact/Contact";
import { Pages } from "./pages/Pages/Pages";
import { Page } from "./pages/Page/Page";
import { Shop } from "./pages/Shop/Shop";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { NotFound } from "pages/NotFound/NotFound";

// Layout нужно хранить в components и папку назвать Layout.
import { Layout } from "./containers/Layout/Layout";

{
  /* Тут лучше просто обернуть Routes в Layout без Route. А Home будет доступен по path="/" */
}
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
