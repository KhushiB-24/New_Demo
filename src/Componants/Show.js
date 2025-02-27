import axios from "axios"
import { useState } from "react"

function Show(){

    var[products, setProducts] = useState([]);
    axios.get("https://localhost:8080/movies").then((r)=>{setProducts(r.data)}).catch((er)=>{console.log(er)});
    return(
        <div>
            <div>{products[1] ? <div>{products[1].title}</div> : <h1>Loading....</h1>}</div>
        </div>
    )
}

//.map((a)=>{return <div><h1>{a.title}</h1></div>})
export default Show;