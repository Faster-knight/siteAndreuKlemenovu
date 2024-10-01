import { createContext, useContext } from "react";
import { User } from "../Core";

interface AuthContextValue {
    user: User | null;
    login: (data: Object) => void;
    unlogin: (data: Object) => void;
    changeimg: () => void
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    login: () => {},
    unlogin: () => {},
    changeimg: () => {}
});

export const UseAuth = () => {return useContext<AuthContextValue>(AuthContext);}
export default AuthContext;