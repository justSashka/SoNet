import s from './PostItem.module.css';


const PostItem = (props) =>{
    return(
        <div className={s.postItemWrapper}>
            <div className={s.postAuthor}>
                <img className={s.postAuthorAva} alt='authorAvatar' src="./Ava.jpg" />
                <div className={s.postButtonsBlock}>
                    <button className={s.postLike}>Like</button>
                    <button className={s.postDislike}>Dislike</button>
                </div>
            </div>
            <div className={s.postText}>{props.postText}</div>
            
        </div>
    );
}

export default PostItem;