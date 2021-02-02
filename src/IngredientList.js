import Ingredient from './Ingredient';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
];

function showIngredients() {
  return ingredients.map((ingredient, idx) => {
    return <Ingredient name={ingredient.name} color={ingredient.color} key={idx}/>
  })
}

function IngredientList(props) {
  return (
    <div>
      <h1>Ingredient List</h1>
      {showIngredients()}
    </div>
  )
}

export default IngredientList;