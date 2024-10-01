import { useState } from 'react';
import './RootPage.css';
import LoginForm from '../../forms/LoginForm/LoginForm';
import RegForm from '../../forms/RegForm/RegForm';
import HeaderComponent from '../../components/Header/HeaderComponent';
import FooterComponent from '../../components/Footer/FooterComponent';

function RootPage() {
    const [view, setView] = useState<boolean>(false);
    return (
            <div className='LoginPage'>
                {!view ?
                <div className='InviteForm'>
                    <HeaderComponent />
                    <p className='InviteForm-title'>Авторизация</p>
                    <LoginForm />
                    <button className='InviteForm-view' onClick={() => setView(true)}>Регистрация</button>
                </div> :
                <div className='InviteForm'>
                    <HeaderComponent />
                    <p className='InviteForm-title'>Авторизация</p>
                    <RegForm />
                    <button className='InviteForm-view' onClick={() => setView(false)}>Логин</button>
                </div>}
                <FooterComponent />
            </div>
    )
}

export default RootPage;