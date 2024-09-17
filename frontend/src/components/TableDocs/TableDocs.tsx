import { useContext, useState } from 'react';
import './TableDocs.css';
import { AuthContext, AuthContextValue } from '../../App';
import logo from '../../assets/logo.png';

enum resultStateSet {
    unknown = -1,
    ready = 0,
    inprogress = 1,
    failed = 2
}

type DataTask = {
    fio: string,
    taskname: string,
    id: number,
    result: number,
    date: Date
}

function tempResult(input: string) {
    let temp = -1;
    switch (input.toLowerCase()) {
        case "неизвестно":
            return resultStateSet.unknown;
        case "готово":
            return resultStateSet.ready;
        case "в процессе":
            return resultStateSet.inprogress;
        case "провалена":
            return resultStateSet.failed;
    }
    return temp;
}
function tempResultView(input: number) {
    let temp = "";
    switch (input) {
        case -1:
            return "Неизвестно";
        case 0:
            return "Готово";
        case 1:
            return "В процессе";
        case 2:
            return "Провалена";
    }
    return temp;
}

function tempDateFormat(input: string) {
    const [day, mounth, year] = input.split(".");
    return new Date(+year, +mounth, +day);
}

function TableDocs() {
    const {user, unlogin} = useContext<AuthContextValue>(AuthContext);
    const [select, setSelect] = useState(
        {
            name: "",
            taskname: "",
            result: "",
            date: ""
        }
    )
    const [data, setData] = useState<DataTask[]>([
        {fio: "test", taskname: "test", id: -1, result: resultStateSet.failed, date: tempDateFormat(Date.now().toLocaleString())},
        {fio: "test1", taskname: "test1", id: -1, result: resultStateSet.inprogress, date: tempDateFormat(Date.now().toLocaleString())},
        {fio: "test2", taskname: "test2", id: -1, result: resultStateSet.ready, date: tempDateFormat(Date.now().toLocaleString())},
        {fio: "test3", taskname: "test3", id: -1, result: resultStateSet.unknown, date: tempDateFormat(Date.now().toLocaleString())},
        {fio: "test4", taskname: "test4", id: -1, result: resultStateSet.failed, date: tempDateFormat(Date.now().toLocaleString())},
    ]);
    const buttonHandlerUpdateData = () => {
        console.log("Update data with backend");
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        switch (id) {
            case 0:
                setSelect({name: event.target.value, taskname: select.taskname, result: select.result, date: select.date});
                break;
            case 1:
                setSelect({name: select.name, taskname: event.target.value, result: select.result, date: select.date});
                break;
            case 2:
                setSelect({name: select.name, taskname: select.taskname, result: event.target.value, date: select.date});
                break;
            case 3:
                setSelect({name: select.name, taskname: select.taskname, result: select.result, date: event.target.value});
                break;
        }
    }
    return (
        <div className='TableDocs'>
            <p className='TableDocs-title'>Отметки по задачам контрагента</p>
            {user === null ? null : <div className='TableDocs-title-update-div'>
                <button className='TableDocs-title-update' onClick={() => buttonHandlerUpdateData()}>Обновить данные</button>
                <button className='TableDocs-title-update' onClick={() => buttonHandlerUpdateData()}>Сохранить данные</button>
            </div>}
            {
                user === null ? (
                    <div className='TableDocs-error'>
                        <p className='TableDocs-error-title'>Ошибка загрузки данных пользователя</p>
                        <img src={logo} alt="logo.png" className='TableDocs-error-img' />
                        <button onClick={() => unlogin()} className='TableDocs-error-button'>Перейти на логин</button>
                    </div>
                ) : (
                    <div className='TableDocs-content'>
                        <div className='TableDocs-content-item0'>
                            <div className='TableDocs-content-item0-item0'>
                                <p>ФИО</p>
                                <input placeholder='фио контрагента' onChange={(event) => changeHandler(event, 0)}/>
                            </div>
                            <div className="TableDocs-content-item0-item1">
                                <p>Имя задачи</p>
                                <input placeholder='название задачи' onChange={(event) => changeHandler(event, 1)}/>
                            </div>
                            <div className="TableDocs-content-item0-item2">
                                <p>Статус выполнения</p>
                                <input placeholder='статус' onChange={(event) => changeHandler(event, 2)}/>
                            </div>
                            <div className="TableDocs-content-item0-item3">
                                <p>Дата</p>
                                <input placeholder='XX.XX.XXXX формат' onChange={(event) => changeHandler(event, 3)}/>
                            </div>
                        </div>
                        <div className="TableDocs-content-item1" id='TableDocs-content-item1'>
                            {
                                data.map(
                                    elem => 
                                        select.taskname === elem.taskname ||
                                        select.name === elem.fio ||
                                        tempResult(select.result) === elem.result ||
                                        tempDateFormat(select.date) === elem.date ?
                                    <div className='TableDocs-content-item1-task'>
                                        <p>{elem.fio}</p>
                                        <p>{elem.taskname}</p>
                                        <p>{tempResultView(elem.result)}</p>
                                        <p>{elem.date.toLocaleDateString()}</p>
                                    </div> : null
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TableDocs;