import { UseAuth } from '../../app/AuthContext/AuthContext';
import './FooterComponent.css';

function FooterComponent() {
    const {user} = UseAuth();
    return (
        <footer>
            <p>COPY ANDREY TEAM 2024</p>
        </footer>
    )
}

export default FooterComponent;