import { useContext } from "react";
import { AuthContext, RoleSet } from "../../App";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const PrivateAdmin = () => {
    const { user } = useContext(AuthContext); // используем контекст для получения значения isAuthenticated
    const location = useLocation(); // получаем текущий маршрут с помощью хука useLocation()
    return (
      // если пользователь авторизован, то рендерим дочерние элементы текущего маршрута, используя компонент Outlet
      user !== null && user.role !== RoleSet.admin ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />
    );
}

export default PrivateAdmin;