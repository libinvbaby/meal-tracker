import React,{useState, useEffect} from 'react'
import axios  from 'axios'
import {API_KEY} from '../constants/constants'

function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState('')
    
    useEffect(()=>{
        axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`).then((res)=>{
            setImageUrl(res.data.image);
            console.log(res.data);
          })
    })
  return (
    <div className="container text-center py-5">
        <div className="row">
            <div className="col-md-6">
            <h5 className="text-center">{meal.title}</h5>
            <div className="instruction">
            <ul style={{listStyleType:"none"}}>
                <li>Preparation Time:{meal.readyInMinutes}</li>
                <li>Number of Serving:{meal.servings}</li>
            </ul>
        </div>
            </div>
            <div className="col-md-6  text-center">
            <div>
        <img width="200"   src={imageUrl} alt="recipe" />
        </div>
        <h5> <a href={meal.sourceUrl}> got to Recipe</a> </h5>
            </div>
        </div>
        
        
       
        

    </div>
  )
}

export default Meal