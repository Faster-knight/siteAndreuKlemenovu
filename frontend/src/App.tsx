import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from './pages/RootPage/RootPage';
import PrivateAuthSwitch from './components/PrivateAuthSwitch/PrivateAuthSwitch';
import PrivateAdmin from './components/PrivateAdmin/PrivateAdmin';
import MyCardsPage from './pages/MyCardsPage/MyCardsPage';
import AllCardsPage from './pages/AllCardsPage/AllCardsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

export enum RoleSet {
  user = "User",
  guest = "Guest",
  admin = "Admin"
}

export interface User {
  id: number,
  username: string,
  login: string,
  FIO: string,
  male: string,
  age: number,
  companyposition: string,
  companyrole: string,
  email?: string,
  role: RoleSet,
  rule: string,
}

export interface AuthContextValue {
  user: User | null;
  login: (name: string, pswd: string) => void;
  unlogin: () => void;
  changeimg: () => void
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  unlogin: () => {},
  changeimg: () => {}
});

function getRandomString(length: number = 32) {
  let outString: string = '';
  let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }
  return outString;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [ssesion, setSsesion] = useState<string>("");
  const login = (name: string, pswd: string) => {
    // TODO create a fetch request in backend and read jwt token or user data
    // TODO create a new hash string ssesion
    setSsesion(getRandomString());
    setUser({id: 1, username: "Иван И.", FIO: "Иванов Иван Иванович", login: "IVANOV_1995", male: "М", age: 29, companyposition: "программист", companyrole: "администратор", email: undefined, role: RoleSet.guest, rule: "guest"});
  }
  const unlogin = () => {
    // TODO create a tetch request in backend to unlogin state
    setSsesion("");
    setUser(null);
  }
  const changeimg = () => {
    
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthContext.Provider value={{user, login, unlogin, changeimg}}>
          {
            <Routes>
              <Route index path="/" element={<RootPage />}/>
              <Route element={<PrivateAuthSwitch />}>
                <Route path='/my' element={<MyCardsPage />}/>
                <Route path='/all' element={<AllCardsPage />}/>
                <Route path='/profile' element={<ProfilePage />}/>
                <Route path='/peoples' />
                <Route element={<PrivateAdmin />}>
                 <Route path="/admin" />
                </Route>
              </Route>
            </Routes>
          }
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
