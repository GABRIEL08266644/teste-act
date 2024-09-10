import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth } from './layout/Auth';
import { Default } from './layout/Default';

import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { CriarProposta } from './pages/CriarProposta';
import { PropostaComercial } from './pages/PropostaComercial';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<Auth />}>
          <Route path="/proposta-comercial" element={<PropostaComercial />} />

          <Route path="/criar-proposta-comercial" element={<CriarProposta />} />
        </Route>
      </Routes>
    </Router>
  );
}
