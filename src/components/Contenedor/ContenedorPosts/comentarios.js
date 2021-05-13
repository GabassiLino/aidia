import React from 'react';
import './comentarios.css';
import axios from '../../../axios.js';


const Comentario = () => {

    const comentar = () => {

        let date = new Date();
        let h = date.getHours();
        h = h + ":" + date.getMinutes();

        const data = {
            user: document.getElementById("user").value,
            coment: document.getElementById("coment").value,
            time: h
        }
        if (data.user === '' || data.coment === '') {
            return
        }
        else {
            axios.post('/posts/comentarios.json', data);
        }
    }

    return (
        <div className="comentar">
            <form>
                <ul className="comentList">
                    <li><label>Tu nombre: </label></li>
                    <li><input className="inputUser" id="user" type="text" required minLength="3" maxLength="20"></input></li>
                    <li><label>Comentario: </label></li>
                    <li><textarea className="areaComent" id="coment" rows="2" required minLength="1" maxLength="140"></textarea></li>
                </ul>
                <button onClick={comentar}>Publicar comentario</button>
            </form>
        </div>
    );
}
export default Comentario;