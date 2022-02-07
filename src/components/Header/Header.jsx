import s from './Header.module.css'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <img src="./Logo2.png" alt="Logo" className={s.headerLogo} />
            <div className={s.nav}>
                <Link className={s.headerLink} to="/">Home</Link>
                <Link className={s.headerLink} to="/mypage">MyPage</Link>
                <Link className={s.headerLink} to="/news">News</Link>
                <Link className={s.headerLink} to="/messages">Messages</Link>
                <Link className={s.headerLink} to="/friends">Friends</Link>
            </div>  
        </div>
    );

}
export default Header;