import './CriarProposta.css';

import data from "../../data/propostas.json";
import Card from '../../components/Card';
import { Form } from '../../components/Form';

import iconSave from '../../assets/icons/icon-save.svg'
import iconEnviarEmail from '../../assets/icons/icon-enviar-email.svg'
import iconExport from '../../assets/icons/icon-export.svg'
import iconDuplicate from '../../assets/icons/icon-duplicate.svg'
import iconReload from '../../assets/icons/icon-reload.svg'

export const CriarProposta = () => {
  return (
    <>
      <div className="criar-proposta-container">
        <div className="left-section">
          <Card data={data[0]} active={true} />
        </div>

        <div className="middle-section">
          <Form />
        </div>

        <div className="right-section">
          <div className="button-group">
            <button type="button" className="button-sm">
              <img src={iconSave} />
              Salvar
            </button>
            <button type="button" className="button-sm">
              <img src={iconEnviarEmail} />
              Enviar
            </button>
            <button type="button">
              <img src={iconExport} />
              Exportar
            </button>
            <button type="button">
              <img src={iconDuplicate} />
              Duplicar
            </button>
            <button type="button">
              <img src={iconReload} />
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}