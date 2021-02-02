import Ingredients from './Ingredients';


function IngredientList(props) {
  return (
    <div>
      <h1>Ingredient List</h1>
      <Ingredients addIngredient={props.addIngredient} />
    </div>
  )
}

export default IngredientList;