const radioOptionRace = () => {

    const radioOptionsRace = ["all", "human", "elf", "hobbit", "orc", "dragons", "ainur", "eagles", "eagle", "ents", "dwarf", "elves", "uruk-hai", "balrog", "maiar", "werewolves", "half-elven", "great spiders", "great eagles", "wraith", "goblin"]
    const radioOpt = radioOptionsRace?.map((option, i) => {
        return (
            <option key={i} value={option}>{option}</option>
        )
    })

    return radioOpt
}
 
export default radioOptionRace;