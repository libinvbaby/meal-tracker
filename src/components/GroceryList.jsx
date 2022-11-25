import React,{useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../constants/constants'

function GroceryList({productList}) {
    const [imgUrl, setUrl] = useState('')
    axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}&query=${productList.products}&number=4`).then((res)=>{
        setUrl(res.data.products.image)
        console.log(imgUrl)
    })


    const grocery = productList.products
    console.log(grocery)
  return (
    <div className='container'>
        <div className="row">
        {
            grocery.map((values)=>{
                return(
                    <>
                    
                    <div className="col-md-3 pt-3">
                    <img style={{width:"100%"}} src={values.image} alt="" />
                    <p>{values.title}</p>
                   
                    </div>
                   


                    
                    
                    </>
                )
            })
        }
 </div>

    </div>
  )
}

export default GroceryList