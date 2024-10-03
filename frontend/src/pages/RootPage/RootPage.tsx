import { useState } from 'react';
import './RootPage.css';
import LoginForm from '../../forms/LoginForm/LoginForm';
import RegForm from '../../forms/RegForm/RegForm';

function RootPage() {
    const [view, setView] = useState<boolean>(false);
    return (
            <div className='LoginPage'>
                {!view ?
                <div className='InviteForm'>
                    <p className='InviteForm-title'> Авторизация </p>
                    <LoginForm />
                    <button className='InviteForm-view' onClick={() => setView(true)}> регистрация</button>
                </div> :
                <div className='InviteForm'>
                    <p className='InviteForm-title'> Авторизация </p>
                    <RegForm />
                    <button className='InviteForm-view' onClick={() => setView(false)}> Логин </button>
                </div>}
            </div>
    )
}

export default RootPage;