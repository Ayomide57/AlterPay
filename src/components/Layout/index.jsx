import Container from 'react-bootstrap/Container';
import Header from '../Header';

const Layout = ({children}) => {
  return (
    <Container>
      <Header/>
      <div>
        {children}
      </div>
    </Container>
  );
}

export default Layout;