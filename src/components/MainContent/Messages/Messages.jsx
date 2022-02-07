import DialogMenu from './DialogMenu/DialogMenu.jsx';
import Chat from './Chat/Chat.jsx';
import s from './Messages.module.css';


const Messages = (props) => {
    return (
        <div className={s.messagesWrapper}>
            <DialogMenu />
            <Chat />
        </div>
    );
}
export default Messages;