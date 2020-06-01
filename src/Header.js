import React from 'react';

import eventosImg from '../src/imgs/icone-eventos.png';
import relatoriosImg from '../src/imgs/icone-relatorios.png';
import usuariosImg from '../src/imgs/icone-usuarios.png';
import'./bootstrap.min.css';
import  './Normalize.css';



export default function Header() {


return (
    
    
        <header className="header1 ">

            <div className="headerprincipal">
                <h5 className="textitem ">Ola <strong> Igor Gonçalves</strong>, Selecione uma opção abaixo:</h5>
                  
                            <div className="cardelemento">
                        
                    
                                        <div className="item"> 
                                          <img src={eventosImg} class="imgInfo" alt="..."/>
                                          <a href="#" class="infocomponente"><strong>Meus Eventos</strong></a>
                                        </div>

                            </div>
                            <div className="cardelemento">

                                        <div className="item">
                                        <img src={usuariosImg} class="imgInfo" alt="..."/>
                                        <a href="#" class="infocomponente" data-toggle="tooltip" data-placement="top" title="Usuarios" ><strong>Usuários</strong></a>
                                        </div>

                                    </div>
                            <div className="cardelemento">

                                        <div className="item">

                                        <img src={relatoriosImg} className=" imgInfo" alt="..."/>  
                                        <a href="#" className="infocomponente"><strong>Relatorios</strong></a>
                                        
                                        </div>        

                            </div>

            </div>

           
        </header>
);


}




