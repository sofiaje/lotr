const Character = ({ data }) => {
    const { name, _id, race, gender, birth, death, height, realm, spouse } = data
    if (name === "MINOR_CHARACTER") {
        return
    }
    return ( 
        <div className='p-4 rounded-lg bg-white text-black bg-opacity-90 drop-shadow-lg w-full md:w-[47%] xl:w-[32%]' key={_id}>
                <h2 className="text-3xl font-lord">{name}</h2>
                <p>{(race && race !== "NaN")  && `Race: ${race}`}</p>
                <p>{(gender && race !== "NaN")  && `Gender: ${gender}`}</p>
                <p>{(birth && birth !== "NaN")  && `Birth: ${birth}`}</p>
                <p>{(death && death !== "NaN")  && `Death: ${death}`}</p>
                <p>{(height && height !== "NaN")  && `Height: ${height}`}</p>
                <p>{(realm && realm !== "NaN")  && `Realm: ${realm}`}</p>
                <p>{(spouse && spouse !== "NaN")  && `Spouse: ${spouse}`}</p>

        </div>

    );
}
 
export default Character;