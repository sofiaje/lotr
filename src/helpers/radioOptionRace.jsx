const radioOptionRace = () => {

    const radioOptionsRace = ["all", "human", "elf", "hobbit", "orcs", "dragons", "ainur", "black uruk", "raven", "stone-trolls", "eagle", "ents", "dwarf", "elves", "uruk-hai", "balrog", "maiar", "werewolves", "half-elven", "great spiders", "urulóki", "men"]
    const radioOpt = radioOptionsRace?.map((option, i) => {
        return (
            <option key={i} value={option}>{option}</option>
        )
    })

    return radioOpt
}
 
export default radioOptionRace;