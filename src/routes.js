import AboutUsPage from "./Pages/AboutUsPage";
import ProductList from "./Pages/ProductList";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import Account from "./components/Account"

export default [
  {path: '/home', component: HomePage},
  {path: '/aboutUs', component: AboutUsPage},
  {path: '/productList', component: ProductList},
  {path: '/contactUs', component: ContactUsPage},
  {path: '/account', component: Account}
]
