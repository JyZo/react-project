import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Categories from './component/Categories';
const Layout = () => {
  return (
    <div style={{ backgroundImage: 'url(/img/background.jpg)' }}>
      <Header />
      <Categories></Categories>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
