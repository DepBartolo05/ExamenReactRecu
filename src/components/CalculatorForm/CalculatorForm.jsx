import PropTypes from 'prop-types';
import { useState } from 'react';

const CalculatorForm = ({ setResultado }) => {
  const initCalc = {
    input1: '',
    input2: ''
  };

  const [form, setFormState] = useState(initCalc);

  const handleInputChange = (e) => {
    setFormState({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const handleAddition = () => {
    if (form.input1 !== '' && form.input2 !== '') {
      setResultado({
        valor: parseFloat(form.input1) + parseFloat(form.input2),
        operacion: 'suma'
      });
      setFormState(initCalc);
    } else {
      alert('Introduzca los valores correctamente');
    }
  };

  const handleSubstraction = () => {
    if (form.input1 !== '' && form.input2 !== '') {
      setResultado({
        valor: parseFloat(form.input1) - parseFloat(form.input2),
        operacion: 'resta'
      });
      setFormState(initCalc);
    } else {
      alert('Introduzca los valores correctamente');
    }
  };

  const handleMultiplication = () => {
    if (form.input1 !== '' && form.input2 !== '') {
      setResultado({
        valor: parseFloat(form.input1) * parseFloat(form.input2),
        operacion: 'multiplicación'
      });
      setFormState(initCalc);
    } else {
      alert('Introduzca los valores correctamente');
    }
  };

  const handleDivision = () => {
    if (form.input1 !== '' && form.input2 !== '') {
      setResultado({
        valor: parseFloat(form.input1) / parseFloat(form.input2),
        operacion: 'division'
      });
      setFormState(initCalc);
    } else {
      alert('Introduzca los valores correctamente');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <form>
            <div className='row'>
              <div className='col'>
                <input
                  type='number'
                  className='w100'
                  placeholder='NUM. EJ. 1293'
                  name='input1'
                  onChange={handleInputChange}
                  value={form.input1}
                />
              </div>
              <div className='col'>
                <input
                  type='number'
                  className='w100'
                  placeholder='NUM. EJ. 1293'
                  name='input2'
                  onChange={handleInputChange}
                  value={form.input2}
                />
              </div>
            </div>
            <div className='row mt-5 separated'>
              <button
                type='button'
                className='btn btn-primary wAuto'
                onClick={handleAddition}
              >
                + Sumar
              </button>
              <button
                type='button'
                className='btn btn-danger wAuto'
                onClick={handleSubstraction}
              >
                - Restar
              </button>
              <button
                type='button'
                className='btn btn-success wAuto'
                onClick={handleMultiplication}
              >
                * Multiplicar
              </button>
              <button
                type='button'
                className='btn btn-dark wAuto'
                onClick={handleDivision}
              >
                / Dividir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CalculatorForm.propTypes = {
  setResultado: PropTypes.func
};

export default CalculatorForm;
