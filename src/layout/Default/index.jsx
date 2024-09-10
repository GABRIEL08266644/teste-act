import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';

import "./default.css"

const Default = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
        <Footer /> 
      </div>
    </div>
  );
}

export { Default };
