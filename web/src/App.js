import logo from './logo.svg';
import './App.css';

function App() {
  const faCeva = () => {
    alert('SALUT')
  }
  return (
    <div className="App">
      <header className="App-header">
       Smart home Andrei Geangu  
       <button onClick={faCeva}>APASAMA</button>
       <ul>
        <li>CEVa</li>
        <li>CEVa</li>
       </ul>
      </header>
    </div>
  );
}

export default App;
