 function Conditional(){
    var a = 30;
    var b = 33;
    var c = "";
    return (
        <div>
            {a == b && <h1>Its AND GATE</h1>} 
            {c || <h1>Its OR GATE</h1>}
            {a === b ? <h1>True</h1> : <h1>False</h1>}
        </div>
    )
 }
 export default Conditional;