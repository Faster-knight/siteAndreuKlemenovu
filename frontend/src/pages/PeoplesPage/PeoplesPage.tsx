import { UseAuth } from '../../app/AuthContext/AuthContext';
import HeaderComponent from '../../components/Header/HeaderComponent';
import './PeoplesPage.css';

function PeoplesPage() {
    const {user} = UseAuth();
    return (
        <div className="PeoplesPage">
            <HeaderComponent />
            <div className="PeoplesPage">
                {
                    
                }
            </div>
        </div>
    )
}

export default PeoplesPage;