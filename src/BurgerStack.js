function BurgerStack(props) {
  
  let userBurger = props.burgerIngredients.map((ingredient, idx) => {
    return <h1 style={{color: ingredient.color}} key={idx}>{ingredient.name}</h1>
  })
  console.log(userBurger)
  return (
    <div>

      {userBurger.reverse()}
    </div>
  )
}

export default BurgerStack;