import PropTypes from 'prop-types';

const CardResult = ({ resultado }) => {
  return (
    <div className='container result-container'>
      <div className='row'>
        <p className='boxResult w20'>{resultado.valor.toFixed(2)}</p>
      </div>
      <div className='row'>
        <p className='textResult'>
          El resultado de la {resultado.operacion} es : <br />
          {resultado.valor.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

CardResult.propTypes = {
  resultado: PropTypes.number
};

export default CardResult;
