import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className={styles.Main}>
       <NavBar />
       <Container>
          <h1>Home</h1>
          <h1>Sign in</h1>
       </Container>
    </div>
  );
}

export default App;
