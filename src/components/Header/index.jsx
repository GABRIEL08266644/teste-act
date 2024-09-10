import './Header.css';

import logoSvg from '../../assets/logo.svg';
import fotoPerfil from '../../assets/foto-perfil.svg';
import iconReload from '../../assets/icons/icon-reload.svg';

export const Header = () => {
  return (
    <header >
      <div className="header-container">
        <div className="left-section">
          <img src={logoSvg} alt="Logo Esquerda" className="header-image" />
          <p className="header-text-side mg-t">Propostas Comerciais</p>
        </div>

        <div className="right-section">
          <div className="right-top">
            <img src={fotoPerfil} alt="Logo Direita" className="perfil-image" />
            <p className="">Amanda Takay</p>
          </div>
          <div className="right-top mg-t">
            <p className="text-below right-top">Última Atualizaçãos: <p className='text-color'>13/08/2024 ás 17:00 </p></p>
            
            <img src={iconReload} alt="Icon Reload" className="icon-reload" />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </header>
  );
}
