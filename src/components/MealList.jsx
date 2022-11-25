import React from 'react'
import Meal from './Meal';
function MealList({food}) {
    const nutrients =food.nutrients;
    console.log(food.nutrients)
  return (
    <main className="conatiner">
        <div>
            <h2 className="calories">Calories:{nutrients.calories}</h2>
            <h2 className="carb">Carbs:{nutrients.carbohydrates}</h2>
            <h2 className="calories">Fat:{nutrients.fat}</h2>
            <h2 className="calories">Protein:{nutrients.protein}</h2>
        </div>
        {
            food.meals.map((meal)=>{
                return <Meal  key={meal.id} meal={meal} />
            })
        }
    </main>
  )
}

export default MealList