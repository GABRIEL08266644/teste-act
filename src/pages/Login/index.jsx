import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import logoSvg from '../../assets/logo.svg';
import emailIconSVG from '../../assets/icons/icon-email.svg';
import idIconSVG from '../../assets/icons/icon-id.svg';

export function Login() {
  const [email, setEmail] = useState('');
  const [offerId, setOfferId] = useState('');
  const navigate = useNavigate();

  const abrirProposta = () => {
    navigate('/proposta-comercial');
  };

  const criarProposta = () => {
    navigate('/criar-proposta-comercial');
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img src={logoSvg} alt="act" className="logo" />
          <h1>Propostas Comerciais</h1>

          <div className="input-container">
            <img src={emailIconSVG} alt="Email Icon" className="icon-input" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <span>ou</span>

          <div className="input-container">
            <img src={idIconSVG} alt="Id Icon" className="icon-input-id" />
            <input
              type="text"
              id="id-oferta"
              placeholder="Digite o ID da Oferta"
              value={offerId}
              onChange={(e) => setOfferId(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button className="btn-primary" onClick={abrirProposta}>Acessar</button>
            <button className="btn-secondary" onClick={criarProposta}>Criar Proposta</button>
          </div>
        </div>
      </div>
    </>
  );
}
