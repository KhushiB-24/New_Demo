import './Student.css'

function Student(propes){
    return (
        <div className="st">
            <h1>{propes.name}</h1>
            <h2>{propes.city}</h2>
            <h2>{propes.email}</h2>
        </div>
    )
}

export default Student;