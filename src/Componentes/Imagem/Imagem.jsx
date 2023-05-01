import React from 'react';
import './Imagem.css';


function Imagem (props){
    return(
        <div id= 'divImagem'>
            <h3>{props.texto}</h3>
            <img src={props.local} alt='logo'/>
        </div>
    )
}
export default Imagem; 