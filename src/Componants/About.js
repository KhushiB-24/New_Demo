import './Main.css';
function About(){

    // Pure and Impure Function
    function mul(){
        var a = 10;
        var b = 20;
        var c = a *b;
        return c;
    }
    
    function mul2(a, b){
        var c = a * b;
        return c;
    }

    var p = 400;
    function mul3(a, b){
        var r = a*b*p;
        return r;
    }

    return(
        <div className='about-page'>
            <h1>Hello From About</h1>

            <p>{mul()}</p>
            <p>{mul2(12, 13)}</p>
            <p>{mul3(12, 13)}</p>
        </div>

    )
}

export default About;