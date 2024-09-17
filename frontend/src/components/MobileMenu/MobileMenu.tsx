import { Link } from 'react-router-dom';
import './MobileMenu.css';
import { useContext } from 'react';
import { AuthContext, AuthContextValue } from '../../App';

type Props = {
    view: boolean,
    setView: (newView: boolean) => void
}

function MobileMenu({view, setView}: Props) {
    const {unlogin} = useContext<AuthContextValue>(AuthContext);
    return (
        <div className={view ? "MobileMenu-show" : "MobileMenu-hide"}>
            <button className='MobileMenu-view' onClick={() => setView(false)}>Х</button>
            <div className='MobileMenu-content'>
                <Link to="/">
                    <button onClick={() => setView(false)}>Таблица отчетности</button>
                </Link>
                <Link to="/my">
                    <button onClick={() => setView(false)}>Мои карточки</button>
                </Link>
                <Link to="/all">
                    <button onClick={() => setView(false)}>Все карточки</button>
                </Link>
                <Link to="/profile">
                    <button onClick={() => setView(false)}>Профиль</button>
                </Link>
                <Link to="/people">
                    <button onClick={() => setView(false)}>Участники</button>
                </Link>
                <button onClick={() => unlogin()}>Выход</button>
            </div>
        </div>
    )
}

export default MobileMenu;