import './Botao.css';
import React, { useState, useEffect } from 'react';

export function Botao({ labelBotao, onClickButton }) {

    const [qtdClick, setQtdClick] = useState(0);

    const handleClick = () => {
        if (labelBotao.length === (qtdClick))
            setQtdClick(() => 0)
        else
            setQtdClick((qtdClick) => qtdClick + 1);
        console.log('qtdClick: ', qtdClick, ' / texto: ', labelBotao[qtdClick]);
    }

    useEffect(() => {
        const getCaracter = setTimeout(() => {
            if (qtdClick !== 0) {
                onClickButton(labelBotao[qtdClick-1]);
                setQtdClick(() => 0);
            }
        }, 500)
        return () => {
            clearTimeout(getCaracter)
        };
    }, [qtdClick])

    return (
        <button className={'botao'} onClick={handleClick}>
            <span className='negrito'>{labelBotao[0]}</span>{labelBotao.slice(1, labelBotao.length)}
        </button>
    )
}

