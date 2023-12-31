import { useState } from "react";
import ReactPaginate from 'react-paginate';
import Character from "../../fetures/character";
import getData from "../../api/getData"
import { filterCharacters } from "../../helpers/filterCharacters";
import paginate from "../../paginate/Paginate";
import radioOptionsGender from "../../helpers/radioOptionGender"
import radioOptionRace from "../../helpers/radioOptionRace"

const characters = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const [userInput, setUserInput] = useState("")
    const [gender, setGender] = useState("all")
    const [race, setRace] = useState("all")
   
    // figure out how to fix and communicate error handling / loading
    const { char } = getData()
    // const char = [
    //     { name: "Agril", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Tanahe", gender: "Female", height: "short", race: "Human"},
    //     { name: "Iman", gender: "Male", height: "height", race: "Human"},
    //     { name: "Mori", gender: "Female", height: "tall", race: "Human"},
    //     { name: "Adanel", gender: "Female", height: "tall", race: "Human"},
    //     { name: "Adrahil I", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Moni", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Mori", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Mandela", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Mihnra", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Tramna", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Aegor", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Aenem", gender: "Male", height: "tall", race: "Human"},
    //     { name: "Klira", gender: "Male", height: "tall", race: "Human"},
    // ]


    // handles onchange in filter options
    const handleOnChange = (e, callback) => {
        callback(e.target.value.toLowerCase())
    }

    // filter array according to user input
    const filteredCharacters = filterCharacters(char, userInput, gender, race, setPageNumber)

    // creates variables for ReactPaginate
    const {characterPerPage, pagesVisited, pageCount, changePage} = paginate(filteredCharacters, pageNumber, setPageNumber)
       
    // creates a new array of characters according to pagenumber in paginate 
    const displayCharacters = filteredCharacters?.slice(pagesVisited, pagesVisited + characterPerPage).map((character) => {
        return <Character data={character} key={character._id} />
    })

    // map out options for gender and race and save in variable
    const radioOption = radioOptionsGender(handleOnChange, setGender)
    const radioOpt = radioOptionRace()

    return (
        <>
            <div className="flex flex-col items-start gap-1 rounded-lg p-4 my-4 bg-white text-black bg-opacity-90 w-full md:w-[47%] xl:w-[32%]">
                <input id="inputName" placeholder="name of character" className="p-2 border border-black rounded-md text-black" type="text" onChange={(e) => { handleOnChange(e, setUserInput) }} />
                <select onChange={(e) => { handleOnChange(e, setRace) }} className="p-1 border border-black rounded-md text-black" name="race" id="race">
                    {radioOpt}
                </select>
                <div id="radioContainer" className="flex gap-2">
                    {radioOption}
                </div>
            </div>
            <ul className="flex flex-wrap gap-5">
                {displayCharacters?.length > 0 ? displayCharacters : <p className="py-2 font-semibold">There are no characters that meet the search criteria</p>}
            </ul>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"flex gap-2"}
                activeClassName={"underline"}
            />
            
        </>
    )
}

export default characters