import axios from "axios"
import { useState } from "react"

function Filter(){
    var[products, setProducts] = useState([]);
    axios.get("https://fakestoreapi.com/products").then((r)=>{setProducts(r.data)}).catch((er)=>{console.log(er)});
    return(
        <div>
            <div>{products ? 
                <div>{products.map((a)=>{
                                    return <div>
                                        <h1>{a.title}</h1>
                                        <h2>{a.price}</h2>
                                        <h3>{a.description}</h3>
                                        <h3>{a.category}</h3>
                                    </div>})}</div> : <h1>Loading....</h1>}
                </div>
            
        </div>
    )
}

export default Filter;