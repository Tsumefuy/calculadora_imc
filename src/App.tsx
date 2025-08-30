import { useState } from 'react';
import './App.css';

import { LabelNum } from './components/LabelNum/LabelNum';

function App() {
  const [imc, setIMC] = useState<string>('0.00');
  const [grau, setGrau] = useState<string>();
  const [showResult, setShowResult] = useState<boolean>(false);
  
  const handleCalcula = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const peso = Number(formData.get('peso'));
    const altura = Number(formData.get('altura'));

    if (peso === 0 || altura === 0) return;

    const imc = peso / altura ** 2;

    setIMC(imc.toFixed(2));

    const result_box = document.getElementById('result');

    if (imc < 16.5) {
      setGrau('Gravemente abaixo do peso');
      if (result_box) {
        result_box.style.borderColor = '#6cb4ee';
        result_box.style.backgroundColor = '#6cb3ee25';
      }
    }
    else if (imc < 18.5) {
      setGrau('Abaixo do peso');
      if (result_box) {
        result_box.style.borderColor = '#8ecae6';
        result_box.style.backgroundColor = '#8ecae623';
      }
     
    }
    else if (imc <= 24.9) {
      setGrau('Normal');
      if (result_box) {
        result_box.style.borderColor = '#2f5d62';
        result_box.style.backgroundColor = '#2f5d6220';
      }
    }
    else if (imc <= 29.9) {
      setGrau('Sobrepeso');
      if (result_box) {
        result_box.style.borderColor = '#f4a261';
        result_box.style.backgroundColor = '#f4a36120';
      }
    }
    else {
      if (imc <= 34.9) setGrau('Obesidade Classe I');
      else if (imc <= 39.9) setGrau('Obesidade Classe II');
      else setGrau('Obesidade Classe III'); 
      if (result_box) {
        result_box.style.borderColor = '#6a040f';
        result_box.style.backgroundColor = '#6a040e1f';
      }
    }

    setShowResult(true);
  }

  return (
    <main>
      <h1>Calculadora de IMC</h1>
      <div className='form-container'>
        <form onSubmit={handleCalcula}>
          <fieldset>
            <legend>Você é adulto?</legend>
            <div className='form-radio'>
              <label>
                <input type='radio' name='age' defaultChecked/>
                Sim
             </label>  
              <label>
                <input type='radio' name='age'/>
                Claro
              </label>
            </div>
          </fieldset>
          <LabelNum htmlFor='peso' name='peso' placeholder='ex: 73' min={0}>Peso (kg)</LabelNum>
          <LabelNum htmlFor='altura' name='altura' placeholder='ex: 1,73' min={0.00} step={0.01}>Altura (m)</LabelNum>
          <button type='submit'>Calcular</button>
        </form>
        { showResult ? (
          <div id='result' className='result'>
              <p className='imc'>
                Seu imc é: {imc}
              </p>
              <p className='grau'>
                Grau: {grau}
              </p>
          </div>
        ) : null}
      </div>
    </main>
  )
}

export default App
