import { useState } from 'react';
import './App.css'

function App() {
  const [imc, setIMC] = useState<string>('0.00');
  const [grau, setGrau] = useState<string>('');
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

    if (result_box)

    if (imc < 16.5) {
      setGrau('Gravemente abaixo do peso');
      result_box.style.borderColor = '#6cb4ee';
      result_box.style.backgroundColor = '#6cb3ee25';
    }
    else if (imc < 18.5) {
      setGrau('Abaixo do peso');
      result_box.style.borderColor = '#8ecae6';
      result_box.style.backgroundColor = '#8ecae623';
    }
    else if (imc <= 24.9) {
      setGrau('Normal');
      result_box.style.borderColor = '#2f5d62';
      result_box.style.backgroundColor = '#2f5d6220';
    }
    else if (imc <= 29.9) {
      setGrau('Sobrepeso');
      result_box.style.borderColor = '#f4a261';
      result_box.style.backgroundColor = '#f4a36120';
    }
    else {
      if (imc <= 34.9) setGrau('Obesidade Classe I');
      else if (imc <= 39.9) setGrau('Obesidade Classe II');
      else setGrau('Obesidade Classe III'); 
      result_box.style.borderColor = '#6a040f';
      result_box.style.backgroundColor = '#6a040e1f';
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
                <input 
                  type='radio'
                  name='age' 
                  defaultChecked
                />
                Sim
              </label>  
              <label>
                <input 
                  type='radio' 
                  name='age' 
                />
                Claro
              </label>
            </div>
          </fieldset>

          <label className='form-text-label' htmlFor='peso'>
            Peso (kg)
            <input
              type='number'
              name='peso'
              min={0}
              placeholder='ex: 73'
            />
          </label>
          <label className='form-text-label' htmlFor='altura'>
            Altura (m)
            <input
              type='number'
              name='altura'
              placeholder='ex: 1,73'
              min={0}
              step='0.01'
            />
          </label>

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
