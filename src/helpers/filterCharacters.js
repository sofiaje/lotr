export const filterCharacters = (array, userInput, gender, race) => {

    const nameMatches = array?.filter(x => {
        if (userInput === "" || x.name.toLowerCase().includes(userInput)) {
            return true
        }
        return false
    })

    const genderMatches = nameMatches?.filter(x => {
        if (gender === "all" || x?.gender?.toLowerCase() === gender) {
            return true
        }
        return false
    })

    const filteredCharacters = genderMatches?.filter(x => {
        if (race === "all" || x?.race?.toLowerCase() === race) {
            return true
        } else if (race === "orcs" && x?.race?.toLowerCase() === "orc") {
            return true
        } else if (race === "eagle" && (x?.race?.toLowerCase() === "eagles" || x?.race?.toLowerCase() === "great eagles")) {
            return true
        }else {
            return false
        }
    })

    return filteredCharacters
}
 