import './App.css';
import basket from './basket.jpg';
import { GroceryList } from './GroceryList';
import shoppingAssistant from './shoppingAssistant.jpg';


function App() {
  return (
    <div className='app'>
      <img src={basket} width='250px' alt='Shopping basket'/>
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={shoppingAssistant} width='250px' alt='Shopping assistant' />
    </div>
  );
}

export default App;
