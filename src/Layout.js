import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Categories from './component/Categories';
import Leftsidebar from './component/Leftsidebar';
import Rightsidebar from './component/Rightsidebar';
import { useRef } from 'react';
import './Layout.css';

const Layout = () => {
  const mainarticle = useRef(null);
  console.log(mainarticle.current);

  return (
    <div style={{ backgroundImage: 'url(/img/background.jpg)' }}>
      <div className="commu-wrap">
        <section className="section">
          <Header />
          <Categories></Categories>
          <article className="articlecls">
            <Leftsidebar></Leftsidebar>
            <div>
              <Outlet />
            </div>
          </article>
        </section>

        <Rightsidebar></Rightsidebar>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
