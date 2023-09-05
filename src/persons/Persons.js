
function Persons({ pers }) {

    console.log(pers);
    return (
        <div className="persons">
            <p>id: {pers.id} ФИО {pers.name} профессия {pers.profession}</p>
            <img src={pers.photo} alt={pers.enName}></img>
        </div>
    )

}

export default Persons