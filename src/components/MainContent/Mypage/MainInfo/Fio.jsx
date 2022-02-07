import s from './Fio.module.css'


const Fio = (props) => {
    return (
        <div className={s.fio}> {props.name} {props.surname} </div>           
    );
}
export default Fio;