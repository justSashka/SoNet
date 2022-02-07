import DialogMenuItem from './DialogMenuitem/DialogMenuItem.jsx';
import s from './DialogMenu.module.css';


const DialogMenu = (props) => {
    return (
            <div className={s.dialogMenuWrapper}>
                <DialogMenuItem name='Jerry Van Boven' />
            </div>
    );
}
export default DialogMenu;