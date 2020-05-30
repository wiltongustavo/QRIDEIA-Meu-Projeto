import React from 'react';

import eventosImg from '../src/imgs/icone-eventos.png';
import relatoriosImg from '../src/imgs/icone-relatorios.png';
import usuariosImg from '../src/imgs/icone-usuarios.png';
import'./bootstrap.min.css';



export default function Header() {
return (
    
    
        <header class="header1 position-relative">

            <div class="headerprincipal">
                <h5 class="textitem">Ola <strong> Igor Gonçalves</strong>, Selecione uma opção abaixo:</h5>
                  
                            <div class="cardelemento">
                        
                    
                                        <div>
                                          <img src={eventosImg} class="imgInfo" alt="..."/>
                                          <a href="#" class="infocomponente">Meus Eventos</a>
                                        </div>

                            </div>
                            <div class="cardelemento">

                                        <div>
                                        <img src={usuariosImg} class="imgInfo" alt="..."/>
                                        <a href="#" class="infocomponente">Usuários</a>
                                        </div>

                                    </div>
                            <div class="cardelemento">

                                        <div>
                                        <img src={relatoriosImg} class=" imgInfo" alt="..."/>  
                                        <a href="#" class="infocomponente">Relatorios</a>
                                        </div>        

                            </div>

            </div>

           
        </header>
);    

}

