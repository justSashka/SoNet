import s from './PhotoCard.module.css'


const PhotoCard = (props) => {
    return (
        <div className={s.photoCard}>
            <img src="https://i1.sndcdn.com/artworks-000638282971-3v591c-t500x500.jpg" alt="" width='150px' />
        </div>           
    );
}
export default PhotoCard;