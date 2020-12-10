import React from 'react';

import ReactDOM from 'react-dom';
import usuarioImg from '../src/imgs/usuario.png';
import'./bootstrap.min.css';
import logotipo from '../src/imgs/logo.png';
import  './Normalize.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


export  default function Nav(props){
    return(
               
            <div>
                <nav id="navprincipal" >
                            <div className="container navprincipal">

                                <div className="row">

                                    <div class="col-sm-3">
                                        <Tippy content='Imagem do Logo'>
                                            <img className="img-fluid "src={logotipo} alt="Logo"/>
                                        </Tippy>    
                                    </div>
                                    <div className="col-sm-6">
                                            <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <Tippy content="Home">
                                                <a className="nav-link btnhome " href="#">Home</a>
                                                </Tippy>
                                            </li>
                                            <li className="nav-item">
                                                <Tippy content='Eventos'>
                                                <a className="nav-link btnhome" href="#">Eventos</a>
                                                </Tippy>
                                            </li>
                                            <li className="nav-item ">
                                                <Tippy content='Usuarios'>
                                                <a className="nav-link btnhome" href="#">Usuarios</a>
                                                </Tippy>
                                            </li>
                                            <li className="nav-item">
                                                <Tippy content='Relatorios'>
                                                <a className="nav-link btnhome" href="#">Relatorios</a>
                                                </Tippy>
                                            </li>
                                            </ul>
                                        
                                    </div>
                                    <div class="col-sm-3">
                                    
                                    <div className="imagemusuarios">   
                                    
                                            <img  className=" img-fluid " src={usuarioImg} alt="Logo"/>
                                            
                                    </div>    

                                        <div className=" usuariologin"> 
                                        <Tippy content='Usuario'>                              
                                            <a className="  usuarios textos " href="#" >Igor Gonçalves </a>
                                        </Tippy>  
                                        </div>    
                                            
                                        <div className=" usuariologin">  
                                        
                                        <a className="linkdesconect textos" href="#" >Desconectar</a>   
                                        
                                        </div>
                                        
                                        
                                    </div>

                                </div>

                            </div>

                    </nav> 
                    <nav className="estilo"></nav>
         </div>
            
           
           
    );
}