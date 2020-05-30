import React from 'react';
import usuarioImg from '../src/imgs/usuario.png';
import'./bootstrap.min.css';
import logotipo from '../src/imgs/logo.png';


export  default function Nav(props){
    return(
               
            <div>
                <nav id="navprincipal" >
                            <div class="container navprincipal">

                                <div class="row">

                                    <div class="col-sm-3">
                                            <img class=""src={logotipo} alt="Logo"/>
                                    </div>
                                    <div class="col-sm-6">
                                            <ul class="nav justify-content-center">
                                            <li class="nav-item">
                                                <a class="nav-link btnhome " href="#">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link btnhome" href="#">Eventos</a>
                                            </li>
                                            <li class="nav-item ">
                                                <a class="nav-link btnhome" href="#">Usuarios</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link btnhome" href="#">Relatorios</a>
                                            </li>
                                            </ul>
                                        
                                    </div>
                                    <div class="col-sm-3">
                                    
                                        
                                            <img  class="imagemusuarios" src={usuarioImg} alt="Logo"/>
                                        
                                        <div class=" usuariologin">                                 
                                            <a class="  usuarios" href="#">Igor Gonçalves </a>
                                        </div>    
                                            
                                        <div class=" usuariologin">   
                                        <a class="linkdesconect" href="#" >Desconectar</a>   
                                        </div>
                                        
                                        
                                    </div>

                                </div>

                            </div>

                    </nav> 
                    <nav class="estilo"></nav>
         </div>
            
           
           
    );
}