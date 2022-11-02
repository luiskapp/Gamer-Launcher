import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'assets/types/routes';
import Home from "pages/Home/index";
import Login from "pages/Login";
import Register from "pages/Register"
import Profiles from "pages/Profiles/index"
import Settings from 'pages/Settings';
import ManageGames from 'components/ManageGames';
import ManageUsers from 'components/ManageUsers';
import ManageGeners from 'components/ManageGeners';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.PROFILES} element={<Profiles />} />
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.SETTINGS} element={<Settings />} >
                <Route path={RoutePath.SETTINGS_GENER} element={<ManageGeners />} />
                <Route path={RoutePath.SETTINGS_GAMES} element={<ManageGames />} />
                <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
            </Route>

        </Routes>
    );
}

export default Router;