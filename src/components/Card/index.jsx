import PropTypes from 'prop-types';
import './Card.css';

import bradesco from '../../assets/bradesco.svg';
import perfilCard from '../../assets/perfil-card.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import wppIcon from '../../assets/icons/wpp-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import iconLocation from '../../assets/icons/icon-location.svg';

export const Card = ({ data, isHovered, active }) => {
  return (
    <>
      {active ? (
        <div className={`card card-fixed`}>
  
        <img src={bradesco} alt="Logo" className="logo" />

        <h2>{data.id}</h2>
        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <div className="line"></div>

        <div>
          <h1>
            R$ {data.grossRevenue.toLocaleString(
              'pt-BR', 
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            )}
            <span>Faturamento Bruto Total</span>
          </h1>
        </div>
        
        <div className="details">
          <div className='details-line'>
            <p className="revenue">
              R$ {data.netRevenue.toLocaleString('pt-BR')} 
              <span>Faturamento Líquido Total</span>
            </p>
            <p className="mol-percentage">
              {data.molPercentage}%
              <span>MOL Total %</span>
            </p>
          </div>

          <div className='details-line'>
          <p className="cost">
              R$ {data.totalCost.toLocaleString('pt-BR')}
              <span>Custo Total</span>
            </p>
            <p className="mol-total">
              R$ {data.molTotalBRL.toLocaleString('pt-BR')}
              <span>MOL Total BRL</span>
            </p>
          </div>
        </div>

        <div className="hover-info">
          <div className="line"></div>

          <div className='d-flex'>
            <div>
              <img src={perfilCard} alt="Manager" className="manager-photo" />
            </div>
            <div className='hover-perfil'>
              <h4>{data.manager.name}</h4>
              <p>{data.manager.title}</p>
              <div className='midias'>
                <img src={linkedinIcon} alt="" />
                <img src={wppIcon} alt="" />
                <img src={emailIcon} alt="" />
              </div>
            </div>
          </div>

          <span>Localização</span>
          <p className="location"><img src={iconLocation} alt="Icon Location" />{data.manager.location}</p>

          <span className='competencias'> 
            <div className="skill-count">
              {data.manager.skills.length}
            </div>
            Competência
          </span>

          <div className="skills">
            {data.manager.skills.map((skill, index) => (
              <span key={index} className="skill">{skill}</span>
            ))}
          </div>

          <div className="line"></div>

          <div className="project-dates">
            <div>
              <p>{data.startDate}</p>
              <p>Data Início</p>
            </div>
            <div>
              <p>{data.endDate}</p>
              <p>Data Fim</p>
            </div>
            <div>
              <p>{data.durationMonths} meses</p>
              <p>Duração</p>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div className={`card ${isHovered ? 'hovered' : ''}`}>
  
          <img src={bradesco} alt="Logo" className="logo" />
  
          <h2>{data.id}</h2>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
  
          <div className="line"></div>
  
          <div>
            <h1>
              R$ {data.grossRevenue.toLocaleString(
                'pt-BR', 
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              )}
              <span>Faturamento Bruto Total</span>
            </h1>
          </div>
          
          <div className="details">
            <div className='details-line'>
              <p className="revenue">
                R$ {data.netRevenue.toLocaleString('pt-BR')} 
                <span>Faturamento Líquido Total</span>
              </p>
              <p className="mol-percentage">
                {data.molPercentage}%
                <span>MOL Total %</span>
              </p>
            </div>
  
            <div className='details-line'>
            <p className="cost">
                R$ {data.totalCost.toLocaleString('pt-BR')}
                <span>Custo Total</span>
              </p>
              <p className="mol-total">
                R$ {data.molTotalBRL.toLocaleString('pt-BR')}
                <span>MOL Total BRL</span>
              </p>
            </div>
          </div>
  
          <div className="hover-info">
            <div className="line"></div>
  
            <div className='d-flex'>
              <div>
                <img src={perfilCard} alt="Manager" className="manager-photo" />
              </div>
              <div className='hover-perfil'>
                <h4>{data.manager.name}</h4>
                <p>{data.manager.title}</p>
                <div className='midias'>
                  <img src={linkedinIcon} alt="" />
                  <img src={wppIcon} alt="" />
                  <img src={emailIcon} alt="" />
                </div>
              </div>
            </div>
  
            <span>Localização</span>
            <p className="location"><img src={iconLocation} alt="Icon Location" />{data.manager.location}</p>
  
            <span className='competencias'> 
              <div className="skill-count">
                {data.manager.skills.length}
              </div>
              Competência
            </span>
  
            <div className="skills">
              {data.manager.skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
  
            <div className="line"></div>
  
            <div className="project-dates">
              <div>
                <p>{data.startDate}</p>
                <p>Data Início</p>
              </div>
              <div>
                <p>{data.endDate}</p>
                <p>Data Fim</p>
              </div>
              <div>
                <p>{data.durationMonths} meses</p>
                <p>Duração</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    grossRevenue: PropTypes.number.isRequired,
    netRevenue: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    molPercentage: PropTypes.number.isRequired,
    molTotalBRL: PropTypes.number.isRequired,
    manager: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    durationMonths: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
  active: PropTypes.bool
};

export default Card;
