import { useContext, useState } from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';
import './LoginForm.css';
import { AuthContext } from '../../App';

function LoginForm() {
    const [saveMe, setSaveMe] = useState<boolean>(false);
    const {login} = useContext(AuthContext);
    const [input, setInput] = useState(
        {
            name: "",
            pswd: ""
        }
    );
    const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        switch (id) {
            case 0:
                setInput({name: event.target.value, pswd: input.pswd});
                break;
            case 1:
                setInput({name: input.name, pswd: event.target.value});
                break;
        }
    }
    const clickInputHandler = () => {
        login(input.name, input.pswd);
    }
    return (
        <div className='LoginForm'>
            <input placeholder='Ваш логин' onChange={(event) => changeInputHandler(event, 0)} className='LoginForm-input'/>
            <input placeholder='Ваш пароль' onChange={(event) => changeInputHandler(event, 1)} className='LoginForm-input' type='password'/>
            <CheckBox changeHandler={(event) => setSaveMe(!saveMe)} textView={"Запомнить меня"} />
            <button onClick={clickInputHandler} className='LoginForm-button'>Войти</button>
        </div>
    )
}

export default LoginForm;