import DialogMenuItem from './DialogMenuitem/DialogMenuItem.jsx';
import s from './DialogMenu.module.css';


const DialogMenu = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogMenuItem name={dialog.name} surname={dialog.surname} id={dialog.id}/> )
    
    return (
            <div className={s.dialogMenuWrapper}>
                {dialogsElements}
            </div>
    );
}
export default DialogMenu;