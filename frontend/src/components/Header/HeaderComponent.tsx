import { useContext, useState } from 'react';
import './HeaderComponent.css';
import { AuthContext, AuthContextValue } from '../../App';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import MobileMenu from '../MobileMenu/MobileMenu';

function HeaderComponent() {
    const {user, unlogin} = useContext<AuthContextValue>(AuthContext);
    const [mobile_nav_view, setMobile_nav_view] = useState<boolean>(false);
    return (
        <div className='HeaderComponent'>
            {
                user === null ? (
                    <header className='App-header'>
                    </header>
                ) : (
                    <header className='App-header'>
                        <div className='App-header-title'>
                            <div className='App-header-title-item0'>
                                <img src={logo} alt='logo.png' className='App-header-title-item0-img' />
                                <p className='App-header-title-item0-text'>Сайт</p>
                            </div>
                            <div className='App-header-title-item1'>
                                <p>{user.username}</p>
                                <button onClick={() => unlogin()}>Выход</button>
                            </div>
                        </div>
                        <div className='App-header-control'>
                            <Link to="/my" className='App-header-control-item App-header-item0'>
                                <button>Мои карточки</button>
                            </Link>
                            <Link to="/all" className='App-header-control-item App-header-item1'>
                                <button>Все карточки</button>
                            </Link>
                            <Link to="/" className='App-header-control-item App-header-item2'>
                                <button>Таблица отчетности</button>
                            </Link>
                            <Link to="/profile" className='App-header-control-item App-header-item3'>
                                <button>Профиль</button>
                            </Link>
                            <Link to="/peoples" className='App-header-control-item App-header-item4'>
                                <button>Участники</button>
                            </Link>
                            <button className='App-header-contol-item0-mobile' onClick={() => setMobile_nav_view(!mobile_nav_view)}>Меню</button>
                            <button className='App-header-contol-item1-mobile' onClick={() => unlogin()}>Выход</button>
                            <MobileMenu view={mobile_nav_view} setView={setMobile_nav_view}/>
                        </div>
                    </header>
                )
            }
        </div>
    )
}

export default HeaderComponent;