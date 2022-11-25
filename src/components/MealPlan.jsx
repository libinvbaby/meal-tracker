import React,{useState} from 'react'
import  axios  from 'axios'
import {API_KEY} from '../constants/constants'
import MealList from './MealList'

const MealPlan = () => {
    const [calories, setCalories] = useState(0)
    const [food, setFood] = useState(null)
    function getMealData(){
        axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`).then((res)=>{
            setFood(res.data);
            console.log(res.data);
          }).catch((err) => {
            let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
          alert( message);
          });
    }
    function handleChange(e){
       setCalories(e.target.value)
    }

  return (
    <div  className="container pt-5 text-center">
      <h3 className="p-3">Generate a meal plan with three meals per day (breakfast, lunch, and dinner).

</h3>
        <input className="form-control"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
    <button className="btn btn-primary mt-3"onClick={getMealData}>get Daily Meal Plan</button>

    <div>
<h5 style={{paddingTop:"30px"}}>Showing the daily plan of {calories} calories</h5>
    </div>
       
        {food && <MealList food={food}/>}
    </div>
  )
}

export default MealPlan