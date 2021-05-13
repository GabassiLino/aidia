import React, { Component } from 'react';
import './contenedor.css'
import ContenedorPosts from './ContenedorPosts/ContenedorPost';
import ContenedorPerfil from './ContenedorPerfil/ContenedorPerfil';
import fire from '../../config/Fire';

const Contenedor = () => {

    return (
        <div className="conteiner">
            <div className="postsLi">
                <ContenedorPosts />
            </div>
            <div className="postear">
                <ContenedorPerfil />
            </div>
        </div>

    );
}

export default Contenedor;