import { useSelector } from "react-redux/es/hooks/useSelector";
import { getIsLoggedIn } from "redux/auth/selectors";
import { NavigationStyled, NavLink } from "./navigation.styled";


export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
        <NavigationStyled>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">My contacts</NavLink>}
        </NavigationStyled>
    );
};