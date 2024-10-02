import './TableDocs.css';
import { UseAuth } from '../../app/AuthContext/AuthContext';
import ComboBox from '../ComboBox/ComboBox';

function TableDocs() {
    const {user} = UseAuth();
    return (
        <div className="TableDocs">
            <div className="TableDocs-select-panel">
                <p className="TableDocs-title">Отметки по задачам контрагента <button> Выгрузить данные </button></p>
                <div className="TableDocs-select-panel-title">
                    <p className='TableDocs-select-panel-title-FIO'> ФИО </p>
                    <p className='TableDocs-select-panel-title-CardTitle'> Название карточки </p>
                    <p className='TableDocs-select-panel-title-Task'> Задача </p>
                    <p className='TableDocs-select-panel-title-Date'> Дата работы </p>
                    <p className='TableDocs-select-panel-title-WorkingHours'> Трудозатраты (часы) </p>
                </div>
                <div className="TableDocs-select-panel-control">
                    <ComboBox list={[{id: 1, name: "Не выбрано"}]} />
                    <ComboBox list={[{id: 1, name: "Не выбрано"}]} />
                    <ComboBox list={[{id: 1, name: "Не выбрано"}]} />
                    <ComboBox list={[{id: 1, name: "Не выбрано"}]} />
                    <ComboBox list={[{id: 1, name: "Не выбрано"}]} />
                </div>
            </div>
            <div className="TableDocs-content">
                {
                    // TODO create view by select params
                }
            </div>
        </div>
    )
}

export default TableDocs;