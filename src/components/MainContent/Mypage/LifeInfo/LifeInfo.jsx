import s from './LifeInfo.module.css'


const LifeInfo = (props) => {
    return (
        <div className={s.infoWrapper}>
            <div className={s.infoItem}> Birth Day: {props.bday} </div>
            <div className={s.infoItem}> Gender: {props.gender} </div>
            <div className={s.infoItem}> City: {props.city} </div>
            <div className={s.infoItem}> Job: {props.job} </div>
            <div className={s.infoItem}> Skills: {props.skills} </div>
        </div>
    );
}
export default LifeInfo;