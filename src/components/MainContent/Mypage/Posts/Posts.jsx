import PostItem from './PostItem/PostItem.jsx';
import s from './Posts.module.css';

const Posts = (props) =>{

    let postElements = props.posts.map(post => <PostItem authorName={post.authorName} authorSurname={post.authorSurname} postText={post.postText} id={post.id}/> )

    return(
        <div className={s.postsWrapper}>
            {postElements}
        </div>
    )
};

export default Posts;