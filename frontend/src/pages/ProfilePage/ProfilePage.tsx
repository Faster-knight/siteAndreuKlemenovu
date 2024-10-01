import './ProfilePage.css';
import { UseAuth } from '../../app/AuthContext/AuthContext';
import HeaderComponent from '../../components/Header/HeaderComponent';

function ProfilePage() {
    const {user} = UseAuth();
    return (
        <div className="ProfilePage">
            <HeaderComponent />
            <div className='App-profile-body'>
                <div className='App-profile-body-img'>
                    <div className='App-profile-body-img-item0'></div>
                    <button> Редактировать </button>
                </div>
                <div className='App-profile-body-left-div'>
                <p> {user ? user.FIO: "error"} </p>
                <p> Логин: {user ? user.login: "error"} </p>
                <p> Пол: {user ? user.male: "error"} Возраст: {user ? user.age: "error"} лет </p>
                </div>
                <div className='App-profile-body-div-line'></div>
                <div className='App-profile-body-right-div'>
                <p> Должность: {user ? user.companyposition: "error"} </p>
                <p> Роль: {user ? user.companyrole: "error"} </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;