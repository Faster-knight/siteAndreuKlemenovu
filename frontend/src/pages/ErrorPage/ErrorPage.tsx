import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../../app/AuthContext/AuthContext';
import './ErrorPage.css';

function ErrorPage() {
    const {user} = UseAuth();
    const navigate = useNavigate();
    const backHandler = () => {
        user === null ? navigate("/") : navigate("/profile")
    }
    return (
        <div className="ErrorPage">
            <p>Page not found 404</p>
            <button onClick={() => backHandler()}>Back to site</button>
        </div>
    )
}

export default ErrorPage;