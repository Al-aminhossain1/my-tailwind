import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl'>hello Tailwind</h1>
      <Pricing></Pricing>

    </div>
  );
}

export default App;
