import './TableDocs.css';
import { UseAuth } from '../../app/AuthContext/AuthContext';
import ComboBox from '../ComboBox/ComboBox';

function TableDocs() {
    const {user} = UseAuth();
    return (
        <div className="TableDocs">
            <div className="TableDocs-select-panel">
                <p className="TableDocs-title">Отметки по задачам контрагента</p>
                <div className="TableDocs-select-panel-title">
                    <p>ФИО</p>
                    <p>Задача</p>
                    <p>Результат</p>
                    <p>Дата работы</p>
                    <p>Трудозатраты (часы)</p>
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