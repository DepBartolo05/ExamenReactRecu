import CalculatorForm from './components/CalculatorForm';
import CardResult from './components/CardResult';
import { useState } from 'react';

function App() {
  const [resultado, setResultado] = useState({
    valor: 0,
    operacion: ''
  });

  return (
    <div className='content'>
      <div className='container'>
        <div className='app-wrap'>
          <h2 className='app-title text-center'>Calculadora</h2>
          <CalculatorForm setResultado={setResultado} />
          {resultado.operacion !== '' ? (
            <CardResult resultado={resultado} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
