import { useContext, useState } from 'react';
import './RootPage.css';
import { AuthContext, AuthContextValue } from '../../App';
import LoginForm from '../../forms/LoginForm/LoginForm';
import RegForm from '../../forms/RegForm/RegForm';
import HeaderComponent from '../../components/Header/HeaderComponent';
import TableDocs from '../../components/TableDocs/TableDocs';

function RootPage() {
    const context = useContext<AuthContextValue>(AuthContext);
    const [view, setView] = useState<boolean>(false);
    return (
        context.user === null ? (
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
            </div>
        ) : (
            <div className='MainPage'>
                <HeaderComponent />
                <TableDocs />
            </div>
        )
    )
}

export default RootPage;