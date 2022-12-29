import './App.css';
import Register from './components/Register/Register';
import Authorize from './components/Authorize/Authorize';
import Restore from './components/Restore/Restore';

function App() {
  return (
    <div className="App">
      <Register />
      <Authorize />
      <Restore />
    </div>
  );
}

export default App;
