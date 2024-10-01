import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from './pages/RootPage/RootPage';
import PrivateAuthSwitch from './app/PrivateAuthSwitch/PrivateAuthSwitch';
import MyCardsPage from './pages/MyCardsPage/MyCardsPage';
import AllCardsPage from './pages/AllCardsPage/AllCardsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PeoplesPage from './pages/PeoplesPage/PeoplesPage';
import TablePage from './pages/TablePage/TablePage';
import AuthProvider from './app/AuthProvider/AuthProvider';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route index path="/" element={<RootPage />}/>
              <Route path='/error' element={<ErrorPage />} />
              <Route element={<PrivateAuthSwitch />}>
                <Route path='/my' element={<MyCardsPage />}/>
                <Route path='/all' element={<AllCardsPage />}/>
                <Route path='/profile' element={<ProfilePage />}/>
                <Route path='/peoples' element={<PeoplesPage />}/>
                <Route path="/table" element={<TablePage />}/>
              </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
