import { UseAuth } from '../../app/AuthContext/AuthContext';
import HeaderComponent from '../../components/Header/HeaderComponent';
import './MyCardsPage.css';

function MyCardsPage() {
    const {user} = UseAuth();
    return (
        <div className="MyCardsPage">
            <HeaderComponent />
        </div>
    )
}

export default MyCardsPage;