import './Botao.css';
import React, { useState, useEffect } from 'react';

export function Botao({ labelBotao, onClickButton }) {
    const [qtdClick, setQtdClick] = useState(0);

    const handleClick = () => {
        const qtd = (labelBotao.length === (qtdClick + 1))? () => 0 : (qtdClick) => qtdClick + 1;
        setQtdClick(qtd);
        console.log('qtdClick: ', qtdClick+1, ' / textolabelBotao[qtdClick]: ', labelBotao[qtdClick])
    }

    useEffect(()=>{
        const getCaracter = setTimeout(()=>{
            console.log(' caracter(timeout, 400): ', labelBotao[qtdClick])
            onClickButton(labelBotao[qtdClick]);
        }, 2000)
        return () => {
            clearTimeout(getCaracter);
            // setQtdClick(() => 0);
            console.log(' caracter: ', labelBotao[qtdClick])
        };
    }, [qtdClick]) 

    return (
        <button className='Botao' onClick={handleClick}>
            {labelBotao}
        </button>
    )
}

