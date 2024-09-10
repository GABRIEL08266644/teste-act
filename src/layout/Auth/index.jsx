import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import "./auth.css";

const Auth = () => {
  return (
    <div className="layout">
      <Header />
      
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export { Auth };
