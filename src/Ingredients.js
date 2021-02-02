function Ingredients(props) {
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

    const showIngredients = ingredients.map((ingredient, idx) => {
      return (
        <div key={idx}>
          <h2 style={{color: ingredient.color}}>{ingredient.name}</h2>
          <button onClick={() => props.addIngredient(ingredient)}>Add to Borgor</button> 
        </div>
      ) 
    })

  return (
    <div>
      <h1>Here are the Ingredients</h1>
      {showIngredients}
    </div>
  )
}

export default Ingredients;