import React,{useState} from 'react'
import axios from 'axios'
import {API_KEY} from '../constants/constants'
import GroceryList from './GroceryList'



function GroceryProduct() {
    const [Product, setProduct] = useState();
    const [productList, setProductList] = useState();

    function getProductList() {
        axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}&query=${Product}&number=20`).then((res)=>{
            setProductList(res.data)
            console.log(res.data)
        })
    }
    function handleChange(e){
        setProduct(e.target.value);
    }

  return (
    <div  className="container pt-5 text-center">
        <h3 style={{padding:"30px 0px"}}>Search packaged food products, such as frozen pizza or Greek yogurt.

</h3>
        <input className="form-control"
          type="text"
          placeholder="eg: pizza"
          onChange={handleChange}
        />
    <button className="btn btn-primary mt-3"onClick={getProductList}>search for product</button>

    <div>

    </div>
       {productList && <GroceryList productList={productList}/>}
    </div>
  )
}

export default GroceryProduct