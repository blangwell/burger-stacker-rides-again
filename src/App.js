import './App.css';
import {useState} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

function App() {
  const [burger, setBurger] = useState([]);

  const addIngredient = (ingredient) => {
    setBurger(burger.concat(ingredient))
  }

  const clearBurger = () => setBurger([]);

  return (
    <div className="App">
      <IngredientList addIngredient={addIngredient}/>
      <BurgerPane burgerIngredients={burger} clearBurger={clearBurger}/>
    </div>
  );
}

export default App;
