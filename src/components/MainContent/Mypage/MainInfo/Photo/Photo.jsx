import PhotoCard from './PhotoCard/PhotoCard.jsx';
import s from './Photo.module.css'


const Photo = (props) => {
    return (
        <div className={s.photo}>
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>           
    );
}
export default Photo;