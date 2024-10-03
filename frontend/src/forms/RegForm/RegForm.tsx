import './RegForm.css';

function RegForm() {
    return (
        <div className='RegForm'>
            <input placeholder='Фамилия' className='RegForm-Surname'/>
            <input placeholder='Имя' className='RegForm-Name'/>
            <input placeholder='Отчество' className='RegForm-MiddleName'/>
            <input placeholder='Логин' className='RegForm-Login'/>
            <input placeholder='Пароль' className='RegForm-Password'/>
            <input placeholder='Повторите пароль' className='RegForm-ConfirmPassword'/>
            <button className='RegForm-button'> Зарегистрироваться </button>
        </div>
    )
}

export default RegForm;