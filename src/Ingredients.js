function Ingredients(props) {
  const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaisersemmel-.jpg'},
    {name: 'Sesame Bun', color: 'sandybrown', image: 'https://sc01.alicdn.com/kf/UTB8N0IcjrPJXKJkSafS761qUXXaS/936587729/UTB8N0IcjrPJXKJkSafS761qUXXaS.png_.webp'},
    {name: 'Gluten Free Bun', color: 'peru', image: 'https://glutenfreebaking.com/wp-content/uploads/2019/02/Soft-Gluten-Free-Dinner-Rolls-6.jpg'},
    {name: 'Lettuce Wrap', color: 'olivedrab', image: 'https://media4.s-nbcnews.com/j/newscms/2018_01/2281616/180104-romaine-lettuce-mn-0820_ec72c6630954ef7497ec89130e8dc742.nbcnews-fp-1200-630.jpg'},
    {name: 'Beef Patty', color: '#3F250B', image: 'https://lh3.googleusercontent.com/proxy/18njTluFq1h55cbORWxLWniZZ8pHgYUoNK3mfwoby0eEaXvpKreDHF41PVf4jTaGbhz8vCV3I12z5tqmtqvvIqUB6pcKvA'},
    {name: 'Soy Patty', color: '#3F250B', image: 'https://i.pinimg.com/originals/a9/49/65/a949656f8c08ef631fff83c3949b1797.jpg'},
    {name: 'Black Bean Patty', color: '#3F250B', image: 'https://www.seriouseats.com/images/2014/03/20140320-black-bean-burgers-food-lab-recipe-16.jpg'},
    {name: 'Chicken Patty', color: 'burlywood', image: 'https://images.eatthismuch.com/site_media/img/597_simmyras_690aee43-b750-4bb0-96f0-56648b33f2e1.png'},
    {name: 'Lettuce', color: 'lawngreen', image: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_1080,h_675/https://zipgrow.com/wp-content/uploads/2020/02/Fresh-lettuce-isolated-on-white-background-with-clipping-path-1080x675.jpeg'},
    {name: 'Tomato', color: 'tomato', image: 'https://previews.123rf.com/images/utima/utima1603/utima160300266/54475524-tomato-slice-isolated-on-white-background-top-view.jpg'},
    {name: 'Bacon', color: 'maroon', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F01%2Fbacon-cravings-patch-FT-BLOG0120.jpg'},
    {name: 'Onion', color: 'lightyellow', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG'}
  ];

    const showIngredients = ingredients.map((ingredient, idx) => {
      return (
        <div key={idx}>
          <h4 style={{color: ingredient.color, display: 'inline-block'}}>{ingredient.name}</h4>
          <button onClick={() => props.addIngredient(ingredient)} style={{margin: '10px'}}>Add to Borgor</button> 
        </div>
      ) 
    })

  return (
    <div>
      {showIngredients}
    </div>
  )
}

export default Ingredients;