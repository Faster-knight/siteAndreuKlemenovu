import { UseAuth } from '../../app/AuthContext/AuthContext';
import HeaderComponent from '../../components/Header/HeaderComponent';
import './AllCardsPage.css';

function AllCardsPage() {
    const {user} = UseAuth();
    return (
        <div className="AllCardsPage">
            <HeaderComponent />
        </div>
    )
}

export default AllCardsPage;