import './HeaderComponent.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { UseAuth } from '../../app/AuthContext/AuthContext';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';

function HeaderComponent() {
    const {user, unlogin} = UseAuth();
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
                                <p className='App-header-title-item0-text'> Личный кабинет сотрудника </p>
                            </div>
                            <div className='App-header-title-item1'>
                                <button onClick={() => unlogin(user)}> Выход </button>
                            </div>
                        </div>
                        <div className='App-header-control'>
                            <Link to="/my" className='App-header-control-item1'>
                                <button> Мои карточки </button>
                            </Link>
                            <Link to="/all" className='App-header-control-item2'>
                                <button> Все карточки </button>
                            </Link>
                            <Link to="/table" className='App-header-control-item3'>
                                <button> Таблица отчетности </button>
                            </Link>
                            <Link to="/peoples" className='App-header-control-item4'>
                                <button> Участники </button>
                            </Link>
                            <Link to="/profile" className='App-header-control-item5'>
                                <button> Мой профиль </button>
                            </Link>
                            <button className='App-header-contol-item0-mobile' onClick={() => setMobile_nav_view(!mobile_nav_view)}>Меню</button>
                            <button className='App-header-contol-item1-mobile' onClick={() => unlogin(user)}>Выход</button>
                            <MobileMenu view={mobile_nav_view} setView={setMobile_nav_view}/>
                        </div>
                    </header>
                )
            }
        </div>
    )
}

export default HeaderComponent;