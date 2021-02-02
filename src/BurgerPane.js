import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
  return (
    <div className="burger-pane">
      <h1>Borgor Pane</h1> 
      <BurgerStack burgerIngredients={props.burgerIngredients}/>
      <ClearBurger clearBurger={props.clearBurger}/>
    </div>
  )
}

export default BurgerPane;