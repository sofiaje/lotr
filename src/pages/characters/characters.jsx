import { useState } from "react";
import ReactPaginate from 'react-paginate';

import Character from "../../fetures/character";
import getData from "../../api/getData"
import { filterCharacters } from "../../helpers/filterCharacters";
import paginate from "../../paginate/Paginate";

const characters = () => {
    const [userInput, setUserInput] = useState("")
    const [gender, setGender] = useState("all")
    const { char } = getData()

    const handleOnChange = (e) => {
        setUserInput(e.target.value.toLowerCase())
    }

    const handleRadioBtnChange = (e) => {
        setGender(e.target.value)
    }
    const filteredCharacters = filterCharacters(char, userInput, gender)
    const {characterPerPage, pagesVisited, pageCount, changePage} = paginate(filteredCharacters)
       
    const displayCharacters = filteredCharacters?.slice(pagesVisited, pagesVisited + characterPerPage).map((character) => {
        return <Character data={character} key={character._id} />
    })

    return (
        <div>
            <div className="flex flex-col items-start gap-1">
                <input id="inputName" placeholder="name of character" className="p-2 border rounded-md" type="text" onChange={(e) => { handleOnChange(e) }} />
                <div id="radioContainer" className="flex gap-2">
                    <label htmlFor="allgenders">
                        <input type="radio" name="gender" className="accent-black" id="allgenders" value="all" onChange={(e)=>{handleRadioBtnChange(e)}} defaultChecked/>
                        <span className="px-1">all genders</span>
                    </label>
                    <label htmlFor="male">
                        <input type="radio" name="gender" className="accent-black" id="male" value="male" onChange={(e)=>{handleRadioBtnChange(e)}} />
                        <span className="px-1">male</span>
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name="gender" className="accent-black" id="female" value="female" onChange={(e)=>{handleRadioBtnChange(e)}} />
                        <span className="px-1">female</span>
                    </label>
                </div>
                {/* <button className="p-2 mx-2 bg-black rounded-md text-white">Search</button> */}
            </div>
            <ul className="gap-3">
                {displayCharacters}
            </ul>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"flex gap-2"}
                activeClassName={"underline"}
            />
        </div>
    )
}

export default characters