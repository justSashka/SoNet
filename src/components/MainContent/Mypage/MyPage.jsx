import Fio from './MainInfo/Fio.jsx';
import LifeInfo from './LifeInfo/LifeInfo.jsx';
import Stats from './MainInfo/Stats/Stats.jsx';
import Photo from './MainInfo/Photo/Photo.jsx';
import PostForm from './Posts/PostForm/PostForm.jsx';
import Posts from './Posts/Posts.jsx';
import s from './MyPage.module.css';


const MyPage = (props) => {
    return (
        <div className={s.myPageWrapper}>
           <div className={s.mainInfoContainer}>
               <div className={s.avaContainer}>
                   <img src="/ava.jpg" alt="Ava" className={s.avaImg} width="300px" />
                   <Fio name='Richard' surname='Batsbak' />
               </div>
               <div className={s.mainInfo}>
                   <LifeInfo bday='20.09.1997' gender='Male' city='Maskantje' job='Freelance' skills='Js, HTML, Css, React' />
                   <Stats friendsCount='3' postsCount='4' likesCount='5' requestsCount='1' />
               </div>
           </div>
           <Photo />
           <div className={s.wallContainer}>
               <PostForm />
               <Posts posts ={props.posts}/>
           </div>
        </div>
    );
}
export default MyPage;