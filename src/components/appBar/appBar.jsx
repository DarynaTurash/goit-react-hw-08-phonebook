import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/userMenu/userMenu';
import { AuthNav } from 'components/authNav/authNav';
import { Header, Container } from "components/appBar/appBar.styled";
import { Navigation } from 'components/navigation/navigation';


export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>
        <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
    </Header>
  );
};