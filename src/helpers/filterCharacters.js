export const filterCharacters = (array, userInput, gender) => {
    const newArray = array?.filter(x => {
        if (userInput === "") {
            return true
        }
        if (x.name.toLowerCase().includes(userInput)) {
            return true
        }
        return false
    })

    if (gender === "all") {
        return newArray
    }

    const filteredCharacters = newArray?.filter(x => {
        
        if (x?.gender?.toLowerCase() === gender) {
            return true
        }
        else {
            return false
        }
    })
    
    return filteredCharacters
}
 