import React, { useState } from "react";
import { Botao } from "./Botao";

import './App.css';

function App() {
  
  const btn_00 = '0_';
  const btn_01 = '1';
  const btn_02 = '2abc';
  const btn_03 = '3def';
  const btn_04 = '4ghi';
  const btn_05 = '5jkl';
  const btn_06 = '6mno';
  const btn_07 = '7pqrs';
  const btn_08 = '8tuv';
  const btn_09 = '9wxyz';

  const [texto, setTexto] = useState('');

  function handleTexto(novoCaracter) {
    setTexto(texto + novoCaracter);
  }

  const limparInput = () => setTexto('');

  return (
    <div className="App">
      <div className="linha">
        <label>
          Clique nos botões: <br></br><input name="myInput" value={texto} readOnly/>
        </label>
      </div>
      <div className="linha">
        <Botao labelBotao={btn_01} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_02} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_03} onClickButton={handleTexto}></Botao>
      </div>
      <div className="linha">
        <Botao labelBotao={btn_04} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_05} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_06} onClickButton={handleTexto}></Botao>
      </div>
      <div className="linha">
        <Botao labelBotao={btn_07} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_08} onClickButton={handleTexto}></Botao>
        <Botao labelBotao={btn_09} onClickButton={handleTexto}></Botao>
      </div>
      <div className="linha">
        <button className='Botao' onClick={limparInput}>Reset</button>
        <Botao labelBotao={btn_00} onClickButton={handleTexto}></Botao>
        
      </div>
    </div>
  );
}

export default App ;
