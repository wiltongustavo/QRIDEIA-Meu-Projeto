import React from 'react';

import eventosImg from '../src/imgs/icone-eventos.png';
import relatoriosImg from '../src/imgs/icone-relatorios.png';
import usuariosImg from '../src/imgs/icone-usuarios.png';
import'./bootstrap.min.css';
import  './Normalize.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';



export default function Header() {


return (
    
    
        <header className="header1 ">

            <div className="headerprincipal">
              <div className="textitem">
                <h5 className=" ">Ola <strong className=""> Igor Gonçalves</strong>, Selecione uma opção abaixo:</h5>
              </div> 
                            <div className="cardelemento">
                           
                                        <Tippy content='Meus Eventos'>
                                        <div className="item1"> 
                                          <img src={eventosImg} className="imgInfo" alt="..."/>
                                          <a href="#" class="infocomponente"><strong className="textos">Meus Eventos</strong></a>
                                        </div>
                                        </Tippy>
                           
                                        <Tippy content='Usuários'>
                                        <div className="item1">
                                          
                                        <img src={usuariosImg} className="imgInfo" alt="..."/>
                                        <a href="#" class="infocomponente" data-toggle="tooltip" data-placement="top" title="Usuarios" ><strong className="textos">Usuários</strong></a>
                                        </div>
                                      </Tippy>
                                   
                                      <Tippy content='Relatorios'>
                                        <div className="item1">

                                        <img src={relatoriosImg} className=" imgInfo" alt="..."/>  
                                        <a href="#" className="infocomponente"><strong className="textos">Relatorios</strong></a>
                                        
                                        </div>        
                                      </Tippy>
                            </div>

            </div>

           
        </header>
);


}




