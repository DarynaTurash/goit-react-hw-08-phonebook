import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { RestrictedRoute } from "./restrictedRoute";
import { PrivateRoute } from "./privateRoute";
import { useDispatch } from "react-redux";
import { useAuth } from "redux/hooks/useAuth";
import { useEffect, lazy } from "react";
import { refreshUser } from "redux/auth/operations";
import { Navigate } from "react-router-dom";


const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
const dispatch = useDispatch();
const { isRefreshing } = useAuth();

useEffect(() => {
    dispatch(refreshUser());
}, [dispatch]);

return isRefreshing ? (
    <b>Refreshing user...</b>) : (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
            path="/register"
            element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
        }/>
        <Route
            path="/login"
            element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            } />
        <Route
            path="/contacts"
            element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
            } />
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
    );
}
