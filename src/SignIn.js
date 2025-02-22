import { useState } from "react";
import "./SignIn.css";

function SignIn(){
    var [name,setName] = useState("Khushi");

    var fun = ()=>{

        setName("Sachi");
    }

    var [num, setNum] = useState(0);

    var fun2 = ()=> {
            setNum(num +1)

        
    }

    var[col, setcol] = useState("green");
    var fun3 = ()=>{
       setcol("red");    
    }

    return(
        <div style={{ backgroundColor : col,
            height: "500px"}}> 
            <h1>Hello From SignIn {name}</h1>
            <button onClick={fun}>
                submit
            </button>

            <h2>{num}</h2>
            <button onClick={fun2}>Click to change</button>
            <br></br>
            <button onClick={fun3}>Change Background Color</button>
        </div>
    )
}

export default SignIn;