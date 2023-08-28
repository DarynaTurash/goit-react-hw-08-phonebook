import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
import { Wrapper, LogOutButton } from "./userMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    return (
        <Wrapper>
        <p>Wellcome, <b>{`${user.name}`}</b></p>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>Log out</LogOutButton>
        </Wrapper>
    );
};