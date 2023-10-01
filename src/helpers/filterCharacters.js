export const filterCharacters = (array, userInput, gender) => {
    const filteredCharacters = array?.filter(x => {
        if (userInput === "") {
            return true
        }
        if (x.name.toLowerCase().includes(userInput)) {
            return true
        }
        return false
    })
    return filteredCharacters
}
 