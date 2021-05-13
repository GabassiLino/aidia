import React, { useEffect, useState } from 'react';
import './contenedorPostStyles.css';
import './Posts/posts.css';
import axios from '../../../axios';
import Modal from './Modal';

const ContenedorPost = () => {
    const [posts, setPosts] = useState({});
    const [post2, setPost2] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [ids, setIds] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        axios.get('https://aidia-ab0dd.firebaseio.com/posts.json')
            .then(response => {
                setPosts(response.data);
            });
    }, [])
    useEffect(() => {
        let aux = [];
        let aux2= [''];
        for (const post in posts) {
            aux.push(posts[post]);
            aux2.push(post);
            
        }
        setIds(aux2);
        setPost2(aux);
    }, [posts])
    const handlePostClick = (_id) =>{
        setId(_id)
        console.log("guion bajo aidi", _id)
        setShowModal(true);
    }
    useEffect(() => {
        
        console.log("ID: ", ids);
    }, [ids])
    return (
        <div className="superContainer">
            <Modal showModal={showModal} setShowModal={setShowModal} id={id} post={posts}/>
            {
                post2 !== '' ? (post2.map((post, index) => (
                    <div className="posts" id={ids[index+1]} onClick={(event) => handlePostClick(event.target.id)}>
                        
                        <div className="perfil" id={ids[index+1]}>Usuario: {post.usuario}</div>
                        <div className="tiempo" id={ids[index+1]}>Hora de publicación: {post.time}</div>
                        <div className="publicacion" id={ids[index+1]}>{post.title}</div>
                    </div>

                )))

                    : <div className="posts">
                        <div className="perfil"></div>
                        <div className="tiempo"></div>
                        <div className="publicacion"></div>
                    </div>
            }
        </div>
    )
}

export default ContenedorPost;