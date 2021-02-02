function BurgerStack(props) {
  
  let userBurger = props.burgerIngredients.map((ingredient, idx) => {
    console.log(ingredient)
    return (
      <div key={idx} style={{backgroundImage: `url(${ingredient.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '200px', height: '50px'}}>
        <h4 style={{color: ingredient.color}} >{ingredient.name}</h4>

      </div>
    )
  })
  console.log(userBurger)
  return (
    <div>

      {userBurger.reverse()}
    </div>
  )
}

export default BurgerStack;