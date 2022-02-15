import React from 'react';
import s from './PostForm.module.css';

const PostForm = (props) =>{

    let newPostElement = React.createRef();
    
   

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={s.postFormWrapper}>
            <div>
                <textarea className={s.postTxtArea} ref={newPostElement} onChange={onPostChange} cols="60" rows="5" maxLength='600' value={props.newPostText}/>
                <button className={s.submitPost} onClick={ addPost }>Send</button>
            </div>
        </div>
    )
};

export default PostForm;