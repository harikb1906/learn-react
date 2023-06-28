import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman"/>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder woman"/>
      <Welcome name="Justice League"/> */}

      {/* State */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
}

export default App;
