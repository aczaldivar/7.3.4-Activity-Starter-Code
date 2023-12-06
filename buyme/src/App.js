import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import gifts from './components/gifts'

function App() {
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Gifts</h1>

          <div className="navBar">
          <Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"gifts"}> 
                <Link to="/gifts">Our gifts</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>
  </div>
        </header>

        <div className="display">
          <Routes>
          <Route path="/" component={Home} />
          <Route path="/gifts" component={gifts} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;