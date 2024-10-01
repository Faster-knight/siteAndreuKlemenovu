import { UseAuth } from '../../app/AuthContext/AuthContext';
import HeaderComponent from '../../components/Header/HeaderComponent';
import TableDocs from '../../components/TableDocs/TableDocs';
import './TablePage.css';

function TablePage() {
    const {user} = UseAuth();
    return (
        <div className="TablePage">
            <HeaderComponent />
            <TableDocs />
        </div>
    )
}

export default TablePage;