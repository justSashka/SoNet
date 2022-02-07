import s from './DialogMenuItem.module.css'


const DialogMenuItem = (props) => {
    return (
            <div className={s.dialogMenuItemWrapper}>
                <img className={s.dialogAva} src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/cf/cf09d05bcca7cb9584150bc1f27e680ce4049e0e_full.jpg" alt="avatar" />
                <div className={s.dialogName}>{props.name}</div>
            </div>
    );
}
export default DialogMenuItem;