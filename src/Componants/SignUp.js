import { useState } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
function SignUp(){

    var u = "Khushi";
    var p = "Khushi123";

    var[name, setName] = useState();
    var navigate = useNavigate()

    var inp = (a)=>{
        setName(a.target.value);
    }

    var[password, setPass] = useState();

    var inp2 = (b)=>{
        setPass(b.target.value);
    }

    function Login(){
        if(u === name && p === password){
            navigate("/home")
        }else{
            alert("Somethings went wrong")
        }
    }


    return(
        <div className='signup-page'>
            <h1>Hello From SignUp</h1>
            <label>Enter your name : </label>
            <input type='text' id='inp' onChange={inp} /><br/>
            <label>Enter your password : </label>
            <input type='password' id='pass' onChange={inp2}/>
            <h2>{name}</h2>

            <button onClick={Login}>Login</button>
        </div>
    )
}

export default SignUp;