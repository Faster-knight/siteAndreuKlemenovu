import { useLocation, Outlet, Navigate } from "react-router-dom";
import { UseAuth } from "../AuthContext/AuthContext";

const PrivateAuthSwitch = () => {
    const { user } = UseAuth(); // используем контекст для получения значения isAuthenticated
    const location = useLocation(); // получаем текущий маршрут с помощью хука useLocation()
    return (
      user === null ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />
    );
}

export default PrivateAuthSwitch;