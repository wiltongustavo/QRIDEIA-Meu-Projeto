import React from 'react';
import usuarioImg from '../src/imgs/usuario.png';
import'./bootstrap.min.css';
import logotipo from '../src/imgs/logo.png';
import  './Normalize.css';



export  default function Nav(props){
    return(
               
            <div>
                <nav id="navprincipal" >
                            <div className="container navprincipal">

                                <div className="row">

                                    <div class="col-sm-3">
                                            <img className="img-fluid"src={logotipo} alt="Logo"/>
                                    </div>
                                    <div className="col-sm-6">
                                            <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link btnhome " href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btnhome" href="#">Eventos</a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link btnhome" href="#">Usuarios</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btnhome" href="#">Relatorios</a>
                                            </li>
                                            </ul>
                                        
                                    </div>
                                    <div class="col-sm-3">
                                    
                                        
                                            <img  className="imagemusuarios img-fluid" src={usuarioImg} alt="Logo"/>
                                        
                                        <div className=" usuariologin">                                 
                                            <a className="  usuarios " href="#">Igor Gonçalves </a>
                                        </div>    
                                            
                                        <div className=" usuariologin">   
                                        <a className="linkdesconect" href="#" >Desconectar</a>   
                                        </div>
                                        
                                        
                                    </div>

                                </div>

                            </div>

                    </nav> 
                    <nav className="estilo"></nav>
         </div>
            
           
           
    );
}