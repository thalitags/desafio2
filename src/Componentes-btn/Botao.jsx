import React from 'react';
import './Botao.css';

function Botao(props){
return(
    <button id="botaogeral">
        {props.nome}
    </button>
)
}
export default Botao;