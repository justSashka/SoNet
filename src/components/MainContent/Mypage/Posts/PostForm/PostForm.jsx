import s from './PostForm.module.css';

const PostForm = () =>{
    return(
        <div className={s.postFormWrapper}>
            <form id='postForm' action="" method="post">
                <textarea className={s.postTxtArea} name="WallPost" id="PostTextArea" cols="60" rows="5" placeholder='Whats new?' form='postForm' maxLength='600'></textarea>
                <button className={s.submitPost} type="submit">Send</button>
            </form>
        </div>
    )
};

export default PostForm;