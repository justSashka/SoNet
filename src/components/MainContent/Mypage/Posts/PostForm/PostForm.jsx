import React from 'react';
import { addPostActionCreator } from '../../../../../redux/states';
import { updateNewPostTextActionCreator } from '../../../../../redux/states';
import s from './PostForm.module.css';


const PostForm = (props) =>{

    let newPostElement = React.createRef();
    
   

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
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