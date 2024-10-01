import { ReactNode, useState } from "react";
import { RoleSet, User } from "../Core";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const login = async (data: Object) => {
      // затычка для тестирования
      setUser({
        id: 0,
        username: "Trofim Postnikov",
      login: "login",
      FIO: "fio",
      male: "m",
      age: 21,
      companyposition: "temp",
      companyrole: "temp",
      email: "temp",
      role: RoleSet.user,
      rule: "temp",
      })
      navigate("/profile")
        try {
            const response = await fetch("your-api-endpoint/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.data) {
              setUser(res.data.user);
              setToken(res.token);
              localStorage.setItem("site", res.token);
              navigate("/profile");
              return;
            }
            throw new Error(res.message);
          } catch (err) {
            console.error(err);
          }
    }
    const unlogin = async (data: Object) => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        navigate("/");
    }
    const changeimg = async () => {

    }
    return (
        <AuthContext.Provider value={{user: user, login: login, unlogin: unlogin, changeimg: changeimg}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;