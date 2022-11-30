import logo from './logo.svg';
import './App.css';
import node_pkg from '../package.json';
function App() {
    const client_pkg = node_pkg;
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.<br></br>
                Oh so this is ReactJS, interesting...<br></br>
                Go back to main site: <a className="App-link" href="https://choomai.tk">choomai.tk</a>
            </p>
            Package: <code>{client_pkg.name}@{client_pkg.version}</code>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noreferrer">Learn React</a>
        </div>
    );
}
export default App;