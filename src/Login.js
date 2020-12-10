import React from 'react';
import ReactDOM from 'react-dom';
import'./bootstrap.min.css';
import  './Normalize.css';
import'./Login.css'
import'./index.js'



export default function Login(){


   

    return(
        
        <div className="logon-container">
            <section className="form" >

                <form id="app">
                < h1>Faça Seu Logon</h1>
                <input   placeholder="Digite Seu Nome"/>
                <button className="button1" type="submit">Entrar</button>

                </form>
                

            </section>
        </div>
    );
}