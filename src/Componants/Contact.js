import { useState } from 'react';
import './Main.css';
import axios from 'axios';
function Contact(){

    var[mob, setMob] = useState({id:'', mName:'', brand:'', price:'', image:''});

    var hChange = (e) =>{
        var{name, value} = e.target;
        setMob({...mob, [name]:value});
    }

    var[res, setRes] = useState("");
    var handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/mobile", mob).then(()=>{setRes("Added successfully")}).catch(()=>{setRes("Something wents wrong")});
    }

    return(
        <div className='contact-page'>
            <h1>Hello From Contact</h1>

            <form onSubmit={handleSubmit}>
                <input name="id" value={mob.id} onChange={hChange} />
                <input name="mName" value={mob.mName} onChange={hChange} />
                <input name="brand" value={mob.brand} onChange={hChange} />
                <input name="price" value={mob.price} onChange={hChange} />
                <input name="image" value={mob.image} onChange={hChange} />

                <button type='submit'>Submit</button>

                <h1>{mob.mName}</h1>
                <h1>{mob.brand}</h1>
                <h1>{mob.price}</h1>
            </form>
        </div>
    )
}

export default Contact;