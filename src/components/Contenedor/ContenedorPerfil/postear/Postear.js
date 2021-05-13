import React from 'react';
import './Postear.css';
import axios from '../../../../axios';


const Postear = () => {

    const enviar = () => {

        let date = new Date();
        let h = date.getHours();
        h = h + ":" + date.getMinutes();

        const data = {
            usuario: document.getElementById("usuario").value,
            title: document.getElementById("tittle").value,
            post: document.getElementById("post").value,
            time: h
        }
        
        if (data.usuario === '' || data.title === '' || data.post === '') {
           
            return
        }
        else {
            axios.post('/posts.json', data);
        }


    }

    return (
        <div className="postear">
            <form>
                <h1>¡Pide sugerencias!</h1>
                <ul className="postList">
                    <li><label>Título: </label></li>
                    <li><input id="tittle" type="text" required minLength="2" maxLength="34" placeholder="Ej.: Idea para pj secundario..."></input></li>
                    <li><label>Post: </label></li>
                    <li><textarea id="post" rows="5" required minLength="20" maxLength="500"></textarea></li>
                    <li><label>Tu nombre: </label></li>
                    <li><input id="usuario" type="text" required minLength="3" maxLength="20"></input></li>

                </ul>
                <button onClick={enviar}>Postear</button>

            </form>

        </div>

    );
}

export default Postear;