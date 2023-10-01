const Character = ({ data }) => {
    const { name, _id, race, gender, birth, death, height, realm, spouse } = data
    if (name === "MINOR_CHARACTER") {
        return
    }
    return ( 
        <li className='p-4 my-4 max-w-md rounded-lg bg-white drop-shadow-lg' key={_id}>
            <h2 className="text-3xl font-lord">{name}</h2>
            <p>{(race && race !== "NaN")  && `Race: ${race}`}</p>
            <p>{(gender && race !== "NaN")  && `Gender: ${gender}`}</p>
            <p>{(birth && birth !== "NaN")  && `birth: ${birth}`}</p>
            <p>{(death && death !== "NaN")  && `death: ${death}`}</p>
            <p>{(height && height !== "NaN")  && `height: ${height}`}</p>
            <p>{(realm && realm !== "NaN")  && `realm: ${realm}`}</p>
            <p>{(spouse && spouse !== "NaN")  && `spouse: ${spouse}`}</p>
        </li>

    );
}
 
export default Character;