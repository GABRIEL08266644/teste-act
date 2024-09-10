import { useForm } from 'react-hook-form';

import "./Form.css";
import PropTypes from 'prop-types';

import iconImg from '../../assets/icons/icon-img.svg';
import { useEffect, useState } from 'react';
import {MyCustomDatePicker} from '../../components/Date';

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [composicaoTime, setComposicaoTime] = useState([
    { roleId: Date.now(), value: 0 },
  ]);

  const teamComposition = [
    { id: 1, role: 'Delivery Manager', rate: 125.00, fte: 1 },
    { id: 2, role: 'Arquiteto de Soluções', rate: 125.00, fte: 1 },
    { id: 3, role: 'Squad Leader', rate: 125.00, fte: 1 },
    { id: 4, role: 'Tech Leader Desenvolvimento', rate: 125.00, fte: 1 },
    { id: 5, role: 'Designer UX/UI', rate: 125.00, fte: 1 },
    { id: 6, role: 'Frontend Angular', rate: 125.00, fte: 1 },
    { id: 7, role: 'Backend Java', rate: 125.00, fte: 1 },
    { id: 8, role: 'QA Automatizado', rate: 125.00, fte: 1 },
  ];

  const meses = ["M1", "M2", "M3", "M4", "M5", "M6"];
  const fases = ["F1", "F2", "F3"];
  const [dataInicio] = useState('');
  const [dataFim] = useState('');
  const [duration, setDuration] = useState('');
  const [predictedStart, setPredictedStart] = useState('');
  
  useEffect(() => {
    if (dataInicio && dataFim) {
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);

      const diffTime = Math.abs(fim - inicio);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const months = Math.floor(diffDays / 30);
      setDuration(`${months} meses`);
  
      const predictedStartDate = new Date(inicio);
      predictedStartDate.setDate(predictedStartDate.getDate() + 21);
      setPredictedStart(predictedStartDate.toLocaleDateString('pt-BR'));
    }
  }, [dataInicio, dataFim]);

  const handleAdd = (e) => {
    e.preventDefault();
    setComposicaoTime([...composicaoTime, { roleId: Date.now(), value: 0 }]);
  };

  const handleValueChange = (index, value) => {
    const newComposicaoTime = composicaoTime.map((item, i) =>
      i === index ? { ...item, value } : item
    );
    setComposicaoTime(newComposicaoTime);
  };

  const handleRemove = (index) => {
    const newComposicaoTime = composicaoTime.filter((_, i) => i !== index);
    setComposicaoTime(newComposicaoTime);
  };

  const onSubmit = data => {
    console.log(data);
  };

  const renderFasesMesesTable = () => {
      const roles = [
    "Delivery Manager",
    "Arquiteto de Soluções",
    "Squad Leader",
    "Tech Leader Desenvolvimento",
    "Designer UX/UI",
    "Desenvolvedor Angular",
    "Backend Java",
    "QA Automatizado"
  ];
  
    return (
      <>
        <table>
        <thead>
        <tr>
          <th>Fases</th>
          {fases.map((fase, index) => (
            <th key={index} colSpan={fase === "F2" && "4"}>
              <span className="line-th">{fase}</span>
            </th>
          ))}
        </tr>

        <tr>
          <th>Meses</th>
          {meses.map((mes, index) => (
            <th key={index}>{mes}</th>
          ))}
        </tr>
      </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role}</td>
                {meses.map((mes, index) => (
                <td key={index}>
                  <input
                    className="ftes-color"
                    type="number"
                    step="0.01"
                    defaultValue="0.25"
                    {...register(`fte_${mes}`, { required: true })}
                  />
                </td>
              ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total FTEs</td>
              {meses.map((mes, index) => (
                <td key={index}>8,5</td> 
              ))}
            </tr>
          </tfoot>
        </table>
      </>
    );
  };
  

const TabelaFaturamento = () => {
  const roles = [
    "Delivery Manager",
    "Arquiteto de Soluções",
    "Squad Leader",
    "Tech Leader Desenvolvimento",
    "Designer UX/UI",
    "Desenvolvedor Angular",
    "Backend Java",
    "QA Automatizado"
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Fases</th>
          {fases.map((fase, index) => (
            <th key={index} colSpan={fase === "F2" && "4"}>
              <span className="line-th">{fase}</span>
            </th>
          ))}
        </tr>

        <tr>
          <th>Meses</th>
          {meses.map((mes, index) => (
            <th key={index}>{mes}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {roles.map((role, index) => (
          <tr key={index}>
            <td>{role}</td>
            {meses.map((mes, mesIndex) => (
              <td key={mesIndex}>
                <input
                  type="number"
                  step="0.01"
                  defaultValue="12600"
                  {...register(`faturamento_${role}_${mes}`, { required: true })}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Valor Total</td>
          {meses.map((mes, index) => (
            <td key={index}>0,00</td> 
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

TabelaFaturamento.propTypes = {
  meses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Informações pessoais</h3>
        <div className="line"></div>

        <div className="space-section">
          <div className="info-pessoais">
            <div>
              <div className="file-input-wrapper">
                <input type="file" id="file-input" />
                <label htmlFor="file-input" className="custom-file-label">
                  <img src={iconImg} alt="Upload" />
                </label>
              </div>
            </div>

            <div className="form-info-pessoais">
              <label>
                <input type="text" placeholder="Nome do cliente" />
              </label>
              <label>
                <input type="email" placeholder="Digite o e-mail do cliente" />
              </label>
              <label>
                <input type="text" placeholder="Selecione a empresa do cliente" />
              </label>
              <label>
                <input type="tel" placeholder="Selecione o cargo do cliente" />
              </label>
              <label>
                <input type="tel" placeholder="Digite o Whatsapp do cliente" />
              </label>
              <label>
                <input type="tel" placeholder="Digite o linkedin do cliente" />
              </label>
            </div>
          </div>
        </div>

        <section className="form-section">
          <h3>Solução proposta</h3>
          <div className="line"></div>

          <div className="space-section">
            <h3>Assunto</h3>
            <div className="form-group">
              <select {...register('assunto', { required: true })}>
                <option value="">Selecione o assunto do projeto</option>
                <option value="assunto1">Assunto 1</option>
                <option value="assunto2">Assunto 2</option>
              </select>
              {errors.assunto && <span className="error">Assunto é obrigatório</span>}
            </div>

            <h3>Categoria</h3>
            <div className="form-group">
              <select {...register('categoria', { required: true })}>
                <option value="">Selecione a categoria do projeto</option>
                <option value="categoria1">Categoria 1</option>
                <option value="categoria2">Categoria 2</option>
              </select>
              {errors.categoria && <span className="error">Categoria é obrigatória</span>}
            </div>

            <h3>Tecnologias</h3>
            <div className="form-group">
              <select {...register('tecnologias', { required: true })}>
                <option value="">Selecione as tecnologias do Projeto</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </select>
              {errors.tecnologias && <span className="error">Tecnologias são obrigatórias</span>}
            </div>

            <h3>Desafios</h3>
            <div className="form-group">
              <select {...register('desafios', { required: true })}>
                <option value="">Selecione os desafios do Projeto</option>
                <option value="desafio1">Desafio 1</option>
                <option value="desafio2">Desafio 2</option>
              </select>

              {errors.desafios && <span className="error">Desafios são obrigatórios</span>}
            </div>

            <h3>Estratégia Recomendada</h3>
            <div className="form-group">
              <select {...register('estrategia', { required: true })}>
                <option value="">Selecione a estratégia recomendada</option>
                <option value="estrategia1">Estratégia 1</option>
                <option value="estrategia2">Estratégia 2</option>
              </select>
              {errors.estrategia && <span className="error">Estratégia é obrigatória</span>}
            </div>

            <h3>Abordagem e Solução Proposta</h3>
            <div className="form-group">
              <textarea 
                {...register('solucao', { required: true })} 
                placeholder="Digite neste campo">
              </textarea>
              {errors.solucao && <span className="error">Este campo é obrigatório</span>}
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Expectativas do Cliente</h3>
          <div className="line"></div>
          <div className="space-section">
            <div className="form-group">
              <select {...register('expectativas', { required: true })}>
                <option value="">Selecione os resultados esperados</option>
                <option value="resultado1">Resultado 1</option>
                <option value="resultado2">Resultado 2</option>
              </select>
              {errors.expectativas && <span className="error">Resultados são obrigatórios</span>}
            </div>

            <h3>Contexto e desafio do cliente</h3>
            <div className="form-group">
              <textarea 
                {...register('contexto', { required: true })} 
                placeholder="Digite neste campo">
              </textarea>
              {errors.contexto && <span className="error">Este campo é obrigatório</span>}
            </div>

            <h3>Expectativa e Resultados esperados</h3>
            <div className="form-group">
              <textarea 
                {...register('resultadosEsperados', { required: true })} 
                placeholder="Digite neste campo">
              </textarea>
              {errors.resultadosEsperados && <span className="error">Este campo é obrigatório</span>}
            </div>
          </div>
        </section>

        <div className="space-section">
          <section className="form-dates">
            <div>
              <label>Data de Início</label>

              <MyCustomDatePicker/> 
                  {errors.dataInicio && <span className="error">Data de início é obrigatória</span>}
                <label>Data de Fim</label>
              <MyCustomDatePicker/> 

              {errors.dataFim && <span className="error">Data de fim é obrigatória</span>}
            </div>
            <div>
              <label>Duração do Projeto</label>
              <span className="result">{duration || 'Calcule a duração'}</span>
            </div>
            <div>
              <label>Início Previsto</label>
              <span className="result">{predictedStart || 'Calcule o início'}</span>
            </div>
          </section>

          <div className="location-select">
            <select>
              <option>Selecione localidade do projeto</option>
            </select>
          </div>

          <section className="team-composition">
            <h3>Composição de Time</h3>
            <div className="line"></div>

            <div className="space-section">
              <div className="form-group jornada">
                <div>
                  <label>Jornada diária em horas</label>
                  <input
                    type="number"
                    defaultValue="8"
                    {...register('workload', { required: true })}
                  />
                  {errors.workload && <span className="error">Este campo é obrigatório</span>}
                </div>
                <div>
                  <label>Quantidade de horas mensais</label>
                  <input
                    type="number"
                    defaultValue="168"
                    {...register('monthlyHours', { required: true })}
                  />
                  {errors.monthlyHours && <span className="error">Este campo é obrigatório</span>}

                </div>
              </div>

              <div>
                <div className='composicao-time-header'>
                  <p className="perfil">Perfil/Competência</p>
                  <p>BRL / Hora</p>
                  <p>Quantidade FTEs</p>
                </div>
                
                <div>
                  {composicaoTime.map((item, index) => (
                    <div className="composicao-time" key={index}>
                      <select
                        className="composicao-select"
                        {...register(`composicaoTime[${index}].roleId`, { required: true })}
                        value={item.roleId}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          const newComposicaoTime = composicaoTime.map((comp, i) =>
                            i === index ? { ...comp, roleId: selectedValue } : comp
                          );
                          setComposicaoTime(newComposicaoTime);
                        }}
                      >
                        <option value="" disabled>
                          Selecione
                        </option>
                        {teamComposition.map((x) => (
                          <option value={x.id} key={x.id}>
                            {x.role}
                          </option>
                        ))}
                      </select>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) => handleValueChange(index, Number(e.target.value))}
                          style={{ width: '50px', textAlign: 'center' }}
                        />
                        <button
                          className="btn-remove"
                          type="button"
                          onClick={() => handleValueChange(index, item.value - 1)}
                        >
                          -
                        </button>
                        <button
                          className="btn-add"
                          type="button"
                          onClick={() => handleValueChange(index, item.value + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn-remove"
                        type="button"
                        onClick={() => handleRemove(index)}
                      >
                        D
                      </button>
                    </div>
                  ))}

                  <button className="btn-add-color" onClick={handleAdd}>+</button>
                </div>
              </div>

              <div className="form-group form-fases">
                <label>O projeto tem várias fases?</label>
                <select className="projeto-fases" {...register('multiplePhases', { required: true })}>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>

                {errors.multiplePhases && <span className="error">Este campo é obrigatório</span>}
              </div>

              <table className="phase-table">
                <thead>
                  <tr>
                    <th>Nome da Fase</th>
                    <th>Duração (meses)</th>
                  </tr>
                </thead>

                <tbody>
                  {fases.map((phase) => (
                    <tr key={phase}>
                      <td className="form-phase">
                        <span>{phase}</span>

                        <select name="">
                          <option value="selecione" selected disabled>Selecione</option>
                          {teamComposition.map((x) => (
                            <option value={x.id} key={x.id}>
                              {x.role}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <input
                          type="number"
                          min="1"
                          defaultValue={1}
                          {...register(`duration_${phase.id}`, { required: true })}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="form-group">
                <label>Os profissionais vão ter quantidade ou duração de alocação diferentes?</label>

                <select className="projeto-fases" {...register('multiplePhases', { required: true })}>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>

                {errors.multiplePhases && <span className="error">Este campo é obrigatório</span>}
              </div>
            </div>
          </section>
        </div>

        <section>
          <h3>Tabela de Fases e Meses</h3>

          {renderFasesMesesTable()}

          <h3>Faturamento</h3>
          <div className="line"></div>

          <div className="space-section">
            <div className="form-group jornada">
                <div>
                  <label>Ratecard</label>
                  <input
                    className='input-faturamento'
                    type="text"
                    defaultValue="Ratecard 1"
                    {...register('workload', { required: true })}
                  />
                  {errors.workload && <span className="error">Este campo é obrigatório</span>}
                </div>
                <div>
                  <label>Impostos Faturamento</label>
                  <input
                  className='input-faturamento'
                    type="number"
                    defaultValue="168"
                    {...register('monthlyHours', { required: true })}
                  />
                  {errors.monthlyHours && <span className="error">Este campo é obrigatório</span>}

                </div>
              </div>

              <div className="faturamento-btns">
                <button>
                  Faturamento Bruto
                </button>
                <button>
                  Faturamento Bruto
                </button>
                <button>
                  Faturamento Bruto
                </button>
                <button>
                  Faturamento Bruto
                </button>
              </div>
              {TabelaFaturamento()}
          </div>
        </section>
      </form>
    </div>
  );
}
