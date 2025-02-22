import { useState } from "react";

function ChangeStyle(){

    var[x, y] = useState({
        backgroundColor : "green",
        color : "white",
        height : "100px"
    });

    var fun = ()=>{
        y({backgroundColor : "Yellow",
            color : "black",
            height : "50px"
        });
    }


    var arr = ["Krutika", "Chhakuli", "Sumit", "Siddhesh"];
    var arr2 = ["Tanu", "Ashu", "Shubham", "Deep"];


    var[arr, newFrnds] = useState(arr);
    var changeName = ()=>{
        newFrnds(arr2);
    }

    return(
        <div>
            <h1>Hello form Change Style </h1>
            <div style={x}>
                box
            </div>
            <button onClick={fun}>change</button>


            <br></br>

            {arr.map((a)=>{
                return(
                    <div style={{display: "inline-block", margin:"20px"}}>
                        <h2>{a}</h2>
                    </div>
                );
            })}
            <button onClick={changeName}>Chnage Names</button>
        </div>
        
        
    )
}

export default ChangeStyle;